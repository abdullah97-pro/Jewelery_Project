// loop elements
const data = [
  {
    title: "Best PRICE",
    pic: 'images/i-1.png',
    name: 'Bracelet'
  },
  {
    title: "Best PRICE",
    pic: 'images/i-2.png',
    name: 'Ring'
  },
  {
    title: "Best PRICE",
    pic: 'images/i-3.png',
    name: 'Earings'
  }
];

const container = document.querySelector('.item_container');
data.slice(0,4).forEach(item => {
  
  const box = document.createElement('div');
  box.className = "box";

  box.innerHTML = `
  <div class="price">
    <h6>
      ${item.title}
    </h6>
  </div>
  <div class="img-box">
    <img src="${item.pic}" alt="">
  </div>
  <div class="name">
    <h5>
      ${item.name}
    </h5>
  </div>
  `;

  container.appendChild(box);

});


// our jewellery price
const data1 = [
  {
    title: "Diamond Ring",
    pic: 'images/p-1.png',
    price: '1000.00',
    order: 'Buy Now'
  },
  {
    title: "Diamond Ring",
    pic: 'images/i-2.png',
    price: '1000.00',
    order: 'Buy Now'
  },
  {
    title: "Diamond Ring",
    pic: 'images/i-3.png',
    price: '1000.00',
    order: 'Buy Now'
  },
];

const container1 = document.querySelector('.price_container');
data.slice(0,4).forEach(item => {
  
  const box = document.createElement('div');
  box.className = "box";

  box.innerHTML = `
  <div class="name">
    <h6>
      ${item.title}
    </h6>
  </div>
  <div class="img-box">
    <img src="${item.pic}" alt="">
  </div>
  <div class="detail-box">
    <h5>
      $<span>${item.price}</span>
    </h5>
    <a href="">
      ${item.order}
    </a>
  </div>
  `;

  container1.appendChild(box);

});

// end price

const navbar = document.getElementById('navbar-collapse');
const btntoggler = document.getElementById('navbar-toggler');
const discard = document.getElementById('discard');

btntoggler.addEventListener('click', () => {
  navbar.classList.add('active');
});

discard.addEventListener('click', () => {
  navbar.classList.remove('active');
});


