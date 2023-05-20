document.addEventListener("DOMContentLoaded", () => {
  var list = document.getElementById('textList');
  var items = list.getElementsByTagName('li');
  var selectedText ="";
 
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {

      selectedText = this.innerText;    
      chrome.runtime.sendMessage({ action: 'insertText', text: selectedText});
  })

}});
