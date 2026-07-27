// elements

const sobresito = document.getElementById("envelope-container");
const cartita = document.getElementById("cartita");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const titulo = document.getElementById("titulo-carta");
const un1Image = document.getElementById("un1mimido");
const botones = document.getElementById("botones-carta");
const textoFinal = document.getElementById("textoFinal");

// pa q el envelope este funque

sobresito.addEventListener("click", () => {
    sobresito.style.display = "none";
    cartita.style.display = "flex";


    setTimeout( () => {
        document.querySelector(".ventana-carta").classList.add("abrir");
    }, 50);

});

const moverBotonNo = () => {
    const min = 200;
    const max = 300;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
};

noBtn.addEventListener("mouseover", moverBotonNo);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita que se registre el clic en celulares
    moverBotonNo();
});


yesBtn.addEventListener("click", () => {
    titulo.textContent=  "YIPPIEEE !!" ;

    un1Image.src="un1yipiee.gif";

    document.querySelector(".ventana-carta").classList.add("final");
    
    botones.style.display = "none";

    textoFinal.style.display = "block";

});