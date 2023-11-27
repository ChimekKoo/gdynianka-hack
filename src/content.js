chrome.runtime.sendMessage({action: "getLearningModeState"}, (resp) => {
    document.querySelector('input[type="hidden"][name="tryb_nauki"][id="tryb_nauki"]').value = resp.state;
});