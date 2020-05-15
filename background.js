// Copyright (c) 2020 Meet Bloq
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var interval;

//configura inicialmente qual ícone está sendo utilizado após a instalação
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({number: 1}, function() {
    console.log('The number is set to 1.');
  });
});

// Função chamada quando o usuário clica no ícone da extensão no Browser
chrome.browserAction.onClicked.addListener(function(tab) {
    updateIcon();
});

function startVerification() {
    chrome.tabs.executeScript({
        code: 'if (document.getElementsByClassName("llhEMd iWO5td")[0]) { document.getElementsByClassName("llhEMd iWO5td")[0].innerHTML = "";document.getElementsByClassName("llhEMd iWO5td")[0].className = "otherClass";}'
    });
}

function updateIcon() {
  chrome.storage.sync.get('number', function(data) {
    var current = data.number;
    if (current == 1) {
        chrome.browserAction.setIcon({path: 'icon2.png'});
        current = 2;
        interval = setInterval(startVerification, 500);
    } else {
        chrome.browserAction.setIcon({path: 'icon1.png'});
        current = 1;
        clearInterval(interval);
    }
    chrome.storage.sync.set({number: current}, function() {
      console.log('The number is set to ' + current);
    });
  });
}