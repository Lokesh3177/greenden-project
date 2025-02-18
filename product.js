var navbar = document.getElementById("sidenav")
var menuicon = document.getElementById("menu")
var close = document.getElementById("close")



menuicon.addEventListener("click", function () {
    navbar.style.right = 0
})

close.addEventListener("click", function () {
    navbar.style.right = "-50%"
})




var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = this.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("p").textContent
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
})



