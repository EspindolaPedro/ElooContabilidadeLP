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



list = document.querySelector('.swipe-list');

let imgList = [
  {
    id:1,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:2,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:3,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:4,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:5,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:6,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:7,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:8,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:9,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:10,
    img:'assets/depoimentos/dep1.webp'
  },
]

const initlist = () => {
  imgList.forEach((value,key) => {
    let newImg = document.createElement('img');
    newImg.src = value.img;
    let listItem = document.createElement('li');
    listItem.classList.add('list-swipe');
    listItem.appendChild(newImg);
    document.querySelector('.slide').appendChild(listItem)
  })
    
}

initlist();