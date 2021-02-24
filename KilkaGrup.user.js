// ==UserScript==
// @name         KilkaGrup
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  dodaje możliwość wyboru kilku grup wykładowych oraz laboratoryjnych (po dwie)
// @author       mefiuk
// @match        *://www.pwsz.nysa.pl/plany/planWydruk.php*
// @match        *://pwsz.nysa.pl/plany/planWydruk.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var w = document.getElementsByTagName('label')[0];
var l = document.getElementsByTagName('label')[1];
var cln = w.cloneNode(true);
w.appendChild(cln);
cln = l.cloneNode(true);
l.appendChild(cln);
})();
