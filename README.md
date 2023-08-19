# IDENTIFICATION OF CUSHING’S SYNDROME IN CANINES

## Project Aim:

The aim is to develop  a logistic regression model that serves as a diagnostic tool to predict early detection of Cushing's Syndrome in canines.


## Description 
This repository contains code for a web application that predicts the likelihood of Cushing’s Disease in pets based on user-provided information. The application is built using Flask and utilizes a trained machine learning model for prediction.

## Features 
- Provides a user-friendly web interface to input pet information. 
- Predicts the likelihood of Cushings Disease using a trained machine learning model. 
- Displays the prediction result to the user.


## Installation 

On your terminal, 

1. Clone the repository:
git clone https://github.com/Kopixx/Project-4.git

2. Navigate to the project directory:
cd Project-4

3. Run the Flask Application:
python app.py

4. Access the web application by opening a web browser and navigating to http://127.0.0.1:5000/

## Usage

Open the web application in the browser

Fill out the form with the patient’s information

Click the “predict” button to see the prediction result






## Directory Structure

├── app.py                # Main Flask application file             
├── templates             # HTML templates for the web interface            
│   ├── index.html        # Home page template            
├── static             # Javascript and CSS Files            
│   ├── summary.js       # Dropdown menu, options and prediction endpoint       
├── trained_model.pkl     # Trained machine learning model (pickle format)      
├── README.md             # Project documentation


## Model Details

The trained logistic regression model is stored in the trained_model.pkl file. 


## Data Source

​​The application uses a SQLite database (cushings.db) to store and retrieve data. The data was sourced from an article in the Journal of Veterinary Internal Medicine, before being cleaned, preprocessed and converted to a SQLite database.

## Credits
This project was created by Shelly Wong, Kali Notaras, Tao Ma and Owen Johannes

## License

This project is licensed under the MIT License
