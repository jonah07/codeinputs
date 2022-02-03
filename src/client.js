window.ci_unique = Math.floor(Math.random() * 10000);

function createInputElement(id, config) {
    let element = document.createElement("input");
    element.maxLength = 1;
    element.classList.add("codeinputs-input");
    element.style.caretColor = "transparent";
    element.style.width = "50px";
    element.style.fontSize = "4em";
    element.id = id;
    element.style.textAlign = "center";
    return element;
}

let codeinputs = (config) => {
    let elementId = (config.element ? config.element : "codeinputs");
    let element = document.getElementById(elementId);
    if(!element) {
        console.warn("[CodeInputs] Can't find #" + elementId);
        return;
    }
    let length = (config.length ? config.length : 6);
    console.log(config)
    let inputElements = [];
    for (let i = 1; i < (length + 1); i++) {
        let created = createInputElement(window.ci_unique + "-" + i, config);
        element.appendChild(created);
        inputElements.push(created);
        if(i != 1) {
            created.style.marginLeft = "10px";
        }
    }
    var i = 0;
    inputElements.forEach((el) => {
        el.addEventListener("keydown", (e) => {
            let element_index = parseInt(e.target.id.replace(window.ci_unique + "-", ""));
            // is it a number?
            if(isFinite(e.key)) {
                e.target.value = e.key;
                if(element_index < length) {
                    document.getElementById(window.ci_unique + "-" + (element_index + 1)).focus();
                } else if (element_index == 6) {
                    if(config.callback != undefined) {
                        let code = "";
                        inputElements.forEach(input => {
                            code = code + input.value;
                        })
                        if(code.length == length) {
                            config.callback(code);
                        }
                    }
                }
            } else if(e.key == "Backspace") {
                console.log("2")
                e.target.value = "";
                if(element_index != 1) {
                    document.getElementById(window.ci_unique + "-" + (element_index - 1)).focus();
                }
            }
            e.preventDefault();
        });
        i++;
    });

}