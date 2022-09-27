document.getElementById("myHeader").innerHTML = `
<div class="header">
    <div class="header-items header-left">
      <a href="/index.html" style="margin-bottom:5px"><img id="logo" src="./img/logo.png"></a>
      <a class="header-link nav">My Purchases</a>
      <a class="header-link nav" href="profils.html">My profile</a>
      <a class="header-link nav">Offers</a>

    </div>
    <div class="header-items header-right">
      <a class="header-link login" href="/login.html" type="button">Log in</a>
      <a class="header-link signup" href="./signup.html" type="button">Sign up</a>
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
