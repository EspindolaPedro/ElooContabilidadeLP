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

let imgList = [
  {
    id: 1,
    img: 'assets/depoimentos/dep1.webp'
  },
  {
    id: 2,
    img: 'assets/depoimentos/dep2.webp'
  },
  {
    id: 3,
    img: 'assets/depoimentos/dep3.webp'
  },
  {
    id: 4,
    img: 'assets/depoimentos/dep4.webp'
  },
  {
    id: 5,
    img: 'assets/depoimentos/dep5.webp'
  },
  {
    id: 6,
    img: 'assets/depoimentos/dep6.webp'
  },
  {
    id: 7,
    img: 'assets/depoimentos/dep7.webp'
  },
  {
    id: 8,
    img: 'assets/depoimentos/dep8.webp'
  },
  {
    id: 9,
    img: 'assets/depoimentos/dep9.webp'
  },
  {
    id: 10,
    img: 'assets/depoimentos/dep10.webp'
  },
]

const initlist = () => {
  imgList.map((value) => {
    let newImg = document.createElement('img');
    newImg.src = value.img;
    let listItem = document.createElement('li');
    listItem.classList.add('list-swipe');
    listItem.append(newImg)
    document.querySelector('.slide').appendChild(listItem)
  })
}
initlist();

function initFAQ() {
  const perguntas = document.querySelectorAll('.q button');

  function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
  }
  function ativarPergunta(e) {
    const pergunta = e.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    const isActive = resposta.classList.toggle('active');

    perguntas.setAttribute('aria-expanded', isActive);
  }
  perguntas.forEach(eventosPerguntas);
}
initFAQ();

function sendMessage() {
  let message = document.getElementById('message').value;
  let encodedMessage = encodeURIComponent(message);
  let phoneNumber = '5567992686763';
  let url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
}



document.querySelector('#button').addEventListener('click', (e) => {
  e.preventDefault();
  const enviar_form = e.target;
  enviar_form.disabled = true;
  enviar_form.innerText = 'Enviando...';

  const form = document.getElementById('contactForm');
  const data = new FormData(form);
  const message = document.querySelector('#popUpMessage');

  fetch('assets/enviar_email.php', {
      method: 'POST',
      body: data,
  })
  .then(response => response.text())
  .then(msg => {
      message.style.color = msg.trim() == 'Enviado com sucesso. Em breve entraremos em contato!' ? 'green' : 'red';
      message.innerText = msg;
      if (msg.trim() == 'Enviado com sucesso. Em breve entraremos em contato!') {
          form.reset();
      }
      enviar_form.disabled = false;
      enviar_form.innerText = 'AGENDAR CONSULTA';
  })
  .catch(error => {
      message.style.color = 'red';
      message.innerText = 'Erro ao enviar o formulário';
      enviar_form.disabled = false;
      enviar_form.innerText = 'AGENDAR CONSULTA';
    });
});


/**chat btn */
document.getElementById('close-chat').addEventListener('click', function() {
  document.getElementById('chat-box').style.display = 'none';
});

// Função para mostrar a caixa de conversa após 2 segundos
window.onload = function() {
  setTimeout(function() {
      document.getElementById('chat-box').style.display = 'flex';
  }, 2000);
};