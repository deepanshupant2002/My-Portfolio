$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Solution Consultant", "Presales Consultant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Solution Consultant", "Presales Consultant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        // loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

//EmailJS


// <script type="text/javascript">
(function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("e6WoXXcQoyVHNFq4P");
})();
// </script>
// <script type="text/javascript">
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_rxsdofo', 'template_ju2yti9', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
        //console.log(event);
        document.getElementById('name').value = "";
        document.getElementById('em').value = "";
        document.getElementById('body').value = "";
        document.getElementById('subject').value = "";
    });
    
}
    // </script>