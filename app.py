import pickle
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from sklearn.preprocessing import StandardScaler

from flask import Flask, jsonify, render_template

# Configure SQLite database connection
DATABASE_URL = "sqlite:///cushings.db"
engine = create_engine(DATABASE_URL, echo=True)

# Define the Base class for declarative models
Base = automap_base()
# Reflect the table
Base.prepare(autoload_with=engine)

# Save reference to the table
Cushings= Base.classes.cushings_table_final

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/api/summary")
def summary():
    # Create our session (link) from Python to the DB
	
	# Return a list of all data
	cushings_results = Session(engine).query(Cushings.PatientID, Cushings.Diagnosis, Cushings.Breed, Cushings.Age, Cushings.Sex, Cushings.Neutered, Cushings.WeightChange, Cushings.Weight, Cushings.Hospitalised, Cushings.Vomiting, Cushings.Diarrhoea, Cushings.Hepatomegaly, Cushings.ThinDrySkin, Cushings.Alopecia, Cushings.Pruritus, Cushings.MuscleWastageWeakness, Cushings.Lethargy, Cushings.Panting, Cushings.Neurological, Cushings.Polydipsia, Cushings.Polyuria, Cushings.Polyphagia, Cushings.IncreasedALKP, Cushings.IncreasedATL_GGT_AST, Cushings.Hypertensive, Cushings.LowBloodSugar, Cushings.Hypothyroid, Cushings.CruciateSurgery)

	# Close session
	Session(engine).close()

	# Convert list of tuples into normal list
	all_data = []
	for PatientID, Diagnosis, Breed, Age, Sex, Neutered, WeightChange, Weight, Hospitalised, Vomiting, Diarrhoea, Hepatomegaly, ThinDrySkin, Alopecia, Pruritus, MuscleWastageWeakness, Lethargy, Panting, Neurological, Polydipsia, Polyuria, Polyphagia, IncreasedALKP, IncreasedATL_GGT_AST, Hypertensive, LowBloodSugar, Hypothyroid, CruciateSurgery in cushings_results:
		cushings_dict = {}
		cushings_dict['PatientID'] = PatientID
		cushings_dict['Diagnosis'] = Diagnosis
		cushings_dict['Breed'] = Breed
		cushings_dict['Age'] = Age
		cushings_dict['Sex'] = Sex
		cushings_dict['Neutered'] = Neutered
		cushings_dict['WeightChange'] = WeightChange
		cushings_dict['Weight'] = Weight
		cushings_dict['Hospitalised'] = Hospitalised
		cushings_dict['Vomiting'] = Vomiting
		cushings_dict['Diarrhoea'] = Diarrhoea
		cushings_dict['Hepatomegaly'] = Hepatomegaly
		cushings_dict['ThinDrySkin'] = ThinDrySkin
		cushings_dict['Alopecia'] = Alopecia
		cushings_dict['Pruritus'] = Pruritus
		cushings_dict['MuscleWastageWeakness'] = MuscleWastageWeakness
		cushings_dict['Lethargy'] = Lethargy
		cushings_dict['Panting'] = Panting
		cushings_dict['Neurological'] = Neurological
		cushings_dict['Polydipsia'] = Polydipsia
		cushings_dict['Polyuria'] = Polyuria
		cushings_dict['Polyphagia'] = Polyphagia
		cushings_dict['IncreasedALKP'] = IncreasedALKP
		cushings_dict['IncreasedATL_GGT_AST'] = IncreasedATL_GGT_AST
		cushings_dict['Hypertensive'] = Hypertensive
		cushings_dict['LowBloodSugar'] = LowBloodSugar
		cushings_dict['Hypothyroid'] = Hypothyroid
		cushings_dict['CruciateSurgery'] = CruciateSurgery
		all_data.append(cushings_dict)

	return jsonify(all_data)

@app.route('/predict', methods=['POST'])
def predict():
	# Load the trained machine learning model
	with open('trained_model.pkl', 'rb') as model_file:
		trained_model = pickle.load(model_file)
	
	if request.method == 'POST':
		patientBreed = request.form['Breed']
		patientAge = request.form['Age']
		patientSex = request.form['Sex']
		patientNeutered = request.form['Neutered']
		patientWeightChange = request.form['WeightChange']
		patientWeight = request.form['Weight']
		patientHospitalised = request.form['Hospitalised']
		patientVomiting = request.form["Vomiting"]
		patientDiarrhoea = request.form['Diarrhoea']
		patientHepatomegaly = request.form['Hepatomegaly']
		patientThinDrySkin = request.form['ThinDrySkin']
		patientAlopecia = request.form['Alopecia']
		patientPruritus = request.form['Pruritus']
		patientMuscleWastageWeakness = request.form['MuscleWastageWeakness']
		patientLethargy = request.form['Lethargy']
		patientPanting = request.form['Panting']
		patientNeurological = request.form['Neurological']
		patientPolydipsia = request.form['Polydipsia']
		patientPolyuria = request.form['Polyuria']
		patientPolyphagia = request.form['Polyphagia']
		patientIncreasedALKP = request.form['IncreasedALKP']
		patientIncreasedATL_GGT_AST = request.form['IncreasedATL_GGT_AST']
		patientHypertensive = request.form['Hypertensive']
		patientLowBloodSugar = request.form['LowBloodSugar']
		patientHypothyroid = request.form['Hypothyroid']
		patientCruciateSurgery = request.form['CruciateSurgery']

		#Increased ALKP df
		ALKP_data = []
		if (patientIncreasedALKP == 'False'):
			ALKP_data.extend(1,0,0)
		else:
			ALKP_data.extend(0,1,0)

		ALKP_dict = {'ALKPFalse': ALKP_data[0], 'ALKPTrue': ALKP_data[1], 'ALKPN/A': ALKP_data[2]}
		ALKP_df = pd.DataFrame(ALKP_dict)

		#Increased ATL df
		ATL_data = []
		if (patientIncreasedATL_GGT_AST == 'False'):
			ATL_data.extend(1,0,0)
		else:
			ATL_data.extend(0,1,0)

		ATL_dict = {'ATLFalse': ATL_data[0], 'ATLTrue': ATL_data[1], 'ATLN/A': ATL_data[2]}
		ATL_df = pd.DataFrame(ATL_dict)

		#Numerical Scaling df
		Num_dict = {'Age': patientAge, 'Weight': patientWeight}
		Num_df = pd.DataFrame(Num_dict)

		scaled_num = StandardScaler().fit_transform(Num_df)

		scaled_num_df = pd.DataFrame(scaled_num_df, columns=['Age', 'Weight'])
		
		#Boolean df
		bool_dict = {'Neutered': patientNeutered, 'Hospitalised': patientHospitalised, 'Vomiting': patientVomiting, 'Diarrhoea': patientDiarrhoea, 'Hepatomegaly': patientHepatomegaly, 'ThinDrySkin': patientThinDrySkin, 'Alopecia': patientAlopecia, 'Pruritus': patientPruritus, 'MuscleWastageWeakness': patientMuscleWastageWeakness, 'Lethargy': patientLethargy, 'Panting': patientPanting, 'Neurological': patientNeurological, 'Polydipsia': patientPolydipsia, 'Polyuria': patientPolyuria, 'Polyphagia': patientPolyphagia, 'Hypertensive': patientHypertensive, 'LowBloodSugar': patientLowBloodSugar, 'Hypothyroid': patientHypothyroid, 'CruciateSurgery': patientCruciateSurgery}
		bool_df = pd.DataFrame(bool_dict)

		bool_df = bool_df.replace({'True': 1, 'False': 0})

		#Sex df
		sex_data = []
		if (patientSex == 'F'):
			sex_data.extend(1,0)
		else:
			sex_data.extend(0,1)

		sex_dict = {'F': sex_data[0], 'M': sex_data[1]}
		sex_df = pd.DataFrame(sex_dict)	

		#Weight Change df
		weightchange_data = []
		if (patientWeightChange == 'No change'):
			weightchange_data.extend(1,0,0)
		elif (patientWeightChange == 'Weight gain'):
			weightchange_data.extend(0,1,0)
		else:
			weightchange_data.extend(0,0,1)

		weightchange_dict = {'No change': weightchange_data[0], 'Weight gain': weightchange_data[1], 'Weight loss': weightchange_data[2]}
		weightchange_df = pd.DataFrame(weightchange_dict)

		#Breed df
		breed_data = []
		if (patientBreed == 'Bichon Frise'):
			breed_data.extend(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Border Terrier'):
			breed_data.extend(0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Boxer'):
			breed_data.extend(0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Cavalier King Charles Spaniel'):
			breed_data.extend(0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Chihuahua'):
			breed_data.extend(0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Cocker Spaniel'):
			breed_data.extend(0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Collie'):
			breed_data.extend(0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Crossbreed'):
			breed_data.extend(0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Jack Russell Terrier'):
			breed_data.extend(0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Labrador Retriever'):
			breed_data.extend(0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0)
		elif (patientBreed == 'Others'):
			breed_data.extend(0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0)
		elif (patientBreed == 'Poodle'):
			breed_data.extend(0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0)
		elif (patientBreed == 'Schnauzer'):
			breed_data.extend(0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0)
		elif (patientBreed == 'Shih Tzu'):
			breed_data.extend(0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0)
		elif (patientBreed == 'Springer Spaniel'):
			breed_data.extend(0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0)
		elif (patientBreed == 'Staffordshire Bull Terrier'):
			breed_data.extend(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0)
		elif (patientBreed == 'West Highland White Terrier'):
			breed_data.extend(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0)
		else:
			breed_data.extend(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1)

		breed_dict = {'Bichon Frise': breed_data[0], 'Border Terrier': breed_data[1], 'Boxer': breed_data[2], 'Cavalier King Charles Spaniel': breed_data[3], 'Chihuahua': breed_data[4], 'Cocker Spaniel': breed_data[5], 'Collie': breed_data[6], 'Crossbreed': breed_data[7], 'Jack Russell Terrier': breed_data[8], 'Labrador Retriever': breed_data[9], 'Others': breed_data[10], 'Poodle': breed_data[11], 'Schnauzer': breed_data[12], 'Shih Tzu': breed_data[13], 'Springer Spaniel': breed_data[14], 'Staffordshire Bull Terrier': breed_data[15], 'West Highland White Terrier': breed_data[16], 'Yorkshire Terrier': breed_data[17]}
		breed_df = pd.DataFrame(breed_dict)

		#Create total sample df
		sample_df = pd.concat([scaled_num_df, sex_df, weightchange_df, breed_df, ALKP_df, ATL_df, bool_df], axis=1)

		#Predict from model
		result = trained_model.predict(sample_df)

		#Result encoding
		result_encode = ""
		if (result == 1):
			result_encode = 'Patient has Cushings Disease'
		else:
			result_encode = 'Patient does not have Cushings Disease'

	return render_template('index.html', result_prediction=result_encode)

if __name__ == '__main__':
	app.run(debug=True)