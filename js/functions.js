
const POUNDS_INTO_KG = 2.20462;
const KG_INTO_POUNDS = 0.453592;

/*
* DOM 
*/	
let inp_entry = document.getElementById("inpEntry");
let inp_result = document.getElementById("inpResult");
let btn_switchMeasure = document.getElementById("btn_switchMeasure");

btn_switchMeasure.addEventListener("click", ()=>{
    switchMeasures();
});

function switchMeasures(){
    let typeMeasure = Number(document.getElementById("btn_switchMeasure").dataset.unit);

    if(typeMeasure === 1){
        document.getElementById("btn_switchMeasure").dataset.unit = 2;
    }else if(typeMeasure === 2){
        document.getElementById("btn_switchMeasure").dataset.unit = 1;
    }else{
        console.log("error")
        document.getElementById("btn_switchMeasure").dataset.unit = 1;
    }

    convertMeasures();

    let currentLang = document.getElementById("btnSwitchLanguage").dataset.lang;
    setLanguage(currentLang === "es" ? spanish : english);
}

function convertMeasures(){
    let typeMeasure = document.getElementById("btn_switchMeasure").dataset.unit;
    Number(typeMeasure) === 1 ? typeMeasure = 2 : typeMeasure = 1;
    
    if(typeMeasure === 1){
        inp_result.value = inp_entry.value * POUNDS_INTO_KG;
    }else if(typeMeasure === 2 ){
        inp_result.value = inp_entry.value * KG_INTO_POUNDS;
    }else{
        inp_result = inp_entry.value * KG_INTO_POUNDS;
    }
}

inp_entry.addEventListener("keyup", ()=>{
    convertMeasures();
});

inp_entry.addEventListener("change", ()=>{
    convertMeasures();
});
