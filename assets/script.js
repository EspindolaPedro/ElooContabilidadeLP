const btnMobile = document.getElementById("btn-mobile"); function toggleMenu(e) {
    if (e.type === 'touchstart') e.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    e.currentTarget.setAttribute('aria-expanded', 'true');
  };
  
  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchsttart', toggleMenu);
  
  const navLinks = document.querySelectorAll("#nav a");
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById("nav");
      nav.classList.remove("active");
      btnMobile.setAttribute('aria-expanded', 'false');
    });
  });
