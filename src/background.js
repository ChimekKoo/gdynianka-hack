var state = {
    tryb_nauki: "0",
    wykryj_blur: "0",
    ukryj_punkty: "0",
    ukryj_wstecz: "0",
    zmien_kolejnosc_pytan: "0",
    zmien_kolejnosc_odpowiedzi: "0",
};

// return state or update state on messages
chrome.runtime.onMessage.addListener((rq, sender, send_resp) => {
    if (rq.action == "setState") {
        state = rq.state;
        // send message to content to update hidden field
        chrome.tabs.query({active: true, currentWindow: true}, (t) => {
            chrome.tabs.sendMessage(t[0].id, {action: "setState", state: state});
        });
    }
    if (rq.action == "getState") send_resp(state);
});
