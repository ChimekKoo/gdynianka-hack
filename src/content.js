function updateFields(state) {
    Object.entries(state).forEach(el => {
        var key = el[0];
        var val = el[1];
        document.querySelector(`input[type="hidden"][name="${key}"]`).value = val;
    });
}

// on start fetch state and update fields
chrome.runtime.sendMessage({action: "getState"}, state => updateFields(state));

// on state change update fields
chrome.runtime.onMessage.addListener((rq, sender, send_resp) => {
    if (rq.action == "setState") updateFields(rq.state);
});
