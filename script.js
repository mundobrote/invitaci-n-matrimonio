function abrirInvitacion() {
    const portada = document.getElementById('portada');
    const mainContent = document.getElementById('mainContent');
    const audio = document.getElementById('bgAudio');

    // Reproducir música
    audio.play().catch(error => {
        console.log("El navegador bloqueó la reproducción automática de audio:", error);
    });

    // Ocultar portada y mostrar contenido con animación suave
    portada.style.opacity = '0';
    setTimeout(() => {
        portada.style.display = 'none';
        mainContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
}

function enviarRSVP(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreInvitado').value;
    const asistencia = document.getElementById('asistencia').value;
    
    if (asistencia === 'si') {
        alert(`¡Muchas gracias ${nombre}! Hemos registrado tu asistencia con alegría.`);
    } else {
        alert(`Gracias por avisarnos ${nombre}, lamentamos que no puedas acompañarnos.`);
    }
    document.getElementById('rsvpForm').reset();
}
