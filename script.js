const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const orderForm = document.getElementById("orderForm");

const whatsappNumber = "917846896067"; // Replace with your actual WhatsApp number

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function orderNow(productName) {
  const message = `Hi, I want to order this bouquet: ${productName}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const occasion = document.getElementById("occasion").value;
  const message = document.getElementById("message").value;

  const finalMessage = `
Hi, I want to order a custom bouquet.

Name: ${name}
Phone: ${phone}
Occasion: ${occasion}
Bouquet Idea: ${message}
`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
  window.open(url, "_blank");

  orderForm.reset();
});