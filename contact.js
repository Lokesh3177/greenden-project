var navbar=document.getElementById("sidenav")
var menuicon=document.getElementById("menu")
var close=document.getElementById("close")



menuicon.addEventListener("click",function(){
    navbar.style.right=0
})

close.addEventListener("click",function(){
    navbar.style.right="-50%"
})

