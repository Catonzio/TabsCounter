chrome.tabs.onRemoved.addListener(function(tab) {
    count();
});

chrome.tabs.onCreated.addListener(function(tab) {
    count();
});

chrome.windows.onFocusChanged.addListener(function(tab) {
    count();
});

count();

function count() {
    chrome.windows.getCurrent({populate:true}, function(window) {   
        var i = window.tabs.length;
        console.log("Number of tabs inside chrome.windows.getAll: " + i);
        chrome.browserAction.setBadgeText({text: i.toString()});
    });
}