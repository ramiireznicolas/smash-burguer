const clasica = document.getElementById("clasica");
const modalClasica = document.getElementById("modalClasica");
const cerrarClasica = document.getElementById("cerrarClasica");
clasica.addEventListener('click', () => {
    modalClasica.classList.add('open_close');
});
cerrarClasica.addEventListener('click', () => {
    modalClasica.classList.remove('open_close');
});


const chesse = document.getElementById("chesse");
const modalChesse = document.getElementById("modalChesse");
const cerrarChesse = document.getElementById("cerrarChesse");
chesse.addEventListener('click', () => {
    modalChesse.classList.add('open_close');
});
cerrarChesse.addEventListener('click', () => {
    modalChesse.classList.remove('open_close');
});


const mega = document.getElementById("mega");
const modalMega = document.getElementById("modalMega");
const cerrarMega = document.getElementById("cerrarMega");
mega.addEventListener('click', () => {
    modalMega.classList.add('open_close');
});
cerrarMega.addEventListener('click', () => {
    modalMega.classList.remove('open_close');
});


const premium = document.getElementById("premium");
const modalPremium = document.getElementById("modalPremium");
const cerrarPremium = document.getElementById("cerrarPremium");
premium.addEventListener('click', () => {
    modalPremium.classList.add('open_close');
});
cerrarPremium.addEventListener('click', () => {
    modalPremium.classList.remove('open_close');
});


const triple = document.getElementById("triple");
const modalTriple = document.getElementById("modalTriple");
const cerrarTriple = document.getElementById("cerrarTriple");
triple.addEventListener('click', () => {
    modalTriple.classList.add('open_close');
});
cerrarTriple.addEventListener('click', () => {
    modalTriple.classList.remove('open_close');
});