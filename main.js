const nav = document.querySelector('nav');
const body = document.querySelector('body');
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const buttonBuy = document.querySelector('.button-buy');
const logoLobby = document.querySelector('.logo');
const myOrdersList = document.querySelector('#myOrders');
const navbarLeft = document.querySelector('.navbar-left');
const categoryListMobile = document.querySelector('.category-list-mobile');
const littleArrowCarrito = document.querySelector('.little-arrow');
let totalPriceCar = document.querySelector('.total-price-carrito');
const confirmAddedToCar = document.querySelector('.container-confirm-added');
let hideNotificationTimeout;
let numberCarrito = document.querySelector('.navbar-shopping-cart > div:nth-child(2)');
const dateOrder = document.querySelector('.order-myOrder p > span:nth-child(1)');
const totalArticles = document.querySelector('.order-myOrder p > span:nth-child(2)');
const priceOrder = document.querySelector('.order-myOrder p:nth-child(2)');
const signIn = document.querySelector('#sign-out');
const categories = document.querySelector('.navbar-left div');
const forgotPassword = document.querySelector('#forgot-password');
const changePasswordButton = document.querySelector('.emailNewPassword-button');
const newPasswordButton = document.querySelector('.password-button');
const signUpButton = document.querySelector('.signup-button');
const loginButton = document.querySelector('.login-button');
const myAccountMenu = document.querySelector('#my-account');
const myAccountMobile = document.querySelector('#my-account-mobile');
const loginMobile = document.querySelector('#log-in-mobile');
const createAccountButton = document.querySelector('.create-button');
const myOrdersContent = document.querySelector('.my-orders-content');
const myPurchasedProducts = document.querySelector('.purchasedProducts');
const myPurchasedProductsMobile = document.querySelector('.purchased-products-mobile');



const myCarrito = document.querySelector('.my-carrito');
const myOrderContent = document.querySelector('.my-order-content');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCarrito = document.querySelector('.product-detail-carrito');
const cardsContainer = document.querySelector('.cards-container');
const mainContainer = document.querySelector('.main-container');
const productDetailContainer = document.querySelector('.product-detail');
const divContainer = document.createElement('div');
const shadow = document.querySelector('.shadow');
const myOrder = document.querySelector('.my-order-complete');
const containerOrders = document.querySelector('.my-orders-complete');
const myOrdersMobile = document.querySelector('#myOrdersMobile')
const quantityContainer = document.querySelector('.quantity-container');
const carEmpty = document.querySelector('.car-empty');
const titleCar = document.querySelector('.title-container > p:nth-child(2)');
const showCarrito = document.querySelector('.show-carrito');
const logIn = document.querySelector('.container-logIn');
const info = document.querySelector('.info');
const emailSentContainer = document.querySelector('.containerEmailSent');
const newPassword = document.querySelector('.container-password');
const signUp = document.querySelector('.sign-up-container');
const myAccount = document.querySelector('.myAccount-container');
const containerPurchased = document.querySelector('.container-purchased');
const showPurchases = document.querySelector('.show-purchases');
const viewOrderContainer = document.querySelector('.view-order');
const viewOrder = document.querySelector('.my-view-container');
const ordersEmpty = document.querySelector('.orders-empty');
const ordersContainerInactive = document.querySelector('.orders-container');



const productList = [];
let arrayOfArrays = [];
let purchases = [];


productList.push({
  category: 'Others',
  name: 'Mountain Bike Marlin 6-2022',
  price: 120,
  image: 'https://images.pexels.com/photos/16790814/pexels-photo-16790814/free-photo-of-hierba-bici-bicicleta-mtb.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
});
productList.push({
  category: 'Electronics',
  name: 'Samsung 40" HD LED TV',
  price: 780,
  image: 'https://images.pexels.com/photos/5490302/pexels-photo-5490302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: "The modern TV screen is thin, with high resolution and vibrant colours, offering a high quality and immersive viewing experience."
});
productList.push({
  category: 'Electronics',
  name: 'HP Pavilion intel core i5 laptop',
  price: 1500,
  image: 'https://images.pexels.com/photos/8092368/pexels-photo-8092368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: "High-performance, luxury laptop designed with premium materials and advanced features. It offers processing power, high-quality graphics, fast storage, and a high-resolution screen, delivering an exceptional user experience."
});
productList.push({
  category: 'Electronics',
  name: 'CANON EOS DSLR Camera',
  price: 800,
  image: 'https://images.pexels.com/photos/16867646/pexels-photo-16867646/free-photo-of-camara-hierba-marca-canon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: "The Canon EOS DSLR Camera is a versatile, high-quality digital camera that uses Canon's interchangeable lens system. It offers excellent image resolution, advanced features and manual controls to meet the needs of both amateur and professional photographers"
})
productList.push({
  category: 'Clothes',
  name: 'Sports set - Gray, 74% cotton',
  price: 98,
  image: 'https://images.pexels.com/photos/10481318/pexels-photo-10481318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: "The gray jogger and hoodie set is a set of casual and comfortable clothing consisting of fitted pants (joggers) and a hooded sweatshirt (hoodie) in gray. Ideal for relaxing or doing sporting activities, it offers a modern and relaxed style, with a touch of casual elegance."
})
productList.push({
  category: 'Clothes',
  name: 'White long-sleeved shirt for men',
  price: 48,
  image: 'https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: "The white long-sleeved shirt for men is a classic and versatile garment that offers an elegant and timeless style. Made of quality fabric, it provides comfort and sophistication for any occasion, whether casual or formal."
})
productList.push({
  category: 'Clothes',
  name: 'Green long-sleeved shirt for men',
  price: 40,
  image: 'https://images.pexels.com/photos/3889629/pexels-photo-3889629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: "La camisa manga larga color verde con rayas es una prenda de vestir que combina estilo y frescura. Con su diseño de rayas verdes, agrega un toque de dinamismo y personalidad al atuendo. Es ideal para ocasiones casuales o semiformales, ofreciendo un aspecto moderno y atractivo con un toque de originalidad."
})
productList.push({
  category: 'Clothes',
  name: 'Agnes dress - Rves465',
  price: 35,
  image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNQxsz744CHn6bMVOkrJVLxBfw1pN5KLKvpnTP3bW2f1oDYn1P-SdzijXm52Z8ENPflmOYcygdBkZ_0aSS2chNsnCvOccl8cF2sTLvXUw&usqp=CAE',
  description: "Short dress, round neck, elastic waist and cuffs, high waist, full skirt. Inelastic. Sizing: NormalMaterial: 65% Polyester, 35% Cotton, Measurements: S M"
})
productList.push({
  category: 'Clothes',
  name: "Men's casual shoes sneakers for men",
  price: 56,
  image: 'https://images.pexels.com/photos/1698359/pexels-photo-1698359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: "Casual men's sneakers are sporty and comfortable shoes designed for everyday use. With its casual and versatile style, we offer a combination of fashion and comfort. They are made with durable materials and padded soles to provide good support and cushioning when walking. They are ideal to complement casual looks and add a touch of urban style to any outfit."
})
productList.push({
  category: 'Clothes',
  name: "Beige tennis for women",
  price: 39,
  image: 'https://i.linio.com/p/cd53190574dc22f8235443589ec40d74-product.jpg',
  description: "Tennis Sports Model Casual Or For Any Occasion Beige Color Excellent Quality Materials, 100% National Manufacturing, Fashionable Footwear, Excellent Prices, White Cord Adjustment, Available In A Variety Of Colors, When Choosing The Size Please Keep In Mind That the published sizes are national, we have sizes available from 35 to 40"
})
productList.push({
  category: 'Electronics',
  name: "Cell phone apple Iphone 11  4+64GB White",
  price: 2800,
  image: 'https://www.losdistribuidores.com/wp-content/uploads/2021/02/iphone_11_1.jpg',
  description: "Tennis Sports Model Casual Or For Any Occasion Beige Color Excellent Quality Materials, 100% National Manufacturing, Fashionable Footwear, Excellent Prices, White Cord Adjustment, Available In A Variety Of Colors, When Choosing The Size Please Keep In Mind That the published sizes are national, we have sizes available from 35 to 40"
})
productList.push({
  category: 'Appliances',
  name: "Challenger refrigerator Lumina 239 Liters Frost Titanium Cr-239",
  price: 2300,
  image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQF2nu_yUkxPq-vcQcPlxocyEAkiu7S-PQ4dM77io2NwlE4IF0gUFqiTg3TWO6eOGf-yG1g_aw11WW688kMHic1jmIFrwFCsHHKKdRtDA7-eZxr8H6SmLxc&usqp=CAE',
  description: "Disfruta de tus alimentos frescos y almacénalos de manera práctica y cómoda en la nevera Challenger, la protagonista de la cocina. Comodidad para tu hogar. Frescura en tus alimentos. Eficiencia energética y utilidad. Practicidad interior."
})
productList.push({
  category: 'Electronics',
  name: "Tablet Xiaomi Pad 6 Pro 8gb 256gb",
  price: 1800,
  image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbs2bjgj1MsgF-fNRnP9bJKvl5NSnR0pv6aK_g7KG9HtKzJlwxEFdfkNFprDShdmCQnj-BggHYHRnRT5IELysdSCpEyxRlx-IPu1JayZ2phJd6dvUduXJTGw&usqp=CAE',
  description: "The Xiaomi Pad 6 Pro tablet is a powerful and versatile device with 8GB of RAM and 256GB of storage. It offers smooth performance and ample storage capacity for applications, files, and multimedia. With a high-resolution screen and advanced technology, it provides an immersive visual experience and vibrant colors. It is ideal for entertainment, productivity and online browsing."
})
productList.push({
  category: 'Electronics',
  name: "Steren black noise canceling bluetooth headphones",
  price: 63,
  image: 'https://www.steren.com.co/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/21867108a/audifonos-bluetooth-con-cancelacion-de-ruido-negros.jpg',
  description: "Noise canceling system (noise cancellation) Over ear: they wrap your ears for a truly satisfying audio experience. Padded headband and ear cups for ultra comfort. Rechargeable battery up to 12 hours of playback. Hands-free function. Collapsible design for easy storage. Soft touch finish. You can use them as wired headphones."
})
productList.push({
  category: 'Appliances',
  name: "ZOÜ Washing Machine 16 Kilograms Haceb digital Coal Gray",
  price: 1200,
  image: 'https://hacebco.vteximg.com.br/arquivos/ids/175181-800-800/foto-1.jpg?v=638118877271100000',
  description: "The ideal care for your favorite clothes with the Zoü HACEB Digital Washing Machine. Thanks to its design of the tank movements, it gives you maximum cleaning and care of the garments. With its express wash program, the wash cycle will last from 20 to 30 minutes, saving water and energy for each wash. It also has an easy-to-use and waterproof digital panel, tempered glass lid and lint-catching filter. Order now!"
})
productList.push({
  category: 'Appliances',
  name: "SHINE microwave with ceramic enamel grill, 23 L",
  price: 480,
  image: 'https://www.lg.com/co/images/microondas/md05814669/gallery/medium01.jpg',
  description: "Smooth and shiny ceramic that allows easy cleaning, preventing odors and oil and food residues from adhering to the walls. BROWNING function that allows the outer layer to be exposed to a crispy and golden texture without affecting the inside of the food. ECO MODE Energy saving that allows up to 40% savings during the time the oven is not in use."
})
productList.push({
  category: 'Furnitures',
  name: "Palermo Sofa 3 Gray Seats + Oak Legs",
  price: 675,
  image: 'https://homecenterco.scene7.com/is/image/SodimacCO/567021_01?wid=1500&hei=1500&qlt=70',
  description: "Sofa made of linen-type fabric, oak legs, high-density foam. Bring simplicity and modernity to your spaces."
})
productList.push({
  category: 'Furnitures',
  name: "Cupboard Auxiliary Kitchen Cabinet Lili 6 Doors Cappuccino",
  price: 675,
  image: 'https://exitocol.vtexassets.com/arquivos/ids/5552348-800-auto?v=637463268331370000&width=800&height=auto&aspect=true',
  description: "Lili Cupboard 6 Doors Complement your home with the style provided by our Lili Kitchen Cupboard, thanks to its high-quality MDP wood finishes and manufacturing, it provides elegance in any space in your home."
})
productList.push({
  category: 'Others',
  name: "Multifunctional Exercise Bar 8 In 1 Crossfit Pull Ups",
  price: 130,
  image: 'https://m.media-amazon.com/images/I/51scrnIZLlS._AC_UF1000,1000_QL80_.jpg',
  description: "The Multifunctional Exercise Bar 8 In 1 Crossfit Pull Ups is a versatile exercise bar that allows you to perform a variety of exercises, including pull-ups (dominated), dips (funds), push-ups (push-ups) and more. It is ideal for strength and resistance training at home or in the gym."
})


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
myOrdersList.addEventListener('click', myOrders);
logoLobby.addEventListener('click', logoLobbyStr);
littleArrowCarrito.addEventListener('click', littleArrowBack);
showPurchases.addEventListener('click', myPurchasedProductsList);
myOrdersMobile.addEventListener('click', () => {
  containerOrders.classList.remove('inactive');
  mainContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  myAccount.classList.add('inactive');
  myOrder.classList.add('inactive');
  ordersEmpty.classList.remove('inactive');
});
productDetailCloseIcon.addEventListener('click', () => {
  productDetailContainer.classList.add('inactive');

  if(window.innerWidth <= 641){
    body.style.overflowY = 'auto';
  }
});
signIn.addEventListener('click', () => {
  logIn.classList.remove('inactive');
  mainContainer.classList.add('inactive');
  categories.classList.add('inactive');
  menuCarritoIcon.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shadow.classList.add('inactive');
  menuEmail.classList.add('inactive');
  info.classList.remove('inactive');
  logoLobby.style.width = '120px';
  viewOrderContainer.classList.add('inactive');
})
forgotPassword.addEventListener('click', () => {
  logIn.classList.add('inactive');
  emailSentContainer.classList.remove('inactive');
})
changePasswordButton.addEventListener('click', () => {
  newPassword.classList.remove('inactive');
  emailSentContainer.classList.add('inactive');
})
signUpButton.addEventListener('click', () => {
  signUp.classList.remove('inactive');
  logIn.classList.add('inactive');
})
myAccountMenu.addEventListener('click', () => {
  myAccount.classList.remove('inactive');
  mainContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shadow.classList.add('inactive');
  viewOrderContainer.classList.add('inactive');
})
myAccountMobile.addEventListener('click', () => {
  myAccount.classList.remove('inactive');
  mainContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shadow.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  containerOrders.classList.add('inactive');
  viewOrderContainer.classList.add('inactive');
})
loginMobile.addEventListener('click', () => {
  logIn.classList.remove('inactive');
  mobileMenu.classList.add('inactive');
  nav.classList.add('inactive');
  viewOrderContainer.classList.add('inactive');
})
newPasswordButton.addEventListener('click', () => {
  logIn.classList.remove('inactive');
  newPassword.classList.add('inactive');
})
loginButton.addEventListener('click', () => {
  nav.classList.remove('inactive');
  loginMobile.innerText = 'Log out';
  arrayOfArrays = [];
  numberCarrito.innerText = 0;
  purchases = [];
  logoLobbyStr();
})
createAccountButton.addEventListener('click', () => {
  nav.classList.remove('inactive');
  logoLobbyStr();
  loginMobile.innerText = 'Log out';
  signUp.classList.add('inactive');
})


function toggleDesktopMenu() {
  const isAsideClosed = asideCarrito.classList.contains('inactive');

  if (!isAsideClosed) {
    asideCarrito.classList.add('inactive');
  }

  const isShadowInactive = shadow.classList.contains('inactive');
  const isDesktopMenuInactive = desktopMenu.classList.contains('inactive');

  if(!isShadowInactive && isDesktopMenuInactive){
    shadow.classList.add('inactive');
  }

  shadow.classList.toggle('inactive');
  desktopMenu.classList.toggle('inactive');
  body.style.overflowY = 'hidden';

  if(desktopMenu.classList.contains('inactive')){
    body.style.overflow = 'auto';
  }

  shadow.addEventListener('click', ()=> {
    desktopMenu.classList.add('inactive');
    shadow.classList.add('inactive');
    body.style.overflow = 'auto';
  })
}

function toggleMobileMenu() {
  const isAsideClosed = asideCarrito.classList.contains('inactive');

  if (!isAsideClosed) {
    asideCarrito.classList.add('inactive');
  }

  const isShadowInactive = shadow.classList.contains('inactive');
  const isMobileMenuInactive = mobileMenu.classList.contains('inactive');

  if(!isShadowInactive && isMobileMenuInactive){
    shadow.classList.add('inactive');
  }

  if(mobileMenu.classList.contains('inactive')){
    mainContainer.classList.add('inactive');
  } else {
    mainContainer.classList.remove('inactive');
  }

  if(!containerOrders.classList.contains('inactive')){
    mainContainer.classList.add('inactive');
  } else {
    containerOrders.classList.add('inactive');
  }

  if(!myAccount.classList.contains('inactive')){
    // myAccount.classList.add('inactive');
    mainContainer.classList.add('inactive');
  } 


  productDetailContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
  if(window.innerWidth <= 641){
    body.style.overflowY = 'auto';
  }

  if(!myOrder.classList.contains('inactive')){
    mainContainer.classList.add('inactive');
  }
  if(!viewOrderContainer.classList.contains('inactive')){
    mainContainer.classList.add('inactive');
    viewOrderContainer.classList.remove('inactive');
  }
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  const isShadowInactive = shadow.classList.contains('inactive');
  const isAsideCarritoInactive = asideCarrito.classList.contains('inactive');

  if(!isShadowInactive && isAsideCarritoInactive){
    shadow.classList.add('inactive');
  }

  shadow.classList.toggle('inactive');
  asideCarrito.classList.toggle('inactive');

  shadow.addEventListener('click', ()=> {
    asideCarrito.classList.add('inactive');
    shadow.classList.add('inactive');
    // if(window.innerWidth <= 641){
    // }
    body.style.overflowY = 'auto';
  })

  // if(window.innerWidth <= 641){
  body.style.overflow = 'hidden';
  // }

  if(asideCarrito.classList.contains('inactive')){
    body.style.overflowY = 'auto';
  }
}

function openProductDetailAside(event){
  const productId = event.currentTarget.dataset.productId;
  const product = getProductById(productId);

  asideCarrito.classList.add('inactive');
  desktopMenu.classList.add('inactive');

  if(product){
    divContainer.classList.add('product-card-addToCar');
    divContainer.innerHTML = `
    <img src=${product.image} alt="bike" id="product-image" class="img-toAddCar">
    <div class="product-info">
      <p id="priceToAdd">$${product.price}</p>
      <p id="nameToAdd">${product.name}</p>
      <p>${product.description}</p>
      <button class="primary-button-DetailProduct add-to-cart-button add-to-car" data-product-id=${product.id}>
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
    `
    productDetailContainer.setAttribute('data-category-id', product.category);
    productDetailContainer.appendChild(divContainer);
    productDetailContainer.classList.toggle('inactive');
    divContainer.querySelector('.add-to-car').addEventListener('click', addProductsToCar);
    
    if(!productDetailContainer.classList.contains('inactive')){
      if(window.innerWidth <= 641){
        body.style.overflowY = 'hidden';
        productDetailContainer.style.overflow = 'auto';
      }
    }
  }
}

function getProductById(productId){
  const product = productList.find(item => item.id == productId);

  return product
}


function checkoutMyOrder(){
  myOrder.classList.remove('inactive');
  containerOrders.classList.add('inactive');
  const isShadowInactive = shadow.classList.contains('inactive');
  const isAsideCarritoInactive = asideCarrito.classList.contains('inactive');
  if(!isShadowInactive && !isAsideCarritoInactive){
    shadow.classList.add('inactive');
    asideCarrito.classList.add('inactive');
    mainContainer.classList.add('inactive');
  }


  let renderCarrito = () => {
    myOrderContent.innerHTML = '';

    let i = 1;
    let total = 0;

    arrayOfArrays.forEach(card => {
      const shoppingCart = document.createElement('div');
      shoppingCart.classList.add('shopping-cart-order');
      shoppingCart.classList.add('shopping-cart');
      shoppingCart.setAttribute('data-id', card.id = i);
      shoppingCart.innerHTML = `
      <figure>
        <img src="${card.image}">
      </figure>
      <p class="name">${card.name}</p>
      <div>
        <div class="quantity-content">
          <p>${card.quantity}</p>
        </div>
        <div>
          <p>1</p>
          <p>x</p>
          <p>${card.priceQuiet}</p>
        </div>
      </div>
      <p>${card.price}</p>
      `;

      myOrderContent.append(shoppingCart);
      i++;
      total = total + parseInt(card.quantity * card.priceQuiet.slice(1));
    });
    priceOrder.innerText = `$${total}`;
  }
  renderCarrito();

  let totalPrice = 0;
  myOrderContent.querySelectorAll('.shopping-cart-order').forEach(cart => {
    const price = cart.querySelector('p:nth-child(4)');
    const priceQuiet = cart.querySelector('div > div:nth-child(2) > p:nth-child(3)').textContent;
    const quantity = parseInt(cart.querySelector('div > div:nth-child(1)').textContent);
    totalPrice = `$${quantity * parseInt(priceQuiet.slice(1))}`;

    price.textContent = totalPrice;
  })

  totalArticles.innerText = `${arrayOfArrays.length} articles`;

  const currentDate = new Date();
  const options = { year: 'numeric', month:'numeric', day:'numeric'};
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  dateOrder.textContent = formattedDate;
  menuCarritoIcon.classList.add('inactive');
  categories.classList.add('inactive');
  
  buttonBuy.addEventListener('click', () => {
    if(arrayOfArrays.length > 0){
      const array = [...arrayOfArrays];
      purchases.push(array)
      arrayOfArrays = [];


      purchases.forEach(array => {
        let priceSum = 0;
        array.date = formattedDate
        array.articles = array.length;

        array.forEach(card => {
          priceSum += parseInt(card.price.slice(1))
        })
        array.priceTotal = `$${priceSum}`;
      })
      numberCarrito.textContent = arrayOfArrays.length;
      myCarrito.innerHTML = '';
      containerPurchased.classList.remove('inactive');

      setTimeout(() => {
        containerPurchased.classList.add('inactive');
      }, 3000);

      myOrder.classList.add('inactive');
      mainContainer.classList.remove('inactive');
      menuCarritoIcon.classList.remove('inactive');
      body.style.overflowY = 'auto';
    }
  })

  myPurchasedProductsMobile.addEventListener('click', myPurchasedProductsList);
  myPurchasedProducts.addEventListener('click', myPurchasedProductsList);

}

function myOrders(){
  containerOrders.classList.remove('inactive');
  myOrder.classList.add('inactive');
  shadow.classList.add('inactive');
  mainContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');

  if(menuCarritoIcon.classList.contains('inactive')){
    menuCarritoIcon.classList.remove('inactive');
  }

  ordersEmpty.classList.remove('inactive');
}

function myPurchasedProductsList() {
  ordersEmpty.classList.add('inactive');
  ordersContainerInactive.classList.remove('inactive');
  viewOrderContainer.classList.add('inactive');

  if(purchases.length < 1){
    ordersEmpty.classList.remove('inactive');
    ordersContainerInactive.classList.add('inactive');
  }

  let i = 1;
  myOrdersContent.innerHTML = '';

  purchases.forEach(purchase => {
    purchase.orderId = i;
    const order = document.createElement('div');
    order.classList.add('orders');
    order.setAttribute('data-order-id', purchase.orderId)

    order.innerHTML = `
      <p>
        <span>${purchase.date}</span>
        <span>${purchase.articles} articles</span>
      </p>
      <p>${purchase.priceTotal}</p>
      <img src="./icons/flechita.svg" alt="arrow">
    `;

    myOrdersContent.append(order);
    i++;
  })

  myOrder.classList.add('inactive');
  containerOrders.classList.remove('inactive');
  mainContainer.classList.add('inactive');

  myOrdersContent.querySelectorAll('.orders').forEach(order => {
    order.addEventListener('click', (e) => {
      const orderId = order.getAttribute('data-order-id');
      const selectedPurchase = purchases.find(purchase => purchase.orderId == orderId);


      if(selectedPurchase){
        containerOrders.classList.add('inactive');
        viewOrderContainer.classList.remove('inactive');
        viewOrder.innerHTML = '';
  
        const orderView = document.createElement('div');
        orderView.classList.add('my-view-content');
        let viewCart = '';

        selectedPurchase.forEach(obj => {
          viewCart += `
          <div class="view-cart">
            <figure>
              <img src=${obj.image}>
            </figure>
            <p class="name">${obj.name}</p>
            <div>
              <div class="quantity-content">
                <p>${obj.quantity}</p>
              </div>
              <div>
                <p>1</p>
                <p>x</p>
                <p>${obj.priceQuiet}</p>
              </div>
            </div>
            <p class="price">${obj.price}</p>
          </div>
          `;
        });

        orderView.innerHTML = `        
        <div class="purchase-summary">
          <p>
            <span>${selectedPurchase.date}</span>
            <span>${selectedPurchase.articles} articles</span>
          </p>
          <p>${selectedPurchase.priceTotal}</p>
        </div>
        ${viewCart}
        <h1 class="title">My purchase</h1>
        `
        viewOrder.append(orderView);
      }
    })
    document.querySelector('.little-arrow-view').addEventListener('click', () => {
      viewOrderContainer.classList.add('inactive');
      ordersContainerInactive.classList.remove('inactive');
      containerOrders.classList.remove('inactive');
    })
  })
}

function logoLobbyStr(){
  const isDesktopMenuInactive = desktopMenu.classList.contains('inactive');
  const isMobileMenuInactive = mobileMenu.classList.contains('inactive');
  const isAsideCarritoInactive = asideCarrito.classList.contains('inactive');
  const isProductDetailContainerInactive = productDetailContainer.classList.contains('inactive');
  const isShadowInactive = shadow.classList.contains('inactive');
  const isMyOrderInactive = myOrder.classList.contains('inactive');
  const isContainerOrdersInactive = containerOrders.classList.contains('inactive');

  if(!isDesktopMenuInactive || !isMobileMenuInactive || !isAsideCarritoInactive || !isProductDetailContainerInactive || !isShadowInactive || !isMyOrderInactive || !isContainerOrdersInactive){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideCarrito.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shadow.classList.add('inactive');
    myOrder.classList.add('inactive');
    containerOrders.classList.add('inactive');
  }


  logoLobby.setAttribute('id', 'All');
  const productCards = cardsContainer.querySelectorAll('.product-card');

  productCards.forEach(card => {
    if(logoLobby){
      card.classList.remove('inactive');
    }
  })

  if(menuCarritoIcon.classList.contains('inactive')){
    menuCarritoIcon.classList.remove('inactive');
  }

  mainContainer.classList.remove('inactive');
  logoLobby.style.width = '100px';
  info.classList.add('inactive');
  logIn.classList.add('inactive');
  categories.classList.remove('inactive');
  menuEmail.classList.remove('inactive');
  myAccount.classList.add('inactive');
  viewOrderContainer.classList.add('inactive');

  if(window.innerWidth <= 641){
  body.style.overflowY = 'auto';
  }
}

function littleArrowBack(){
  shadow.classList.add('inactive');
  asideCarrito.classList.add('inactive');
  body.style.overflowY = 'auto';
}

const heightShoppingCart = document.querySelector('.shopping-cart').offsetHeight;

function addProductsToCar(event){
  let notification = () => {
    let pConfirmAdded = confirmAddedToCar.querySelector('p');
    pConfirmAdded.innerText = `${productCardObj.name} se ha añadido a tu carrito`;
    confirmAddedToCar.classList.remove('inactive');
    if (hideNotificationTimeout) {
      clearTimeout(hideNotificationTimeout);
    }
    hideNotificationTimeout = setTimeout(() => {
      confirmAddedToCar.classList.add('inactive');
    }, 3000);
  }

  let renderCarrito = () => {
    myCarrito.innerHTML = '';

    let i = 1;
    let total = 0;

    arrayOfArrays.forEach(card => {
      const shoppingCart = document.createElement('div');
      shoppingCart.classList.add('shopping-cart');
      shoppingCart.setAttribute('data-id', card.id = i);

      shoppingCart.innerHTML = `
      <figure>
        <img src=${card.image}>
      </figure>
      <p class="name">${card.name}</p>

      <div>
        <div class="quantity-container">
          <button type="button" class="buttonMinus">
            -
          </button>
          <span class="inactive span">${card.name}</span>
          <div class="quantity">
            <p>${card.quantity}</p>
          </div>
          <button type="button" class="buttonPlus">
            +
          </button>
        </div>
        <div>
          <p>${card.quantity}</p>
          <p> x </p>
          <p>${card.price}</p>
        </div>
      </div>

      <p>${card.price}</p>
      <img src="./icons/icon_close.png" alt="close" class="icon-close">
      `;

      myCarrito.append(shoppingCart);
      i++;
      total = total + parseInt(card.quantity * card.price.slice(1));
    });
    totalPriceCar.innerText = `$${total}`;
  }

  if(!carEmpty.classList.contains('inactive')){
    carEmpty.classList.add('inactive');
    titleCar.style.margin = '14px 8px';
    littleArrowCarrito.style.paddingBottom = '5px';
  }

  showCarrito.addEventListener('click', () => {
    asideCarrito.classList.remove('inactive');
    shadow.classList.remove('inactive');
    // if(window.innerWidth <= 641){
    // }
    body.style.overflow = 'hidden';  
  })

  const productId = event.target;
  const productCard = productId.closest('.product-card-addToCar');
  const productCardObj = {
    image: productCard.querySelector('.img-toAddCar').getAttribute('src'),
    price: productCard.querySelector('#priceToAdd').textContent,
    name: productCard.querySelector('#nameToAdd').textContent,
    quantity: 1,
    id:1
  };
  const price = productCard.querySelector('#priceToAdd').textContent;
  const exits = arrayOfArrays.some(product => product.name === productCardObj.name);
  if(exits){
    const products = arrayOfArrays.map(product => {
      if(product.name === productCardObj.name){
        product.quantity++;
        productCardObj.priceQuiet = price;
        return product
      } else {
        product.id++;
        productCardObj.priceQuiet = price;
        return product;
      }
    });
    arrayOfArrays = [...products];
  } else {
    productCardObj.priceQuiet = price;
    arrayOfArrays = [...arrayOfArrays, productCardObj];
  }
  renderCarrito();
  notification();

  numberCarrito.innerText = arrayOfArrays.length;

  if(!productDetailContainer.classList.contains('inactive')){
    productDetailContainer.classList.add('inactive');
  } else if(productId){
    productDetailContainer.classList.remove('inactive');
  }

  let totalPrice = 0;
  myCarrito.querySelectorAll('.shopping-cart').forEach(cart => {
    const price = cart.querySelector('p:nth-child(4)');
    const priceQuiet = cart.querySelector('div > div:nth-child(2) > p:nth-child(3)').textContent;
    let quantity = parseInt(cart.querySelector('.quantity > p').textContent);
    totalPrice = `$${quantity * parseInt(priceQuiet.slice(1))}`;

    price.textContent = totalPrice;
  })


  const shoppingCart = myCarrito.querySelectorAll('.shopping-cart');
  shoppingCart.forEach(cart =>{
    const counter = cart.querySelector('.quantity p');
    const buttonMin = cart.querySelector('.buttonMinus')
    if(parseInt(counter.textContent) <= 1){
      buttonMin.disabled = true;
    } else{
      buttonMin.disabled = false;
    }
    cart.addEventListener('click', (e) => {
      const shopping = e.target;
      let priceQuiet = shopping.closest('.shopping-cart').querySelector('.shopping-cart div > div:nth-child(2) > p:nth-child(3)').textContent;
      if(e.target.classList.contains('buttonPlus')){
        let price = shopping.closest('.shopping-cart').querySelector('p:nth-child(4)');
        const buttonPlus = e.target;
        const buttonMinus = e.target.parentElement.querySelector('.buttonMinus');
        let contador = buttonPlus.parentElement.querySelector('.quantity > p');
        contador.textContent = parseInt(contador.textContent) + 1;
        let quantity = parseInt(contador.textContent);
        let total = 0;
        total = `$${quantity * parseInt(priceQuiet.slice(1))}`;
        if(parseInt(contador.textContent) <= 1){
          buttonMinus.disabled = true;
        } else{
          buttonMinus.disabled = false;
        }

        contador.textContent = quantity;
        price.textContent = total;
        totalPriceCar.innerText = total;

        let totalPrice = 0;
        shoppingCart.forEach(cart => {
          const totalPrices = cart.querySelector('p:nth-child(4)');
          const productPrice = parseInt(totalPrices.textContent.slice(1));
          totalPrice += productPrice;
        })
        totalPriceCar.innerText = `$${totalPrice}`;

        const name = e.target.closest('.shopping-cart').querySelector('p:nth-child(2)').textContent;
        const exits = arrayOfArrays.some(product => product.name == name);
        if(exits){
          const products = arrayOfArrays.map(product => {
            if(product.name === name){
              product.quantity = quantity;
              product.name = name;
              product.price = price.textContent;
              product.priceQuiet = priceQuiet;
              return product
            } else {
              return product;
            }
          });
          arrayOfArrays = [...products];
        }
      }
      if(e.target.classList.contains('buttonMinus')){
        let price = shopping.closest('.shopping-cart').querySelector('p:nth-child(4)');
        const buttonMinus = e.target;
        let contador = buttonMinus.parentElement.querySelector('.quantity > p');
        contador.textContent = parseInt(contador.textContent) - 1;
        let quantity = parseInt(contador.textContent);
        let total = 0;
        total = `$${quantity * parseInt(priceQuiet.slice(1))}`;
        if(parseInt(contador.textContent) <= 1){
          buttonMinus.disabled = true;
        } else{
          buttonMinus.disabled = false;
        }

        contador.textContent = quantity;
        price.textContent = total;
        totalPriceCar.innerText = total;

        let totalPrice = 0;
        shoppingCart.forEach(cart => {
          const totalPrices = cart.querySelector('p:nth-child(4)');
          const productPrice = parseInt(totalPrices.textContent.slice(1));
          totalPrice += productPrice;
        })
        totalPriceCar.innerText = `$${totalPrice}`;


        const name = e.target.closest('.shopping-cart').querySelector('p:nth-child(2)').textContent;
        const exits = arrayOfArrays.some(product => product.name == name);
        if(exits){
          const products = arrayOfArrays.map(product => {
            if(product.name === name){
              product.quantity = quantity;
              product.name = name;
              product.price = price.textContent;
              product.priceQuiet = priceQuiet;
              return product
            } else {
              return product;
            }
          });
          arrayOfArrays = [...products];
        }
      }
    })
  })

  myCarrito.addEventListener('click', (e) => {
    if(e.target.classList.contains('icon-close')){
      const product = e.target.parentElement;
      const productName = product.querySelector('.name').textContent;
      arrayOfArrays = arrayOfArrays.filter(product => product.name !== productName);

      renderCarrito();

      if(arrayOfArrays.length == 0){
        carEmpty.classList.remove('inactive');
      } else if(arrayOfArrays.length <= 3){
        asideCarrito.style.height = 'auto';
      }

      numberCarrito.innerText = arrayOfArrays.length;
    }
  })

  if(arrayOfArrays.length < 4){
    for (let i = 0; i < arrayOfArrays.length; i++) {
      asideCarrito.style.height = 'auto';
      console.log(asideCarrito.offsetHeight)
    }
  } else {
    asideCarrito.style.height = '590px';
    asideCarrito.style.overflowY = 'auto';
  }

  document.querySelector('.button-checkout').addEventListener('click', checkoutMyOrder);
}

function renderProducts(arr) {
  let i = 1;

  arr.forEach(card => {
    let productId = card.id = i++;
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.classList.add('product-card-addToCar')
    productCard.setAttribute('data-product-id', productId);
    productCard.setAttribute('data-category-id', card.category);
    productCard.innerHTML = `
      <img src=${card.image} alt="" class="card-img img-toAddCar">
      <div class="product-info-list">
        <div>
          <p id="priceToAdd">$${card.price}</p>
          <p id="nameToAdd">${card.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="" class="add-to-car" data-product-id=${card.id} data-category-id=${card.category}>
        </figure>
      </div>
    `;

    cardsContainer.appendChild(productCard);
    productCard.addEventListener('click', openProductDetailAside);
  });
  const addToCarProducts = document.querySelectorAll('.add-to-car');
  addToCarProducts.forEach(icon => {
    icon.addEventListener('click', addProductsToCar);
  })
}
renderProducts(productList);

function filterCategories() {
  navbarLeft.querySelector('ul').querySelectorAll('li').forEach(li => {
    const aElements = li.querySelector('a');
    aElements.addEventListener('click', (event) => {
      const productCards = cardsContainer.querySelectorAll('.product-card');
      const selectedCategoryId = event.currentTarget.dataset.categoryId;

      productCards.forEach(card => {
        const categoryProduct = card.dataset.categoryId;
        card.classList.add('inactive');

        if(selectedCategoryId == categoryProduct){
          card.classList.remove('inactive');
          mobileMenu.classList.add('inactive');
        } else if(selectedCategoryId == 'All'){
          card.classList.remove('inactive');
          mobileMenu.classList.add('inactive');
        }
      })

      if(selectedCategoryId == productDetailContainer.getAttribute('data-category-id')){
        productDetailContainer.classList.remove('inactive');
      } else {
        productDetailContainer.classList.add('inactive');
      }

      if(!containerOrders.classList.contains('inactive') || !myOrder.classList.contains('inactive')){
        containerOrders.classList.add('inactive');
        mainContainer.classList.remove('inactive');
        myOrder.classList.add('inactive')
      }
      desktopMenu.classList.add('inactive');
      shadow.classList.add('inactive');
      asideCarrito.classList.add('inactive');
      viewOrderContainer.classList.add('inactive');

      if(menuCarritoIcon.classList.contains('inactive')){
        menuCarritoIcon.classList.remove('inactive');
      }
    });
  });

  categoryListMobile.querySelectorAll('li').forEach(li => {
    li.querySelector('a').addEventListener('click', (e) => {
      const productCards = cardsContainer.querySelectorAll('.product-card');
      const selectedCategoryId = e.currentTarget.dataset.categoryId;
      
      productCards.forEach(card => {
        const categoryProduct = card.dataset.categoryId;
        card.classList.add('inactive');
        
        if(selectedCategoryId == categoryProduct){
          card.classList.remove('inactive');
          mainContainer.classList.remove('inactive');
          mobileMenu.classList.add('inactive');
        } else if(selectedCategoryId == 'All'){
          card.classList.remove('inactive');
          mainContainer.classList.remove('inactive');
          mobileMenu.classList.add('inactive');
        } else if(!containerOrders.classList.contains('inactive')){
          containerOrders.classList.add('inactive');
        }
      })

      myAccount.classList.add('inactive');
      containerOrders.classList.add('inactive');

      if(!myOrder.classList.contains('inactive')){
        myOrder.classList.add('inactive');
        if(window.innerWidth <= 641){
          body.style.overflow = 'auto';
        }
      }

      viewOrderContainer.classList.add('inactive');
    })
  })
}
filterCategories();


// HECHO - Dinamizar la section myOrdersComplete, que serían los resumenes de las compras hechas
// HECHO - Nueva section My purchases, para visualizar las compras que he hecho
// HECHO - Código responsivo
// HECHO - Se añadieron las clases faltantes que son otras páginas que conforman la tienda online
// HECHO - Si le doy checkout a los productos del carrito que esos productos vayan directo a la section My order en pantalla completa
// HECHO - El número del carrito sin abrir tiene que ser dinámico
// HECHO - Si se repite x producto al añadirlo al carrito, que no se rendericen más shoppingCarts si no que solo aumente el quantity del producto
// HECHO - Añadir un quantity a cada producto del carrito
// HECHO - Total del carrito dinámico
// HECHO - Mensaje de carrito vacío
// HECHO - Subir o bajar cantidad de los productos manualmente desde el carrito y el valor por unidad fijo debajo del contador
// HECHO - Si le doy click a añadir carrito desde la productCard o desde el productDetail, y que esos productos aparezcan en el asideCarrito
// HECHO - Añadirle función a la x que tienen los productos en el asideCarrito para poder eliminarlos
// HECHO - Añadir un hover de ilusion de agrandar tamaño al carrito de productCard
// HECHO - Añadirle un evento de click al coso para ir atrás (que sería para cerrar al ventana), del asideCarrito
// HECHO - Cuando doy click al botón de añadir al carrito desde el producto que no se habra el productDetail
// HECHO - Faltaría arreglar el titulo My order de product detail carrito
// HECHO - modificar los bordes de algunas teclas al pasar encima de ellas con la tecla tab
// HECHO - Si tengo un productDetail abierto y le doy click a una categoria a la que pertenece ese productDetail, entonces dejar abierto el productDetail, sino, cerrarlo
// HECHO - Si tengo abierto el productDetailCarrito o el menú y luego le doy click a alguna categoría, entonces que se cierre el productDetailCarrito y el menú y se filtren los productos
// HECHO - Si filtré productos y luego le doy click al logo, entonces que el logo me muestre todos los productos como en el inicio