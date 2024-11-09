// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // check loading website
    if (changeInfo.status === 'complete' && tab.url) {
      const isExpediaOrSkyscanner = tab.url.includes("expedia.com") || tab.url.includes("skyscanner.com");
  
      if (isExpediaOrSkyscanner) {
        // automaticlly popup extension window
        chrome.action.openPopup();
      }
    }
  });  