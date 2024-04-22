document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar a");
    
    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Menghentikan aksi default dari link
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth" // Efek scroll yang halus
                });
            }
        });
    });
});
