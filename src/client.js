window.ci_unique = Math.floor(Math.random() * 10000);
window.ci_fallback_config_active = false;

function createInputElement(id, config) {
    let element = document.createElement("input");
    element.maxLength = 1;
    element.classList.add("codeinputs-input");
    if(config.inputClass != undefined) {
        element.classList.add(config.inputClass);
    }
    element.style.caretColor = "transparent";
    
    element.style.width = (config.styles?.width ? config.styles.width : "50px");
    element.style.fontSize = (config.styles?.fontSize ? config.styles.fontSize : "4em");
    element.style.fontFamily = (config.styles?.font ? config.styles.font : "Helvetica Neue,Arial,sans-serif");
    element.id = id;
    element.style.textAlign = "center";
    return element;
}

function codeinputs_finish(config, inputElements, e) {
    if(config.callback != undefined) {
        let code = "";
        inputElements.forEach(input => {
            code = code + input.value;
        })
        if(code.length == (config.length ? config.length : 6)) {
            config.callback(code);
            e.target.blur();
        }
    }
} 

function codeinputs(config) {
    if(config.fallback) {
        window.ci_fallback_config_active = true;
    } else if(window.ci_fallback_config_active) {
        window.ci_fallback_config_active = false;
        document.getElementById("codeinputs").innerHTML = "";
    }
    let elementId = (config.element ? config.element : "codeinputs");
    let element = document.getElementById(elementId);
    if(!element) {
        console.warn("[CodeInputs] Can't find #" + elementId);
        return;
    }
    let length = (config.length ? config.length : 6);
    let inputElements = [];
    for (let i = 1; i < (length + 1); i++) {
        let created = createInputElement(window.ci_unique + "-" + i, config);
        element.appendChild(created);
        inputElements.push(created);
        if(i != 1) {
            created.style.marginLeft = "10px";
        }
    }
    inputElements.forEach((el) => {
        el.addEventListener("keydown", (e) => {
            let element_index = parseInt(e.target.id.replace(window.ci_unique + "-", ""));
            // is it a number?
            if(isFinite(e.key)) {
                let finished = false;
                e.target.value = e.key;
                if(element_index < length) {
                    document.getElementById(window.ci_unique + "-" + (element_index + 1)).focus();
                } else if (element_index == 6) {
                    codeinputs_finish(config, inputElements, e);
                    finished = true;
                }

                if(!finished) {
                    let allFilled = true;
                    inputElements.forEach((inel) => {
                        if(inel.value == "") {
                            allFilled = false;
                        }
                    });
                    if(allFilled) {
                        codeinputs_finish(config, inputElements, e);
                    }
                }
            } else if(e.key == "Backspace") {
                e.target.value = "";
                if(element_index != 1) {
                    document.getElementById(window.ci_unique + "-" + (element_index - 1)).focus();
                }
            } else if(e.key == "ArrowLeft") {
                if((element_index - 1) >= 1) { 
                    document.getElementById(window.ci_unique + "-" + (element_index - 1)).focus();
                }   
            } else if(e.key == "ArrowRight") {
                if((element_index + 1) <= length) { 
                    document.getElementById(window.ci_unique + "-" + (element_index + 1)).focus();
                }   
            }
            e.preventDefault();
        });
    });
}

codeinputs({fallback: true});