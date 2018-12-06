let open1, open2, open3 = false;
let counter = 0;

//first menu
$(".mainmenu").first().click(function(){
        $(".submenu").first().slideToggle("slow");
});

//second menu
$(".mainmenu:eq(1)").click(function(){
    $(".submenu:eq(1)").slideToggle("slow");
});

//third menu
$(".mainmenu:eq(2)").click(function(){
    $(".submenu:eq(2)").slideToggle("slow");
});

let content = ("article0.txt");
$("input").prop("checked", false);
$("article").load(content);

$("input").change(function () {
    content = $(this).val();
    $("article").load(content);
});

$("#count").text(counter);

$("#clickme").click(function() {
    counter++;
    $("#count").text(counter);
});