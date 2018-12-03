/* Don't use <script> tags in a linked js file! */
let menubox = document.body.getElementsByClassName('menubox');
let menu = document.body.getElementsByClassName('submenu');

menubox.onclick = function() {
    menu.style.display = "block";
}