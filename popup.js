document.getElementById('mostrar-texto').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: function() {
          var texto = document.body.innerText;
          document.body.innerHTML = '<div>' + texto + '</div>';
        }
      });
    });
  });