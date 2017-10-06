// Saves options to chrome.storage
function save_options() {
  var darkMode = document.getElementById('darkMode').checked;
  chrome.storage.sync.set({
    darkMode: darkMode
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Settings saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get('darkMode' , function(item) {
    document.getElementById('darkMode').checked = item.darkMode;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
