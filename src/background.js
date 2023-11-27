let enabled = 0;

chrome.action.onClicked.addListener(() => {
    enabled = 1-enabled;
    chrome.action.setIcon({path: `icon_${enabled}.png`});
    chrome.action.setTitle({title: {0: "OFF", 1: "ON"}[enabled]});
});

chrome.runtime.onMessage.addListener((rq, sender, send_resp) => {
    if (rq.action == "getLearningModeState") send_resp({state: enabled});
});
