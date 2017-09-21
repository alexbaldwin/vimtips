chrome.storage.sync.get('darkMode', function (obj) {
  if (obj.darkMode) {
    document.getElementsByTagName('body')[0].classList.add('darkMode')
  }
});
