/**
 * Created by kidminks on 8/3/17.
 */

var to_add = "";
var tab = false;
function seeforkey(event) {
    event = event || window.event;
    if(to_add.length<0){
        to_add = '';
    }
    if(event.which == 13 || event.keyCode == 13){
        insertp();
        return;
    }
    var charCode = event.which || event.keyCode;
    var charstr = String.fromCharCode(charCode);
    to_add = to_add+charstr;
}
function backspacing(event) {
    event = event || window.event;
    if(event.which == 8 || event.keyCode == 8){
        if(to_add.length>0) {
            to_add = to_add.slice(0, -1);
        }
    }
    if(event.which == 9 || event.keyCode == 9){
        to_add = to_add+"&nbsp;&nbsp;&nbsp;&nbsp;";
    }
}
function insertp() {
    seefordatatypes();
    seeforcinandcout();
    var parent = document.getElementById("container");
    var child = parent.lastElementChild.innerHTML;
    if(tab){
        child = child.slice(0,child.length-to_add.length)+to_add;
    }
    else {
        child = to_add;
    }
    tab = false;
    parent.lastElementChild.innerHTML = child;
    placeCaretAtEnd(parent);
    to_add = '';
}

//                                            Utility functions

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
        && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

function seefordatatypes() {
    if(to_add.search("short int")!=-1) {
        to_add = to_add.replace("short int", "<p class='datatype'>short</p>");
    }
    else if(to_add.search("short")!=-1){
        to_add = to_add.replace("short int", "<p class='datatype'>short</p>");
    }
    else if(to_add.search("long long int")!=-1){
        to_add = to_add.replace("long long int","<p class='datatype'>long long int</p>");
    }
    else if(to_add.search("long long")!=-1){
        to_add = to_add.replace("long long int","<p class='datatype'>long long int</p>");
    }
    else if(to_add.search("long double")!=-1){
        to_add = to_add.replace("long double","<p class='datatype'>long double</p>");
    }
    else if(to_add.search("long")!=-1){
        to_add = to_add.replace("long","<p class='datatype'>long</p>");
    }
    else if(to_add.search("int")!=-1){
        to_add = to_add.replace("int","<p class='datatype'>int</p>");
    }
    else if(to_add.search("double")!=-1){
        to_add = to_add.replace("double","<p class='datatype'>double</p>");
    }
    else if(to_add.search("float")!=-1){
        to_add = to_add.replace("float","<p class='datatype'>float</p>");
    }
    else if(to_add.search("char")!=-1){
        to_add = to_add.replace("char","<p class='datatype'>char</p>");
    }
    else if(to_add.search("float")!=-1){
        to_add = to_add.replace("string","<p class='datatype'>string</p>");
    }
}

function seeforcinandcout() {
    if(to_add.search("cin")!=-1){
        to_add = to_add.replace("cin","<p class='io'>cin</p>");
    }
    else if(to_add.search("cout")!=-1){
        to_add = to_add.replace("cout","<p class='io'>cout</p>");
    }
}

//                                              Updating line number
function insertintextarea() {
    var data;
    data = "#include<bits/stdc++.h>"+"&#13;&#10;"+"using namespace std;"+"&#13;&#10;";
    var textarea = document.getElementById("hiddencode");
    var textarea1 = document.getElementById("inputdata");
    textarea.innerHTML = data;
    var children = document.getElementById("container").getElementsByTagName("div");
    for( var i=1;i<children.length;i++ ){
        var child = children[i];
        data = child.innerText+"&#13;&#10;";
        textarea.innerHTML = textarea.innerHTML+data;
    }
    textarea1.innerHTML = document.getElementById("input").innerText;
}