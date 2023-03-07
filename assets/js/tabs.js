if (document.getElementById("tabs")) {
    $("#tabs .nav-tabs a").removeClass("active")
    $("#tabs .nav-tabs a").first().addClass("active")


    $("#tabs .nav-tabs a").click(function (event) {
        // event.preventDefault();
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $("#tabs .slider").css({ "left": + position.left, "width": width });
        $("#tabs .nav-tabs a").removeClass("active")
        // event.currentTarget.addClass("active")
        $(event.target).addClass("active");
        $(".gallery-content").css({ "column-count": 7})

    });
    var actWidth = $("#tabs .nav-tabs").find(".active").parent("li").width();
    var actPosition = $("#tabs .nav-tabs .active").position();
    $("#tabs .slider").css({ "left": + actPosition.left, "width": actWidth });


    const menuButtons = document.querySelector(".nav-tabs");
    const menuBtn = document.querySelectorAll(".nav-link")
    if (menuButtons) {
        menuButtons.addEventListener("click", (e) => {
            e.preventDefault();
            if (!e.target.classList.contains("nav-link")) return;

            if (menuBtn)
                menuBtn.forEach(el => el.classList.remove("active"))
            e.target.classList.add("active")

            let selector = e.target.dataset.filter

            $(".gallery-content").isotope({
                filter: `${selector == "all" ? "*" : `.${selector}`}`
            });

        })
    }


}
