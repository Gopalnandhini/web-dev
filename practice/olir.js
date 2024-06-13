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