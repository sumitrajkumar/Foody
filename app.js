const button = document.getElementById("sumit");
button.addEventListener('click', () => {
    document.body.style.overflow = "hidden";

    //!    make a main div for flex
    let div = document.createElement("div");
    div.setAttribute("id", "mydiv");
    //!   form div
    let div1 = document.createElement("form");
    div1.setAttribute("id", "mydiv1");
    //!   div inside form

    let div2 = document.createElement("div");
    div2.setAttribute("id", "mydiv2");
    //! inside div2 make two div 
    let signin = document.createElement("div");
    signin.setAttribute("id", "signin");
    signin.textContent = "Sign in";
    let cancel = document.createElement("div");
    cancel.setAttribute("id", "cancel");
    cancel.textContent = "X";

    //? append both div 

    div2.appendChild(signin);
    div2.appendChild(cancel);
    div1.appendChild(div2);
    //! make div for input elements

    let name = document.createElement("input");
    name.placeholder = "Full Name";
    name.required = true;
    div1.appendChild(name);
    name.setAttribute("id", "name");

    let email = document.createElement("input");
    email.placeholder = "Email";
    email.required = true;
    div1.appendChild(email);
    email.setAttribute("id", "email");

    //!  make div for policies

    let div3 = document.createElement("div");
    div3.setAttribute("id", "mydiv3");
    //! inside div2 make two div 
    let check = document.createElement("input");
    check.type = 'checkbox';
    check.setAttribute("id", "check");

    let terms = document.createElement("div");
    terms.setAttribute("id", "terms");
    terms.textContent = "I agree to Foody's Terms Of Service, Privacy Policy and Content Policies";

    //? append to div3
    div3.appendChild(check);
    div3.appendChild(terms);
    div1.appendChild(div3);


    //! create button
    let createbutton = document.createElement("button");
    createbutton.setAttribute("id", "createbutton");
    createbutton.textContent = "Create Account";
    div1.appendChild(createbutton);

    //! last content

    let signup = document.createElement("div");
    signup.setAttribute("id", "signup");
    signup.textContent = "Already have an account? Log in";
    div1.appendChild(signup);



    div.appendChild(div1);
    hero.appendChild(div);


    const cancelbuttonn = document.getElementById("cancel");
    console.log(cancelbuttonn);
    cancelbuttonn.addEventListener('click', () => {
        document.body.style.overflowY = "visible";
        div.remove();
    });
});

let ele = document.querySelectorAll(".add-to-cart");

let s = 0;

document.querySelectorAll('.add-to-cart').forEach(function (element) {
    element.addEventListener('click', function (e) {
        required_id = e.target.id;


        var parentElement = document.getElementById(required_id).parentNode;
        console.log(parentElement);


        var previousSibling = parentElement.previousElementSibling;



        var paragraphElement = previousSibling.querySelector('p');


        var paragraphContent = paragraphElement.textContent;



        var nextSibling = paragraphElement.nextElementSibling.nextElementSibling;

        console.log(nextSibling.textContent);

        s = s + parseInt(nextSibling.textContent);
        console.log(s);

        let name = paragraphContent;
        let price = nextSibling.textContent;


        //! for cart items

        localStorage.setItem(name, price, s);




    });
})
window.onload = function () {
    //! Clear the content of product and unit divs
    localStorage.clear();
};

const addToCartButtons = document.getElementsByClassName("add-to-cart");
let cnt = 0;
const finalCartDivs = [];
Array.from(addToCartButtons).forEach(button => {
    button.addEventListener("click", () => {
        cnt++;


        const finalCartDiv = document.createElement("div");
        finalCartDiv.setAttribute("id", "finalCartDiv");

        const mainCartDiv = document.createElement("div");
        mainCartDiv.setAttribute("id", "mainCartDiv");


        const cartTextOneDisplay = document.createElement("p");
        cartTextOneDisplay.textContent = "Congratulation! Your delivery is free";
        cartTextOneDisplay.setAttribute("id", "cartOneDisplay");


        const cartTextTwoDisplay = document.createElement("p");
        cartTextTwoDisplay.textContent = cnt + " items added";
        cartTextTwoDisplay.setAttribute("id", "cartTwoDisplay");

        let cancel = document.createElement("div");
        cancel.setAttribute("id", "cancel");
        cancel.setAttribute("class", "cancelButton");
        cancel.textContent = "X";

        cancel.addEventListener('click', () => {
            finalCartDivs.forEach(div => {
                div.remove();
            });
        });

        finalCartDiv.addEventListener('click', (e) => {
            if(e.target == cancel)
            {
                return ;
            }
            window.location.href = "cart.html";
        });

        mainCartDiv.appendChild(cartTextTwoDisplay);
        mainCartDiv.appendChild(cartTextOneDisplay);

        finalCartDiv.appendChild(mainCartDiv);
        finalCartDiv.appendChild(cancel);

        finalCartDivs.push(finalCartDiv);

        document.body.appendChild(finalCartDiv);



    });
});


