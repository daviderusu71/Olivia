let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

const form = document.querySelector('form');
const fullName = document.querySelector('input[placeholder="Full Name"]');
const email = document.querySelector('input[placeholder="Email"]');
const phone = document.querySelector('input[placeholder="Phone Number"]');
const subject = document.querySelector('input[placeholder="Subject"]');
const message = document.querySelector('textarea');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validare simplă
  if (!fullName.value || !email.value || !subject.value || !message.value) {
    alert("Te rog completează toate câmpurile necesare.");
    return;
  }

  // Adresa ta de primire
  const recipient = "david@email.com";

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(
    `Name: ${fullName.value}\nEmail: ${email.value}\nPhone: ${phone.value}\n\nMessage:\n${message.value}`
  )}`;

  window.location.href = mailtoLink;
});

