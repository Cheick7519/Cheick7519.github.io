// script.js — interactions simples
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler: crée un mailto: avec le message (sans backend)
function handleContact(event){
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`Contact portfolio — ${name}`);
  const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);

  // ouvre le client mail local
  window.location.href = `mailto:samake.cheick.oumar2002@gmail.com?subject=${subject}&body=${body}`;
}
