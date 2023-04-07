// Allows ipad carousel to be mobile-friendly
$(window).resize(() => {
    var ipadImageHeight = $(".ipad-img").height();
    console.log(ipadImageHeight);
    $(".ipad").css("height", ipadImageHeight + 41);
})

// alert("Good!");