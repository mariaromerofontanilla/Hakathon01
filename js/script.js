function countdown() {
    const eventDate = new Date("2025-06-01T00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", countdown);

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1); // Obtiene el ID de la sección
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                event.preventDefault(); // Evita el comportamiento por defecto
                
                // Calcula la posición exacta para que no quede debajo del menú
                const offsetTop = targetSection.offsetTop - 70;

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth" // Hace que el scroll sea suave
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery-slider img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    document.getElementById("next").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    document.getElementById("prev").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Auto-slide cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 5000);
});
