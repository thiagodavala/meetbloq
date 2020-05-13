// Copyright (c) 2020 Meet Bloq
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    setInterval(runScript, 3 * 1000)
  });

 function runScript() {
    chrome.tabs.executeScript({
        code: 'document.getElementsByClassName("llhEMd iWO5td")[0].innerHTML = "";document.getElementsByClassName("llhEMd iWO5td")[0].className = "otherClass";'
      });
 }