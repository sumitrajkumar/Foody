function displayLocalStorageItems() {
    if (localStorage.length > 0) {

        const productFirstChildText = product.firstElementChild.textContent;
        const unitFirstChildText = unit.firstElementChild.textContent;


        product.innerHTML = '';
        unit.innerHTML = '';


        const productFirstChild = document.createElement("div");
        productFirstChild.textContent = productFirstChildText;
        product.appendChild(productFirstChild);

        const unitFirstChild = document.createElement("div");
        unitFirstChild.textContent = unitFirstChildText;
        unit.appendChild(unitFirstChild);


        for (let i = 0; i < localStorage.length; i++) {

            const key = localStorage.key(i);

            const value = localStorage.getItem(key);

            if (value !== null) {

                var cartdiv = document.createElement("div");
                cartdiv.setAttribute("id", "cartdiv");
                cartdiv.textContent = key;

                var cartdiv1 = document.createElement("div");
                cartdiv1.setAttribute("id", "cartdiv1");
                cartdiv1.textContent = value;

              

                product.appendChild(cartdiv);
                unit.appendChild(cartdiv1);



            }

        }



        let quanitydiv = document.createElement("div");
        quanitydiv.setAttribute("id", "quantitydiv");
        let incbutton = document.createElement("button");
        incbutton.setAttribute("id", "incbutton");
        let decbutton = document.createElement("button");
        decbutton.setAttribute("id", "decbutton");
        let para = document.createElement("p");
        para.setAttribute("id", "para");
        incbutton.textContent = "+";
        para.textContent = 1;
        decbutton.textContent = "-";

        quanitydiv.appendChild(incbutton);
        quanitydiv.appendChild(para);
        quanitydiv.appendChild(decbutton);

        quantity.appendChild(quanitydiv);





        incbutton.addEventListener('click', () => {
            para.textContent = parseInt(para.textContent) + 1;
    
        })

        decbutton.addEventListener('click', () => {
            para.textContent = parseInt(para.textContent) - 1;
           
        })




    }
}


window.onload = function () {

    const productFirstChildText = product.firstElementChild.textContent;
    const unitFirstChildText = unit.firstElementChild.textContent;


    product.innerHTML = '';
    unit.innerHTML = '';


    const productFirstChild = document.createElement("div");
    productFirstChild.textContent = productFirstChildText;
    product.appendChild(productFirstChild);

    const unitFirstChild = document.createElement("div");
    unitFirstChild.textContent = unitFirstChildText;
    unit.appendChild(unitFirstChild);

    displayLocalStorageItems();
};

window.addEventListener('storage', function (event) {
    displayLocalStorageItems();
});

//!  for quanties



