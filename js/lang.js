    /*
    * DOM 
    */
    let lbl_title = document.getElementById("lblTitle");
    let lbl_subtitle = document.getElementById("lblSubTitle");
    let lbl_entry = document.getElementById("lblEntry");
    let lbl_result = document.getElementById("lblResult");
    let lbl_btnLang = document.getElementById("lblBtnLang");
    let lbl_btnMeasures = document.getElementById("lblBtnMeasures");
    let btnSwitchLanguage = document.getElementById("btnSwitchLanguage");

    /*
    * LANGUAGE
    */
    let spanish = {
        title: "Mi conversor de medidas",
        subtitle: "Solo llene los datos!",
        btnLang: "Español",
        btnMeasure1: "LIBRAS A KILOGRAMOS",
        btnMeasure2: "KILOGRAMOS A LIBRAS",
        siu: "Libras",
        sau: "Kilogramos"
    };
    let english = {
        title: "My measurement converter",
        subtitle: "Just choose and enter the info!",
        btnLang: "English",
        btnMeasure1: "POUNDS TO KILOGRAMS",
        btnMeasure2: "KILOGRAMS TO POUNDS",
        siu: "Pounds",
        sau: "Kilograms"
    };


    function setLanguage(lang){
        lbl_title.innerText = lang.title;
        lbl_subtitle.innerText = lang.subtitle;
        lbl_btnLang.innerText = lang.btnLang;

        let measureType = Number(document.getElementById("btn_switchMeasure").dataset.unit);
        if(measureType === 1){
            lbl_btnMeasures.innerText = lang.btnMeasure1;
            lbl_entry.innerText = lang.siu;
            lbl_result.innerText = lang.sau;
        }else if(measureType === 2){
            lbl_btnMeasures.innerText = lang.btnMeasure2;
            lbl_entry.innerText = lang.sau;
            lbl_result.innerText = lang.siu;
        }else{
            lbl_btnMeasures.innerText = lang.btnMeasure2;
            lbl_entry.innerText = lang.sau;
            lbl_result.innerText = lang.siu;
        }
    }

    btnSwitchLanguage.addEventListener("click", (ev)=>{
        let language = document.getElementById("btnSwitchLanguage").dataset.lang;

        if(language === "en"){
            btnSwitchLanguage.dataset.lang = "es";
            setLanguage(spanish);
        }else if(language === "es"){
            btnSwitchLanguage.dataset.lang = "en";
            setLanguage(english);
        }else{
            setLanguage(english);
        }
    });	
