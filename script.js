// Configuración de la fecha objetivo de la boda (14 de Noviembre de 19:00 horas 2026)
const fechaBoda = new Date("Nov 14, 2026 16:00:00").getTime();

// Actualizar cuenta regresiva cada segundo
const countdownInterval = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-section").style.display = "none";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(dias).padStart(2, '0');
    document.getElementById("hours").innerText = String(horas).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutos).padStart(2, '0');
    document.getElementById("seconds").innerText = String(segundos).padStart(2, '0');
}, 1000);

function abrirInvitacion() {
    const portada = document.getElementById('portada');
    const mainContent = document.getElementById('mainContent');
    const audio = document.getElementById('bgAudio');
    const audioToggle = document.getElementById('audioToggle');

    // Reproducir música ambiental por interacción del usuario
    audio.play().then(() => {
        audioToggle.classList.remove('hidden');
    }).catch(error => {
        console.log("Reproducción automática bloqueada por navegador:", error);
    });

    // Transición cinematográfica de apertura
    portada.style.opacity = '0';
    portada.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
        portada.style.display = 'none';
        mainContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
}

// Control de audio flotante
function toggleAudio() {
    const audio = document.getElementById('bgAudio');
    const icon = document.getElementById('audioIcon');
    if (audio.paused) {
        audio.play();
        icon.className = "fa-solid fa-music";
    } else {
        audio.pause();
        icon.className = "fa-solid fa-volume-xmark";
    }
}

// Lightbox para galería
function abrirLightbox(elemento) {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const imgSrc = elemento.querySelector('img').src;
    
    modalImg.src = imgSrc;
    modal.classList.remove('hidden');
}

function cerrarLightbox() {
    document.getElementById('lightboxModal').classList.add('hidden');
}

// Lógica de envío RSVP
function enviarRSVP(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreInvitado').value;
    const asistencia = document.getElementById('asistencia').value;
    const restricciones = document.getElementById('restricciones').value;
    
    if (asistencia === 'si') {
        alert(`¡Muchas gracias, ${nombre}! Hemos registrado tu asistencia con alegría.`);
    } else {
        alert(`Gracias por avisarnos, ${nombre}. Lamentamos que no puedas acompañarnos.`);
    }
    
    document.getElementById('rsvpForm').reset();
}
