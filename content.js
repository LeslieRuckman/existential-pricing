// Look for all elements that are prices on Amazon

// This Regex searches for dollar amounts
// ^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$


var re = /^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)/g;
var timePic = '<img alt="⏳" class="imgs" src="data:image/png;base64,R0lGODlhDAAMAIABAAAAAP///yH5BAEAAAEALAAAAAAMAAwAAAIajIEJxpp8YFiQNjkvzhavXmnh2HwTaJqVQxUAOw==">';

// var webContents = document.getElementsByTagName("*");
var webContents = document.getElementsByTagName("*");
// console.log(webContents.length);

// ALL AMAZON SPECIFIC
var price2 = document.getElementsByClassName('sx-price-whole');
var price4 = document.getElementsByClassName('a-row a-color-price');
var price7 = document.getElementsByClassName('p13n-sc-price');
var price8 = document.getElementsByClassName('a-span12 a-color-price a-size-base');
var currency = document.getElementsByClassName('sx-price-currency');
var fractional = document.getElementsByClassName('sx-price-fractional');

// ALL ALIBABA SPECIFIC
var price1 = document.getElementsByClassName('price');
// var price3 = document.getElementsByClassName('a-size-base a-color-price');
// var price5 = document.getElementsByClassName('comparison_sim_items_column');
// var price6 = document.getElementsByClassName('a-color-price offer-price a-text-normal');



// product-price standard

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    console.log(mutations, observer);
    // ...
});


function Compare(money) {
    if (money <= 1) {
        time = "4 min of your lifetime";
    } else if (money > 1 && money <= 5) {
        time = "18 min of your lifetime";
    } else if (money > 5 && money <= 10) {
        time = "35 min of your lifetime";
    } else if (money > 10 && money <= 15) {
        time = "54 min of your lifetime";
    } else if (money > 15 && money <= 20) {
        time = "1 hr 11 min of your lifetime";
    } else if (money > 20 && money <= 25) {
        time = "1 hr 29 min of your lifetime";
    } else if (money > 25 && money <= 30) {
        time = "1 hr 47 min of your lifetime";
    } else if (money > 30 && money <= 35) {
        time = "2 hr 5 min of your lifetime";
    } else if (money > 35 && money <= 40) {
        time = "2 hr 23 min of your lifetime";
    } else if (money > 40 && money <= 45) {
        time = "2 hr 41 min of your lifetime";
    } else if (money > 45 && money <= 50) {
        time = "2 hr 59 min of your lifetime";
    } else if (money > 50 && money <= 55) {
        time = "3 hr 16 min of your lifetime";
    } else if (money > 55 && money <= 60) {
        time = "3 hr 34 min of your lifetime";
    } else if (money > 60 && money <= 65) {
        time = "3 hr 52 min of your lifetime";
    } else if (money > 65 && money <= 70) {
        time = "4 hr 10 min of your lifetime";
    } else if (money > 70 && money <= 75) {
        time = "4 hr 28 min of your lifetime";
    } else if (money > 75 && money <= 80) {
        time = "4 hr 46 min of your lifetime";
    } else if (money > 80 && money <= 85) {
        time = "5 hr 3 min of your lifetime";
    } else if (money > 85 && money <= 90) {
        time = "5 hr 21 min of your lifetime";
    } else if (money > 90 && money <= 95) {
        time = "5 hr 39 min of your lifetime";
    } else if (money > 95 && money <= 100) {
        time = "5 hr 57 min of your lifetime";
    } else if (money > 100 && money <= 105) {
        time = "6 hr 15 min of your lifetime";
    } else if (money > 105 && money <= 110) {
        time = "6 hr 32 min of your lifetime";
    } else if (money > 110 && money <= 115) {
        time = "6 hr 50 min of your lifetime";
    } else if (money > 115 && money <= 120) {
        time = "7 hr 8 min of your lifetime";
    } else if (money > 120 && money <= 125) {
        time = "7 hr  27 min of your lifetime";
    } else if (money > 125 && money <= 130) {
        time = "7 hr 44 min of your lifetime";
    } else if (money > 130 && money <= 135) {
        time = "8 hr 2 min of your lifetime";
    } else if (money > 135 && money <= 155) {
        time = "9hr 13min of your lifetime";
    } else if (money > 155 && money <= 165) {
        time = "9hr 48min of your lifetime";
    } else if (money > 165 && money <= 170) {
        time = "10hr 6min of your lifetime";
    } else if (money > 155 && money <= 165) {
        time = "9hr 48min of your lifetime";
    } else if (money > 165 && money <= 170) {
        time = "10hr 6min of your lifetime";
    } else if (money > 170 && money <= 185) {
        time = "11hr 2min of your lifetime";
    } else if (money > 185 && money <= 205) {
        time = "11hr 48min of your lifetime";
    } else if (money > 205 && money <= 220) {
        time = "12hr 12min of your lifetime";
    } else if (money > 220 && money <= 235) {
        time = "13hr 23min of your lifetime";
    } else if (money > 235 && money <= 255) {
        time = "14hr 39min of your lifetime";
    } else if (money > 255 && money <= 275) {
        time = "15hr 42min of your lifetime";
    } else if (money > 275 && money <= 290) {
        time = "16hr 57min of your lifetime";
    } else if (money > 290 && money <= 315) {
        time = "18hr 9min of your lifetime";
    } else if (money > 315 && money <= 330) {
        time = "19hr 18min of your lifetime";
    } else if (money > 330 && money <= 350) {
        time = "20hr 12min of your lifetime";
    } else if (money > 350 && money <= 370) {
        time = "21hr 24min of your lifetime";
    } else if (money > 370 && money <= 390) {
        time = "22hr 36min of your lifetime";
    } else if (money > 390 && money <= 405) {
        time = "23hr 48min of your lifetime";
    } else if (money > 410 && money <= 425) {
        time = "24hr 42min of your lifetime";
    } else if (money > 425 && money <= 810) {
        time = "Over 24hr under 48hr of your lifetime";
    } else if (money > 810 && money <= 1215) {
        time = "Over 48hr under 72hr of your lifetime";
    } else if (money > 1215 && money <= 2835) {
        time = "Over 72hr under 1 week of your lifetime";
    } else if (money > 2835) {
        time = "One week or more of your lifetime";
    } else if (money = "$") {
        time = "More of your lifetime";
    }
    return time;
}

for (var a = 0; a < webContents.length; a++) {
    // console.log(webContents[a].innerHTML);
    if (webContents[a].innerHTML.match(/^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/g)) {
        // console.log(webContents[a].innerHTML);
        var text = webContents[a].innerHTML;
        var txt = text.replace('$', '');
        webContents[a].innerHTML = Compare(txt);
    }
}

for (var b = 0; b < currency.length; b++) {
    currency[b].innerHTML = '<img alt="⏳" class="imgs" src="data:image/png;base64,R0lGODlhDwAPALMPAFYaCZj8/rhWAPCPAMxvBImXotfz/ukLivwTzIK/wNNLv4s5A2xgXtyD7LS/yAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFMgAPACwAAAAADwAPAAAEbXCJOYmlE4DFKaHcAjyC5iRFmgLC8jzDwjRKbTMD8RKughxAIEzwij0YviADpnvwXsjfcvgivo6N6cvl5DIcgcR0YDV+A2gxFSZzGNDpdWxheMMDuCZv4Tgl/AsfDxICBDkDiIYfJRsaISGNGhEAIfkEBTIADwAsBQACAAkADAAABCHwvSSpdC7gJiV6XyeOQqeMHvo0SKEiDuqEKIwqx6kSYwQAIfkEBTIADwAsBAACAAcADQAABCHwyTKNCS9oZ5x3iSQhoniUaKqKGNo8itQo5KEoBJqjSwQAIfkEBTIADwAsBAAEAAcACgAABBnwvUCDfE3p+w7/YMg12NUgXZMonXR41yBFACH5BAUyAA8ALAMABQAIAAoAAAQa8D0XapJYKcy7x8a3KY7UIBiiMGgncIS0fBEAIfkEBTIADwAsAwAGAAgACQAABB/wSReSvMWUO53lyoNsT6Mgx6Fs4XO4yNNyBDdIAHdFADs=">';
}

for (var c = 0; c < fractional.length; c++) {
    fractional[c].innerHTML = ' ';
}

for (var i = 0; i < price1.length; i++) {
  var text = price1[i].innerHTML;
  var txt = text.replace('$', '');
  price1[i].innerHTML = Compare(txt);
}

// finds and replaces the red list prices
for (var j = 0; j < price2.length; j++) {
    var text2 = price2[j].innerHTML;
    var txt = text2.replace('$', '');
    price2[j].innerHTML = Compare(txt);
}

// for (var k = 0; k < price3.length; k++) {
//   var text = price3[k].innerHTML;
//   var txt = text.replace('$', '');
//   price3[k].innerHTML = Compare(txt);
// }
//
for (var l = 0; l < price4.length; l++) {
    var text4 = price4[l].innerHTML;
    var txt = text4.replace('$', '');
    console.log(txt);
    price4[l].innerHTML = Compare(txt);
}
//
// for (var m = 0; m < price5.length; m++) {
//   var text = price5[m].innerHTML;
//   var txt = text.replace('$', '');
//   price5[m].innerHTML = Compare(txt);
// }
//
// for (var n = 0; n < price6.length; n++) {
//   var text = price6[n].innerHTML;
//   var txt = text.replace('$', '');
//   price6[n].innerHTML = Compare(txt);
// }
//
for (var o = 0; o < price7.length; o++) {
    var text7 = price7[o].innerHTML;
    var txt = text7.replace('$', '');
    price7[o].innerHTML = txt;
}
//
for (var p = 0; p < price8.length; p++) {
    var text8 = price8[p].innerHTML;
    var txt = text8.replace('$', '');
    price8[p].innerHTML = Compare(txt);
}
