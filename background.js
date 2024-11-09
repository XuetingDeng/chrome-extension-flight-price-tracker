// background.js

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // check loading website
    if (changeInfo.status === 'complete' && tab.url) {
      const isTargetSite = tab.url.includes("expedia.com") || tab.url.includes("skyscanner.com");
  
      if (isTargetSite) {
        console.log("User is visiting a flight tracking site:", tab.url);
        chrome.tabs.sendMessage(tabId, { action: "showPopup" });
      }
    }
});  