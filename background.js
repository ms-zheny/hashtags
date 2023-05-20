// Send a message to the content script to insert text
function insertTextIntoPage(tabId, text) {
    chrome.tabs.sendMessage(tabId, { action: 'insertText', text: text });
  }
  
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    if (message.action === 'insertText') {


      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        const tabId = tabs[0].id;

        insertTextIntoPage(tabId, message.text);

      });
    } 
})
  