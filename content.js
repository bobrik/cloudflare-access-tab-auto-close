(function() {
  const title = document.querySelector('head title')
  if (!title || title.innerText.trim() != "Cloudflare Access") {
    return
  }

  const status = document.querySelector('body .main-content .main-message .title')
  if (!status || status.innerText.trim() != "Success") {
    return
  }

  chrome.runtime.sendMessage({"close": true});
})();
