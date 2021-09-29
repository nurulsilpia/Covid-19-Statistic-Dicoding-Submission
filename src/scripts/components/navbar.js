class Navbar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<nav class="navbar justify-content-center p-3">
                                <h1 class="text-light">COVID-<span class="text-danger">19</span> </h1>
                        </nav>`;
    }
}

customElements.define('nav-bar',Navbar);