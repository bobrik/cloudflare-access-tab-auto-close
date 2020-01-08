chrome.runtime.onMessage.addListener(
  function(request, sender) {
    if (!sender.tab) {
      return;
    }

    if (request.close) {
      chrome.tabs.remove(sender.tab.id);
    }
});
