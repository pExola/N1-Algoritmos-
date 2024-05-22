const links = document.querySelectorAll('header ul li a');

for (const link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Scroll to the top of the section
            });
        }
    });
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Voltar ao topo da página quando o botão for clicado
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener<'DOMContentLoaded'> function() {
    const agendarBtn = document.getElementById('agendarBtn');
    const form = document.getElementById('agendamentoForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário para testar a mudança de texto
        agendarBtn.textContent = 'Agendamento concluído!';
    })};
    