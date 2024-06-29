//Dreamland v0.0.22 required

function Nav(){
    return html`
    <div>
        <a href="index.html"><button class="button">Home</button></a>
        <a href="ESDLang.html"><button class="button">ESDLang</button></a>
        <a href="stronge.html"><button class="button">Stronge code editor</button></a>
        <a href="padms.html"><button class="button">Padms</button></a>
        <a href="CS.html"><button class="button">CS products</button></a>
        <a href="allversiondownloads.html"><button class="button">All our downloads</button></a>
    </div>
    `
}

window.addEventListener('load', () => {
    document.getElementById("nav").appendChild(h(Nav));
});