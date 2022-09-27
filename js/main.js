const products = [
  {
    id: 0,
    name: "Nude",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 23,
    category: "foto",
    reserved: false,
    author: "Brink",
    imgPath: "img/Screenshot.jpg",
  },
  {
    id: 1,
    name: "Jane",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 97,
    category: "audio",
    reserved: false,
    author: "Brink",
    imgPath: "img/Screenshot.jpg",
  },
  {
    id: 2,
    name: "Jack",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 2345,
    category: "video",
    reserved: false,
    author: "Brink",
    imgPath: "img/Screenshot.jpg",
  },
  {
    id: 3,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "foto",
    reserved: false,
    author: "Brink",
    imgPath: "img/Screenshot.jpg",
  },
  {
    id: 4,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "foto",
    reserved: false,
    author: "Brink",
    imgPath: "img/Screenshot.jpg",
  },
  {
    id: 5,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "foto",
    reserved: false,
    author: "Brink",
    imgPath: "img/Screenshot.jpg",
  },
  {
    id: 6,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "audio",
    reserved: false,
    author: "Brink",
    imgPath: "img/Screenshot.jpg",
  },
  {
    id: 7,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "video",
    reserved: false,
    author: "Brink",
    imgPath: "img/Screenshot.jpg",
  },
  {
    id: 8,
    name: "Jill",
    description: "Lorem ipsum dolor Lorem ipsum dolor sit amet",
    price: 14,
    category: "video",
    reserved: false,
    author: "Brink",
    imgPath: "img/Screenshot.jpg",
  },
];

document.getElementById("myHeader").innerHTML = `
<div class="header">
    <div class="header-items header-left">
      <a href="index.html" style="margin-bottom:5px"><img id="logo" src="./img/logo.png"></a>
      <a class="header-link nav">My Purchases</a>
      <a class="header-link nav" href="profils.html">My profile</a>
      <a class="header-link nav">Offers</a>

    </div>
    <div class="header-items header-right">
      <a class="header-link login" href="login.html" type="button">Log in</a>
      <a class="header-link signup" href="signup.html" type="button">Sign up</a>
    </div>
  </div>
`;
document.getElementById("myFooter").innerHTML = `
<div class="footer">
    <p class="footer-item">Help</p>
    <p class="footer-item">Contact us</p>
    <p class="footer-item">About us</p>
</div>
`;

products.forEach((p) => {
  let div = document.createElement("div");
  div.id = "renderedCard";
  div.innerHTML = `
    <div id="card">
    <img src="${p.imgPath}" alt="screenshot">
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <button class="buyButton" >${p.price} $</button>
    </div>`;
  document.getElementsByClassName(p.category)[0].appendChild(div);
});
