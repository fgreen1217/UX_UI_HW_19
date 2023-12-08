console.log("Your index.js file is loaded correctly!")

$(".tab").hover(function(){
    $(".tab").css({"background-color":"#EBECE9","color":"#373F42"});
    $(this).css({"background-color":"#373F42","color":"#EBECE9"});;
})

$(".tab").on("click", function(){
    $(".tab").css({"background-color":"#EBECE9","color":"#373F42"});
    $(this).css({"background-color":"#373F42","color":"#EBECE9"});;
});