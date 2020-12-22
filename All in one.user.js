// ==UserScript==
// @name         darker army
// @namespace    http://tampermonkey.net/
// @version      3.1
// @description  enligthen your darkness
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
