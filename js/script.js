document.querySelector(".hamburger-menu").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qty").addEventListener("change", updatePrice);
document.querySelector("#js").addEventListener("change", updatePrice);
document.querySelector("#layout-yes").addEventListener("change", updatePrice);
document.querySelector("#layout-no").addEventListener("change", updatePrice);
document.querySelector("#time").addEventListener("change", function() {
    const time = document.querySelector("#time").value;
    document.querySelector("label[for=time]").innerHTML = `Prazo: ${time} semana(s)`;
    updatePrice()
});

function updatePrice() {
    const qty = document.querySelector("#qty").value;
    const js = document.querySelector("#js").checked;
    const layoutYes = document.querySelector("#layout-yes").checked;
    const time = document.querySelector("#time").value;

    let price = qty * 100;
    if (js) price *= 1.1;
    if (layoutYes) price += 500;
    let urgencyTax = 1 - time * 0.1;
    price *= 1 + urgencyTax;

    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`;
}