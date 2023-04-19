document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mostrar-texto').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: function() {
            var paragraphs = document.getElementsByTagName('p');
            if (paragraphs.length > 0) {
              for (var i = 0; i < paragraphs.length; i++) {
                var text = document.createTextNode(paragraphs[i].innerText);
                paragraphs[i].parentNode.replaceChild(text, paragraphs[i]);
              }
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
  