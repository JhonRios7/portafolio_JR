document.addEventListener('DOMContentLoaded', function() {

    // Control del menú responsive
    const nav = document.getElementById('nav');
    const navResponsive = document.querySelector('.nav-responsive');

    function toggleMenu() {
        nav.classList.toggle('open');  // Asegúrate de que esta clase exista en tu CSS
    }

    navResponsive.addEventListener('click', toggleMenu);

    // Animación de las barras de habilidades
    function animateSkills() {
        const skills = document.querySelectorAll('.skill');

        skills.forEach(skill => {
            const skillName = skill.dataset.skill;
            const skillElement = skill.querySelector('.progreso');
            let percentage = 0;

            switch (skillName) {
                case 'Python':
                    percentage = 75;
                    break;
                case 'PowerBI':
                    percentage = 70;
                    break;
                case 'SPSS Software |IBM':
                    percentage = 85;
                    break;
                case 'MySQL':
                    percentage = 81;
                    break;
                case 'Docker':
                    percentage = 55;
                    break;
                case 'HTMLCSS':
                    percentage = 75;
                    break;
                case 'WebScraping':
                    percentage = 65;
                    break;
                case 'Comunicacion':
                    percentage = 90;
                    break;
                case 'TrabajoEquipo':
                    percentage = 99;
                    break;
                case 'Creatividad':
                    percentage = 90;
                    break;
                case 'Dedicacion':
                    percentage = 99;
                    break;
                case 'ProyectManagement':
                    percentage = 80;
                    break;
                default:
                    percentage = 0;
            }

            skillElement.style.width = percentage + '%';
            skillElement.innerHTML = '<span>' + percentage + '%</span>';
        });
    }

    animateSkills();

    // Enviar formulario
    const btn = document.getElementById('button');

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        btn.textContent = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_7cwu7wm';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Enviar Mensaje';
                alert('¡Mensaje enviado!');
            }, (err) => {
                btn.textContent = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });
});
