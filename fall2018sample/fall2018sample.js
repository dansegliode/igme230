/* Don't use <script> tags in a linked js file! */
let open1 = false;
let open2 = false;

$(".menubox").first().click(function() {
    if(!open1){
        $("ul").first().css("display", "block");
        open1 = true;
    }else{
        $("ul").first().css("display", "none");
        open1 = false;
    }
});

$(".menubox:eq(1)").click(function() {
    if(!open2){
        $("ul:eq(1)").css("display", "block");
        open2 = true;
    }else{
        $("ul:eq(1)").css("display", "none");
        open2 = false;
    }
});

let name = ("content1.txt") // sets default verse element
$("#choose-content").val(name); // changes menu option to default
$("#content").load(name); // retrieves only default element
$("#choose-content").change(function () {
    name = $(this).val();
    $("#content").load(name);
});