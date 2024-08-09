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
    id:1,
    img:'assets/depoimentos/dep1.webp'
  },
  {
    id:2,
    img:'assets/depoimentos/dep2.webp'
  },
  {
    id:3,
    img:'assets/depoimentos/dep3.webp'
  },
  {
    id:4,
    img:'assets/depoimentos/dep4.webp'
  },
  {
    id:5,
    img:'assets/depoimentos/dep5.webp'
  },
  {
    id:6,
    img:'assets/depoimentos/dep6.webp'
  },
  {
    id:7,
    img:'assets/depoimentos/dep7.webp'
  },
  {
    id:8,
    img:'assets/depoimentos/dep8.webp'
  },
  {
    id:9,
    img:'assets/depoimentos/dep9.webp'
  },
  {
    id:10,
    img:'assets/depoimentos/dep10.webp'
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
