function updateInputs(state) {
    Object.entries(state).forEach(el => {
        var elem = document.querySelector(`input#gdyinp[name='${el[0]}']`);
        var val = el[1];
        if (elem.type == "checkbox") elem.checked = Boolean(Number(val));
        else elem.value = val;
    });
}

function getInputs() {
    var state = {};
    document.querySelectorAll("input#gdyinp").forEach(elem => {
        var key = elem.name;
        var val = ((elem.type == "checkbox")? String(Number(elem.checked)) : elem.value);
        state[key] = val;
    });
    return state;
}

// on start, fetch state and update inputs
chrome.runtime.sendMessage({action: "getState"}, state => updateInputs(state));

// on input change, set state
document.querySelectorAll("input#gdyinp").forEach(elem => elem.addEventListener("change", () => {
    if (elem.name == "tryb_nauki") {
        if (!elem.checked) document.querySelector('input#gdyinp[name="show_answer_key"]').checked = false;
        document.querySelector('input#gdyinp[name="show_answer_key"]').disabled = !elem.checked;
    }
    chrome.runtime.sendMessage({action: "setState", state: getInputs()});
}));

document.querySelector("#version").innerText = chrome.runtime.getManifest().version;
