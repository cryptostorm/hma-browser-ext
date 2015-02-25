var error = false;

function proxify() {
  var input = document.getElementById('url');
  var url = input.value;
  if (!/^(https?:\/\/)?[\d\w-]+?\.[\d\w]+/i.test(url)) {
    toggleErrorMsg(true);
    input.focus();
    return;
  }
  chrome.extension.sendRequest(url);
  window.close();
}

function focus() {
  var input = document.getElementById('url');
  input.focus();
  //input.value = 'http://';
}

function onKeydown(ev) {
  if (error) {
    toggleErrorMsg(false);
  }
  if (ev.keyCode == 13) { // Enter
    proxify();
  }
}

function toggleErrorMsg(on) {
  error = on;
  document.getElementById('error').style.display = on ? 'block' : 'none';
}

function init() {
  focus();
  document.getElementById('url').addEventListener('keydown', onKeydown);
  document.querySelector('BUTTON').addEventListener('click', proxify);
  document.querySelector('A').addEventListener('click', function () { window.close(); });
}

document.addEventListener('DOMContentLoaded', init);