// Save the API URL
let allUrl = "http://127.0.0.1:5000/api/summary"

// API call for default appearance
d3.json(allUrl).then(function(data) {
    console.log(data[0].Breed);

// BREED FEATURE
    // Declare Breed options variable
    let breedOptionsDupes = [];

    // Collect breed options
    for (i = 0; i < data.length; i++){
        breedOptionsDupes.push(data[i].Breed)
    };

    // Remove duplicate breed options
    let breedOptions = []
    breedOptionsDupes.forEach(element => {
        if (!breedOptions.includes(element)) {
            breedOptions.push(element);
        }
    });

    // Sort breed names alphabetically
    breedOptions = breedOptions.sort()

    console.log(breedOptions);

    // Save location of dropdown menu
    let dropMenuBreed = d3.select('#selDatasetBreed');

    // Create dropdown menu values for Breed
    for (i = 0; i < breedOptions.length; i++) {
        dropMenuBreed.append("option").text(breedOptions[i]).property("value", breedOptions[i])
    };

    // Clear the default Breed selection
    document.getElementById('selDatasetBreed').selectedIndex = -1;


// AGE FEATURE
    // Declare Age options variable
    let ageOptionsDupes = [];

    // Collect age options
    for (i = 0; i < data.length; i++){
        ageOptionsDupes.push(data[i].Age)
    };

    // Remove duplicate age options
    let ageOptions = []
    ageOptionsDupes.forEach(element => {
        if (!ageOptions.includes(element)) {
            ageOptions.push(element);
        }
    });

    // Sort age names alphabetically
    ageOptions = ageOptions.sort((a,b)=>a-b)

    console.log(ageOptions);

    // Save location of dropdown menu
    let dropMenuAge = d3.select('#selDatasetAge');

    // Create dropdown menu values for Age
    for (i = 0; i < ageOptions.length; i++) {
        dropMenuAge.append("option").text(ageOptions[i]).property("value", ageOptions[i])
    };

    // Clear the default Age selection
    document.getElementById('selDatasetAge').selectedIndex = -1;

// WEIGHT CHANGE FEATURE
    // Declare Weight Change options variable
    let wcOptionsDupes = [];

    // Collect Weight Change options
    for (i = 0; i < data.length; i++){
        wcOptionsDupes.push(data[i].WeightChange)
    };

    // Remove duplicate Weight Change options
    let wcOptions = []
    wcOptionsDupes.forEach(element => {
        if (!wcOptions.includes(element)) {
            wcOptions.push(element);
        }
    });

    // Sort Weight Change names alphabetically
    wcOptions = wcOptions.sort()

    console.log(wcOptions);

    // Save location of dropdown menu
    let dropMenuWC = d3.select('#selDatasetWeightChange');

    // Create dropdown menu values for Weight Change
    for (i = 0; i < wcOptions.length; i++) {
        dropMenuWC.append("option").text(wcOptions[i]).property("value", wcOptions[i])
    };

    // Clear the default Weight Change selection
    document.getElementById('selDatasetWeightChange').selectedIndex = -1;

// SEX FEATURE
    // Declare Sex options variable
    let sexOptionsDupes = [];

    // Collect Sex options
    for (i = 0; i < data.length; i++){
        sexOptionsDupes.push(data[i].Sex)
    };

    // Remove duplicate Sex options
    let sexOptions = []
    sexOptionsDupes.forEach(element => {
        if (!sexOptions.includes(element)) {
            sexOptions.push(element);
        }
    });

    // Sort Sex names alphabetically
    sexOptions = sexOptions.sort()

    console.log(sexOptions);

    // Save location of dropdown menu
    let dropMenuSex = d3.select('#selDatasetSex');

    // Create dropdown menu values for Sex
    for (i = 0; i < sexOptions.length; i++) {
        dropMenuSex.append("option").text(sexOptions[i]).property("value", sexOptions[i])
    };

    // Clear the default Sex selection
    document.getElementById('selDatasetSex').selectedIndex = -1;

// BOOLEAN FEATURES
    // Declare Breed options variable
    let boolOptions = ['True', 'False'];

    // Save location of dropdown menu
    // Create dropdown menu values for boolean features
    // Clear the default Sex selection
    let dropMenuNeutered = d3.select('#selDatasetNeutered');
    dropMenuNeutered.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuNeutered.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetNeutered').selectedIndex = -1;


    let dropMenuHospitalised = d3.select('#selDatasetHospitalised');
    dropMenuHospitalised.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuHospitalised.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetHospitalised').selectedIndex = -1;

    let dropMenuVomiting = d3.select('#selDatasetVomiting');
    dropMenuVomiting.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuVomiting.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetVomiting').selectedIndex = -1;

    let dropMenuDiarrhoea = d3.select('#selDatasetDiarrhoea');
    dropMenuDiarrhoea.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuDiarrhoea.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetDiarrhoea').selectedIndex = -1;
    
    let dropMenuHepatomegaly = d3.select('#selDatasetHepatomegaly');
    dropMenuHepatomegaly.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuHepatomegaly.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetHepatomegaly').selectedIndex = -1;

    let dropMenuThinDrySkin = d3.select('#selDatasetThinDrySkin');
    dropMenuThinDrySkin.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuThinDrySkin.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetThinDrySkin').selectedIndex = -1;

    let dropMenuAlopecia = d3.select('#selDatasetAlopecia');
    dropMenuAlopecia.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuAlopecia.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetAlopecia').selectedIndex = -1;

    let dropMenuPruritus = d3.select('#selDatasetPruritus');
    dropMenuPruritus.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuPruritus.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetPruritus').selectedIndex = -1;

    let dropMenuMuscleWastageWeakness = d3.select('#selDatasetMuscleWastageWeakness');
    dropMenuMuscleWastageWeakness.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuMuscleWastageWeakness.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetMuscleWastageWeakness').selectedIndex = -1;

    let dropMenuLethargy = d3.select('#selDatasetLethargy');
    dropMenuLethargy.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuLethargy.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetLethargy').selectedIndex = -1;

    let dropMenuPanting = d3.select('#selDatasetPanting');
    dropMenuPanting.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuPanting.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetPanting').selectedIndex = -1;

    let dropMenuNeurological = d3.select('#selDatasetNeurological');
    dropMenuNeurological.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuNeurological.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetNeurological').selectedIndex = -1;

    let dropMenuPolydipsia = d3.select('#selDatasetPolydipsia');
    dropMenuPolydipsia.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuPolydipsia.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetPolydipsia').selectedIndex = -1;

    let dropMenuPolyuria = d3.select('#selDatasetPolyuria');
    dropMenuPolyuria.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuPolyuria.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetPolyuria').selectedIndex = -1;

    let dropMenuPolyphagia = d3.select('#selDatasetPolyphagia');
    dropMenuPolyphagia.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuPolyphagia.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetPolyphagia').selectedIndex = -1;

    let dropMenuIncreasedALKP = d3.select('#selDatasetIncreasedALKP');
    dropMenuIncreasedALKP.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuIncreasedALKP.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetIncreasedALKP').selectedIndex = -1;

    let dropMenuIncreasedATL_GGT_AST = d3.select('#selDatasetIncreasedATL_GGT_AST');
    dropMenuIncreasedATL_GGT_AST.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuIncreasedATL_GGT_AST.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetIncreasedATL_GGT_AST').selectedIndex = -1;

    let dropMenuHypertensive = d3.select('#selDatasetHypertensive');
    dropMenuHypertensive.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuHypertensive.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetHypertensive').selectedIndex = -1;
    
    let dropMenuLowBloodSugar = d3.select('#selDatasetLowBloodSugar');
    dropMenuLowBloodSugar.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuLowBloodSugar.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetLowBloodSugar').selectedIndex = -1;

    let dropMenuHypothyroid = d3.select('#selDatasetHypothyroid');
    dropMenuHypothyroid.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuHypothyroid.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetHypothyroid').selectedIndex = -1;

    let dropMenuCruciateSurgery = d3.select('#selDatasetCruciateSurgery');
    dropMenuCruciateSurgery.append("option").text(boolOptions[0]).property("value", boolOptions[0])
    dropMenuCruciateSurgery.append("option").text(boolOptions[1]).property("value", boolOptions[1])
    document.getElementById('selDatasetCruciateSurgery').selectedIndex = -1;

});

function optionChangedBreed(newBreed) {
    // Save breed result to variable
    patientBreed = newBreed
    console.log(patientBreed)
};

function optionChangedAge(newAge) {
    // Save age result to variable
    patientAge = newAge
    console.log(patientAge)
};

function optionChangedSex(newSex) {
    // Save sex result to variable
    patientSex = newSex
    console.log(patientSex)
};

function optionChangedWeightChange(newWC) {
    // Save Weight Change result to variable
    patientWeightChange = newWC
    console.log(patientWeightChange)
};

function optionChangedNeutered(newNeutered) {
    // Encode result
    let patientNeutered = ""
    if (newNeutered === 'True'){
        patientNeutered = 1
    } else {
        patientNeutered = 0
    };
    console.log(patientNeutered)
};

function optionChangedHospitalised(newHospitalised) {
    // Encode result
    let patientHospitalised = ""
    if (newHospitalised === 'True'){
        patientHospitalised = 1
    } else {
        patientHospitalised = 0
    };
    console.log(patientHospitalised)
};

function optionChangedVomiting(newVomiting) {
    // Encode result
    let patientVomiting = ""
    if (newVomiting === 'True'){
        patientVomiting = 1
    } else {
        patientVomiting = 0
    };
    console.log(patientVomiting)
};

function optionChangedDiarrhoea(newDiarrhoea) {
    // Encode result
    let patientDiarrhoea = ""
    if (newDiarrhoea === 'True'){
        patientDiarrhoea = 1
    } else {
        patientDiarrhoea = 0
    };
    console.log(patientDiarrhoea)
};

function optionChangedHepatomegaly(newHepatomegaly) {
    // Encode result
    let patientHepatomegaly = ""
    if (newHepatomegaly === 'True'){
        patientHepatomegaly = 1
    } else {
        patientHepatomegaly = 0
    };
    console.log(patientHepatomegaly)
};

function optionChangedThinDrySkin(newThinDrySkin) {
    // Encode result
    let patientThinDrySkin = ""
    if (newThinDrySkin === 'True'){
        patientThinDrySkin = 1
    } else {
        patientThinDrySkin = 0
    };
    console.log(patientThinDrySkin)
};

function optionChangedAlopecia(newAlopecia) {
    // Encode result
    let patientAlopecia = ""
    if (newAlopecia === 'True'){
        patientAlopecia = 1
    } else {
        patientAlopecia = 0
    };
    console.log(patientAlopecia)
};

function optionChangedPruritus(newPruritus) {
    // Encode result
    let patientPruritus = ""
    if (newPruritus === 'True'){
        patientPruritus = 1
    } else {
        patientPruritus = 0
    };
    console.log(patientPruritus)
};

function optionChangedMuscleWastageWeakness(newMuscleWastageWeakness) {
    // Encode result
    let patientMuscleWastageWeaknes = ""
    if (newMuscleWastageWeakness === 'True'){
        patientMuscleWastageWeaknes = 1
    } else {
        patientMuscleWastageWeaknes = 0
    };
    console.log(patientMuscleWastageWeaknes)
};

function optionChangedLethargy(newLethargy) {
    // Encode result
    let patientLethargy = ""
    if (newLethargy === 'True'){
        patientLethargy = 1
    } else {
        patientLethargy = 0
    };
    console.log(patientLethargy)
};

function optionChangedPanting(newPanting) {
    // Encode result
    let patientPanting = ""
    if (newPanting === 'True'){
        patientPanting = 1
    } else {
        patientPanting = 0
    };
    console.log(patientPanting)
};

function optionChangedNeurological(newNeurological) {
    // Encode result
    let patientNeurological = ""
    if (newNeurological === 'True'){
        patientNeurological = 1
    } else {
        patientNeurological = 0
    };
    console.log(patientNeurological)
};

function optionChangedPolydipsia(newPolydipsia) {
    // Encode result
    let patientPolydipsia = ""
    if (newPolydipsia === 'True'){
        patientPolydipsia = 1
    } else {
        patientPolydipsia = 0
    };
    console.log(patientPolydipsia)
};

function optionChangedPolyuria(newPolyuria) {
    // Encode result
    let patientPolyuria = ""
    if (newPolyuria === 'True'){
        patientPolyuria = 1
    } else {
        patientPolyuria = 0
    };
    console.log(patientPolyuria)
};

function optionChangedPolyphagia(newPolyphagia) {
    // Encode result
    let patientPolyphagia = ""
    if (newPolyphagia === 'True'){
        patientPolyphagia = 1
    } else {
        patientPolyphagia = 0
    };
    console.log(patientPolyphagia)
};

function optionChangedIncreasedALKP(newIncreasedALKP) {
    // Encode result
    let patientIncreasedALKP = ""
    if (newIncreasedALKP === 'True'){
        patientIncreasedALKP = 1
    } else {
        patientIncreasedALKP = 0
    };
    console.log(patientIncreasedALKP)
};

function optionChangedIncreasedATL_GGT_AST(newIncreasedATL_GGT_AST) {
    // Encode result
    let patientIncreasedATL_GGT_AST = ""
    if (newIncreasedATL_GGT_AST === 'True'){
        patientIncreasedATL_GGT_AST = 1
    } else {
        patientIncreasedATL_GGT_AST = 0
    };
    console.log(patientIncreasedATL_GGT_AST)
};

function optionChangedHypertensive(newHypertensive) {
    // Encode result
    let patientHypertensive = ""
    if (newHypertensive === 'True'){
        patientHypertensive = 1
    } else {
        patientHypertensive = 0
    };
    console.log(patientHypertensive)
};

function optionChangedLowBloodSugar(newLowBloodSugar) {
    // Encode result
    let patientLowBloodSugar = ""
    if (newLowBloodSugar === 'True'){
        patientLowBloodSugar = 1
    } else {
        patientLowBloodSugar = 0
    };
    console.log(patientLowBloodSugar)
};

function optionChangedHypothyroid(newHypothyroid) {
    // Encode result
    let patientHypothyroid = ""
    if (newHypothyroid === 'True'){
        patientHypothyroid = 1
    } else {
        patientHypothyroid = 0
    };
    console.log(patientHypothyroid)
};

function optionChangedCruciateSurgery(newCruciateSurgery) {
    // Encode result
    let patientCruciateSurgery = ""
    if (newCruciateSurgery === 'True'){
        patientCruciateSurgery = 1
    } else {
        patientCruciateSurgery = 0
    };
    console.log(patientCruciateSurgery)
};


