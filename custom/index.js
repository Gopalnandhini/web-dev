class SpecialHeader extends HTMLElement{
     connectedCallback(){
        this.innerHTML = 
         `<p style="display: flex; justify-content: space-around; background-color: darkblue;  padding: 10px; ">
              <a href="index.html" style="color: beige;text-decoration: none;">HOME</a>
              <a href="about.html" style="color: beige;text-decoration: none;">ABOUT US</a>
              <a href="contact.html" style="color: beige;text-decoration: none;">CONTACT</a>
          </p>`
     }
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
       this.innerHTML = 
    `<p style="display: flex; justify-content: space-around; background-color: darkblue; padding: 10px; color: beige;">@ Olir desings.</p>`
        
    }
}

customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)