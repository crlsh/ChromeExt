document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('mostrar-texto').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: function() {
          var paragraphs = document.getElementsByTagName('p');
          if (paragraphs.length > 0) {
            var text = '';
            for (var i = 0; i < paragraphs.length; i++) {
              text += paragraphs[i].innerText + '<br>';
            }
            var newBody = document.createElement('div');
            newBody.innerHTML = text;
            document.body.parentNode.replaceChild(newBody, document.body);
          } else {
            alert('No paragraphs found on this page.');
          }
        }
      }, function(result) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        }
      });
    });
  });
});
