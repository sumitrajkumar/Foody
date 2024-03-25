function displayLocalStorageItems() {
    if (localStorage.length == 0) {
        let emptydiv = document.createElement("div");
        emptydiv.setAttribute("id", "emptydiv");
        emptydiv.textContent = "Cart is Empty";
        newnav.appendChild(emptydiv);
        document.getElementById("final-box").style.display = "none";
    }
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




        // let quanitydiv = document.createElement("div");
        // quanitydiv.setAttribute("id", "quantitydiv");
        // let incbutton = document.createElement("button");
        // incbutton.setAttribute("id", "incbutton");
        // let decbutton = document.createElement("button");
        // decbutton.setAttribute("id", "decbutton");
        // let para = document.createElement("p");
        // para.setAttribute("id", "para");
        // incbutton.textContent = "+";
        // para.textContent = 1;
        // decbutton.textContent = "-";

        // quanitydiv.appendChild(incbutton);
        // quanitydiv.appendChild(para);
        // quanitydiv.appendChild(decbutton);





        for (let i = 0; i < localStorage.length; i++) {

            const key = localStorage.key(i);

            const value = localStorage.getItem(key);

            if (value !== null) {

                var cartdiv = document.createElement("div");
                cartdiv.setAttribute("id", "cartdiv");
                cartdiv.textContent = key;

                var cartdiv1 = document.createElement("div");
                cartdiv1.setAttribute("id", "cartdiv1");
                cartdiv1.setAttribute("class", "value");
                cartdiv1.textContent = value;



                product.appendChild(cartdiv);
                unit.appendChild(cartdiv1);


            }

        }








        // incbutton.addEventListener('click', () => {
        //     para.textContent = parseInt(para.textContent) + 1;

        // })

        // decbutton.addEventListener('click', () => {
        //     para.textContent = parseInt(para.textContent) - 1;

        // })




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

const button = document.getElementById("location-button");
function getLocation(position) {
    getAddressFromLocation(position.coords.latitude, position.coords.longitude);
}

function failedToGet() {
    console.log("There was some issue.");
}

button.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(getLocation, failedToGet);
    
    if(cnt==0)
    {
        extractText();
    }

});

function getAddressFromLocation(latitude, longitude) {
    // Constructing the URL for the reverse geocoding API request
    var apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    // Making a request to the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extracting the address from the API response
            var address = data.display_name;
            console.log(address);
        })
        .catch(error => {
            console.error('Error fetching location:', error);
        });
}
let s=0,cnt=0;
function extractText() {
    let elementsWithValueClass = document.getElementsByClassName("value");
    for (let i = 0; i < elementsWithValueClass.length; i++) {
        let element = elementsWithValueClass[i];
        s=s+parseInt(element.textContent);
    }
    

    document.getElementById("order-subtotal").textContent = "$"+s;
    if(s>=28)
    {
        document.getElementById("after-discount").textContent ="$"+( parseInt(s)-28);
    }
    else{
        document.getElementById("after-discount").textContent = 0;
    }
    cnt++;


}
function lastClick(){
    alert("your ordered has been placed");
}

  





