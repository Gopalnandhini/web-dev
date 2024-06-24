class SpecialHeader extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="https://olirdesigns.com/wp-content/uploads/2022/03/Logo.svg" width="280" height="100"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item px-3">
            <a class="nav-link active" aria-current="page" href="index.html"><b>Home</b></a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="about-us.html"><b>About us</b></a>
          </li>
          <li class="nav-item dropdown px-3">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>services</b>
            </a>
            <ul class="dropdown-menu px-3">
              <li><a class="dropdown-item" href="graphic-designing.html"><b>graphic design</b></a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://olirdesigns.com/our-services/website-design-thanjavur/"><b>web design</b></a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://olirdesigns.com/our-services/ui-ux-design-thanjavur/"><b>UI/UX</b></a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://olirdesigns.com/our-services/domain-and-hosting-thanjavur/"><b>domain & hosting</b></a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://olirdesigns.com/our-services/digital-marketing-thanjavur/"><b>digital marketing</b></a></li>
            </ul>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="works.html"><b>works</b></a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="https://olirdesigns.com/blog/"><b>blogs</b></a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="career.html"><b>careers</b></a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="contact-us.html"><b>contact us</b></a>
          </li>
        </ul>
      </div>
    
    </div>
  </nav>`
  }
}


class SpecialFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <div class="container-fluid bg-dark">
  <footer class="pt-3 pb-3">
    <img src="https://olirdesigns.com/wp-content/uploads/2021/05/footer.png" class="center-image">
     <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
      <li class="nav-item"><a href="https://www.linkedin.com/company/olirdesigns/" class="nav-link px-2 text-white icon-large"><i class="bi bi-linkedin"></i></a></li>
      <li class="nav-item"><a href="https://instagram.com/olirdesigns/" class="nav-link px-2 text-white icon-large"><i class="bi bi-instagram"></i></a></li>
      <li class="nav-item"><a href="https://facebook.com/olirdesigns/" class="nav-link px-2 text-white icon-large"><i class="bi bi-facebook"></i></a></li>
      <li class="nav-item"><a href="https://docs.google.com/presentation/d/e/2PACX-1vQ6c4GagvWAT4etD9dow4-a1cJI8YSeK6IUzFHwaj7JwuPEc5UzwlH6vsUfTEFivASiAhJ-jplT4538/pub?start=false&loop=false&delayms=3000" class="nav-link px-2 text-white icon-large"><i class="bi bi-file-earmark-pdf-fill"></i></a></li>
    </ul>
    <p class="text-center text-white">&copy;Copyrights 2023. Olir Designs Private Limited. All Rights Reserved <br>
        <a href="https://olirdesigns.com/terms-and-conditions/">Terms and Conditions</a> | <a href="https://olirdesigns.com/privacy-policy/">Privacy Policy</a></p>

        <div class="whatsapp-float">
          <div class="whatsapp-icon" id="whatsapp-icon">
              <i class="bi bi-whatsapp ico"></i>
              <div class="tooltip" id="tooltip">Chat us on WhatsApp</div>
          </div>
      </div>
  </footer>
</div>
`
  }
}

customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)

function bigImg(x) {
  x.style.height = "570px";
  x.style.width = "500px";
}

function normalImg(x) {
  x.style.height = "540px";
  x.style.width = "470px";
}
document.getElementById("whatsapp-icon").addEventListener("click", function() {
  // Replace `your_whatsapp_number` with your actual WhatsApp number
  window.open("https://api.whatsapp.com/send?phone=your_whatsapp_number", "_blank");
});
