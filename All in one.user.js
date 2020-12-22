// ==UserScript==
// @name         All in one
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  try to take over the world!
// @author       Darker
// @match        https://eduapplet.com/CBT259/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
;var myVar = setInterval(myTimer, 1);

function myTimer() {document.getElementsByClassName("plyr__poster").remove();
}
;var ConVar = setInterval(controlsdeleter, 1);

function controlsdeleter() {document.getElementsByClassName("plyr__controls").remove();
}
;var buttonVar = setInterval(buttonTimer, 1);

function buttonTimer() {document.getElementsByClassName("plyr__control plyr__control--overlaid").remove();
}
