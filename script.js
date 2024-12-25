function form1_open(){
    document.getElementById("form2").style.display="none"
    document.getElementById("form1").style.display="block"
    document.getElementById("nav_bar").style.width="0"
    document.getElementById("nav_close").style.display="none"
    document.getElementById("profile").style.display="none"
    document.getElementById("bg-off").style.height="100%"
    document.getElementById("bg-off").style.width="100%"
    document.getElementById("bg-off").style.borderRadius="0"
}
function form2_open(){
    document.getElementById("form2").style.display="block"
    document.getElementById("form1").style.display="none"
    document.getElementById("nav_bar").style.width="0"
    document.getElementById("nav_close").style.display="none"
    document.getElementById("profile").style.display="none"
    document.getElementById("bg-off").style.height="100%"
    document.getElementById("bg-off").style.width="100%"
    document.getElementById("bg-off").style.borderRadius="0"
}

function form1_close(){
    document.getElementById("form1").style.display="none"
    document.getElementById("bg-off").style.borderRadius="500px"
    document.getElementById("bg-off").style.height="0"
    document.getElementById("bg-off").style.width="0"
}
function form2_close(){
    document.getElementById("form2").style.display="none"
    document.getElementById("bg-off").style.borderRadius="500px"
    document.getElementById("bg-off").style.height="0"
    document.getElementById("bg-off").style.width="0"
}

function nav_open(){
    document.getElementById("nav_bar").style.width="150px"
    document.getElementById("nav_close").style.display="block"
    document.getElementById("form1").style.display="none"
    document.getElementById("form2").style.display="none"
    document.getElementById("profile").style.display="none"
    document.getElementById("bg-off").style.height="100%"
    document.getElementById("bg-off").style.width="100%"
    document.getElementById("bg-off").style.borderRadius="0"
}
function nav_close(){
    document.getElementById("nav_bar").style.width="0"
    document.getElementById("nav_close").style.display="none"
    document.getElementById("bg-off").style.borderRadius="500px"
    document.getElementById("bg-off").style.height="0"
    document.getElementById("bg-off").style.width="0"
}

function profile_open(){
    document.getElementById("profile").style.display="block"
    document.getElementById("form1").style.display="none"
    document.getElementById("form2").style.display="none"
    document.getElementById("nav_bar").style.width="0"
    document.getElementById("nav_close").style.display="none"
    document.getElementById("bg-off").style.height="100%"
    document.getElementById("bg-off").style.width="100%"
    document.getElementById("bg-off").style.borderRadius="0"
}
function profile_close(){
    document.getElementById("profile").style.display="none"
    document.getElementById("bg-off").style.borderRadius="500px"
    document.getElementById("bg-off").style.height="0"
    document.getElementById("bg-off").style.width="0"
}

function maler(){
    document.getElementById("maler").style.backgroundColor="#096"
    document.getElementById("femaler").style.backgroundColor="#fff"
}
function femaler(){
    document.getElementById("maler").style.backgroundColor="#fff"
    document.getElementById("femaler").style.backgroundColor="#096"
}
function radio_clear(){
    document.getElementById("maler").style.backgroundColor="#fff"
    document.getElementById("femaler").style.backgroundColor="#fff"
}


function deal(){
    open("dealer.html")
}
function store(){
    open("store.html")
}
function edit(){
    open("editor.html")
}
