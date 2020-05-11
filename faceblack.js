// ==UserScript==
// @name     Fb Messenger
// @version  1
// @grant    none
// @match https://www.facebook.com/messages/*
// ==/UserScript==

/* bugs :
  someone typing
  clic sur search => pas de redirection
  scroll sur nav left "discussions"
  scroll up dans la conv
  changement de conv
*/

document.body.style.background = "black";

function dark_theme() {
  for (const cont of document.querySelectorAll("div._1t_p, div[id^='js_']")) {
    cont.style.background = "black";
  }
  for (const cont of document.querySelectorAll("div[role='presentation']")[0].querySelectorAll("*")) {
    cont.classList.add("doNotTouchThis");
  }
  for (const cont of document.querySelectorAll("*:not(.doNotTouchThis)")) {
    cont.style.color = "green";
  }
  for (const cont of document.querySelectorAll(".jewelButton, .uiToggle, #logoutMenu")) {
    cont.style.background = "#4267B2";
  }
	document.querySelectorAll("div[aria-label='Nouveau message']")[0].firstChild.style.background = "black";
  /* pour modifier les champs textes
  for (const cont of document.querySelectorAll("[aria-autocomplete='list']")) {
    cont.style.background = "wheat";
    cont.style.color = "black";
  }
  */
  document.querySelectorAll("div[aria-label='Nouveau message']")[0].firstChild.children[3].style.border = "solid green 1px";
  document.querySelectorAll("input[placeholder='Rechercher dans Messenger']")[0].style.border = "solid green 1px";
}


function testt(){
  if(document.querySelectorAll("div[aria-label='Messages']").length > 0) {
    dark_theme();
  }
  else {
    setTimeout(function() {
      testt();
    }, 50);
  }
}

testt();