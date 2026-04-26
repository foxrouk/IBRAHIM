const likes = document.querySelectorAll(".like");

likes.forEach(function(button) {

    button.addEventListener("click", function() {

        this.classList.toggle("active");

    });

});