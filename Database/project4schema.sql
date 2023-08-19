-- DROP DATABASE IF EXISTS "PUT DATABASENAME HERE";

-- CREATE DATABASE "PUT DATABASENAME HERE";

-- Change connection to "PUT DATABASENAME HERE";

DROP TABLE IF EXISTS cushion_db;

CREATE TABLE cushion_db(
	PatientID INT NOT NULL,
	Diagnosis VARCHAR (10), 
    Breed VARCHAR (255) NOT NULL,
    Age INT NOT NULL,
    Sex VARCHAR (10) NOT NULL,
    Neutered BOOLEAN,
	WeightChange VARCHAR (100),
    Weight FLOAT,
	Hospitalised BOOLEAN,
	Vomiting BOOLEAN,
	Diarrhoea BOOLEAN,
    Hepatomegaly BOOLEAN,
	ThinDrySkin BOOLEAN,
    Alopecia BOOLEAN,
    Pruritus BOOLEAN,
    MuscleWastageWeakness BOOLEAN,
    Lethargy BOOLEAN,
    Panting BOOLEAN,
    Neurological BOOLEAN,
    Polydipsia BOOLEAN,
    Polyuria BOOLEAN,
    Polyphagia BOOLEAN,
    IncreasedALKP VARCHAR (100),
	IncreasedATL_GGT_AST VARCHAR (100),
    Hypertensive BOOLEAN,
    LowBloodSugar BOOLEAN,
    Hypothyroid BOOLEAN,
    CruciateSurgery BOOLEAN);
	
    
    
   

-- IMPORT CSV FILES IN THE ORDER OF TABLES CREATED

SELECT * FROM cushion_db;

