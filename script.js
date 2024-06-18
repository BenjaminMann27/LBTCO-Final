document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetID = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);

            window.scrollTo({
                top: targetSection.offsetTop - 60, 
                behavior: 'smooth'
            });
        });
    });

    // Resize logo dynamically
    const logo = document.getElementById('Logo');
    function resizeLogo() {
        if (window.innerWidth < 768) {
            logo.style.width = '100px'; 
        } else {
            logo.style.width = '150px';
        }
    }

  
    resizeLogo();

   
    window.addEventListener('resize', resizeLogo);
});