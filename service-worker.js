chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        chrome.storage.local.set({ overrideEnabled: true });
    }
    updateRuleBasedOnStorage();
});

chrome.runtime.onStartup.addListener(() => {
    updateRuleBasedOnStorage();
});

function updateRuleBasedOnStorage() {
    chrome.storage.local.get({ overrideEnabled: true }, (data) => {
        updateRule(data.overrideEnabled);
    });
}

function updateRule(enabled) {
    const rule = {
        id: 1,
        priority: 1,
        action: { type: 'redirect', redirect: { extensionPath: '/override.js' } },
        condition: { urlFilter: '*/alloy-editor-no-ckeditor-min.js*', resourceTypes: ['script'] }
    };

    if (enabled) {
        chrome.declarativeNetRequest.updateDynamicRules({ addRules: [rule], removeRuleIds: [1] });
    } else {
        chrome.declarativeNetRequest.updateDynamicRules({ addRules: [], removeRuleIds: [1] });
    }
}
