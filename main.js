<script>
    $(document).ready(function(){
     $('.bxslider').bxSlider({
     mode: 'fade',
     auto: true,
     autoControls: true,
     pause: 2000
     });
    });
</script>

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.Baner');
ScrollReveal().reveal('.menu');
ScrollReveal().reveal('.promo');
ScrollReveal().reveal('.video');
ScrollReveal().reveal('.info');
ScrollReveal().reveal('.music');