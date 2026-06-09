


let elemntselect =document.querySelector(".elements");


let products=[
    {
        id:1,
        name:"Skin radiance collagen",
        desc:"skin care",
        stock:10,
        price:18,
        qty:0
    },
    {
        id:2,
        name:"Protein up for women",
        desc:"Protein",
        stock:8,
        price:24,
        qty:0
    },
    {
        id:3,
        name:"HK vitals vitamin D3",
        desc:"Vitamins",
        stock:9,
        price:32,
        qty:0
    },
    {
        id:4,
        name:"Calcium magnesium + zinc",
        desc:"Health",
        stock:10,
        price:3,
        qty:0
    },
    {
        id:5,
        name:"Muscleblaze Performance whey",
        desc:"Whey protein",
        stock:5,
        price:13,
        qty:0
    },
    {
        id:6,
        name:"MB creatine Monohydrate",
        desc:"Creatine",
        stock:6,
        price:18,
        qty:0
    },
    {
        id:7,
        name:"HK vitals collagen",
        desc:"Skin care",
        stock:7,
        price:24,
        qty:0
    },
    {
        id:8,
        name:"MB High protein Oats",
        desc:"Oats",
        stock:8,
        price:32,
        qty:0
    },
    
]




function displayproduct()
{

        products.forEach((product)=>{
               elemntselect.innerHTML+=` <div class="col">
               <div class="card">
               <div class="card-body">
                 
                 <img src="images/healthkart/${product.id}.webp" height="140" width="140" class="img-fluid " " >
                 <div class="d-flex justify-content-center d-none">
                   <div class="p-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                     <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                     <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                   </svg>
                   </div>
                   <div class="p-2"><i class="fa-regular fa-heart"></i></div>
                   <div class="p-2"><i class="fa-solid fa-arrow-right-arrow-left"></i></div>
                 </div>
                 
                 <p class="card-text text-muted " style="text-align:center">${product.desc}</p>
                 <a href="details.html"><p style="font-size:15px; color:black; text-align:center">${product.name}</p></a>
                 <div class="d-flex" style="font-size:12px;">
                 <i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star-half-stroke text-warning"></i>
                 <p class="text-muted">4.5(149)</p>         
                 </div>
                 <div class="d-flex" style="font-size:12px; ">
                   <p >$${product.price}</p><p class="text-muted flex-grow-1">$24</p> 
                   <button type="button" class="btn btn-sm  btn-success" onclick="addtocart(${product.id})">+ Add</button>        
                 </div>
               </div>
             </div>
             </div>    
         </div>`
              
        });



      
                
}

displayproduct();




let signup = document.querySelector("#b1");

let nameInput = document.querySelector("#exampleFormControlText1");
let emailInput = document.querySelector("#exampleFormControlInput1");
let passwordInput = document.querySelector("#inputPassword");

signup.addEventListener("click", () => {
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "") {
        alert("Please enter your name");
        nameInput.focus();
    }
    else if (name.length < 3) {
        alert("Name must contain at least 3 characters");
        nameInput.focus();
    }
    else if (email === "") {
        alert("Please enter your email address");
        emailInput.focus();
    }
    else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        emailInput.focus();
    }
    else if (password === "") {
        alert("Please enter your password");
        passwordInput.focus();
    }
    else if (password.length < 8) {
        alert("Password must contain at least 8 characters");
        passwordInput.focus();
    }
    else {
        alert("Sign Up Successfully");

        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
    }
});
 



let cart=[];


function addtocart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      console.log('Product added to cart:', product);
      alert(`Added ${product.name} to cart!`);
      updateCart();
    } else {
      console.error('Product not found:', productId);
    }
  }


function updateCart() {
    const cartContainer = document.querySelector('.offcanvas-body');
    const subtotalContainer = document.querySelector('.subtotal');
    cartContainer.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
        <div class="d-flex justify-content-between align-items-center">
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <button class="btn btn-light btn-sm" onclick="Addition(${index})">+</button>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
        </div>`;
        subtotal += item.price;
       
    

    });

    subtotalContainer.innerHTML = `<p>Subtotal: $${subtotal.toFixed(2)}</p>`;
}
function Addition(index){
  cart.add(index+1);
  // updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
