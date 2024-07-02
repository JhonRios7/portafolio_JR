document.addEventListener('DOMContentLoaded', function() {
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
                    percentage = 45;
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
});
