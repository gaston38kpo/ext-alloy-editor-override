document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const refreshButton = document.getElementById('refresh-button');

    // Load the saved state, defaulting to true if not set
    chrome.storage.local.get({ overrideEnabled: true }, (data) => {
        toggleSwitch.checked = data.overrideEnabled;
        updateRule(toggleSwitch.checked); // Ensure rule is in sync when popup opens
    });

    // Handle toggle switch change
    toggleSwitch.addEventListener('change', () => {
        const enabled = toggleSwitch.checked;
        chrome.storage.local.set({ overrideEnabled: enabled }, () => {
            updateRule(enabled);
        });
    });

    // Handle refresh button click
    refreshButton.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.tabs.reload(tabs[0].id);
            }
        });
    });
});

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