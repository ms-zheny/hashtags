
// Listen for a message from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

  if (message.action === 'insertText') {

    // Get the selected text
    var selectedText = window.getSelection().toString();
    
    // Insert the provided text or selected text at the cursor position
    var textToInsert = message.text || selectedText;
    document.execCommand('insertText', false, textToInsert);
  }

});

