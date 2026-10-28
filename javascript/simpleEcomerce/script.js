let products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
    { id: 2, name: "Headphones", price: 200, category: "Electronics", stock: 15 },
    { id: 3, name: "T-shirt", price: 20, category: "Apparel", stock: 0 },
];

renderProdsListElmt = document.querySelector("#renderProdsList")
prodNameElmt = document.querySelector("#prodName")
prodCategoryElmt = document.querySelector("#prodCategory")
prodPriceElmt = document.querySelector("#prodPrice")
prodStockElmt = document.querySelector("#prodStock")
btnAddEditElmt = document.querySelector("#btnAddEdit")
renderCartElmt = document.querySelector("#renderCart")
cartAmtElmt = document.querySelector("#cartAmt")

let cart = []

// {prodID:1,prodName:'laptop', price:1000, quantity:1}


function saveProdToLocal(p) {
    localStorage.setItem("b101", JSON.stringify(p))
}

function getProdFromLocal() {
    return JSON.parse(localStorage.getItem("b101"))
}


function renderProducts(prods) {
    renderProdsListElmt.innerHTML = prods.map((pro, i) => `
                <div class="col">
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${pro.name}</h5>
                        <p class="card-text">${pro.category}</p>
                        <p>Price : $ ${pro.price}</p>
                        <p >${pro.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                        <button href="#" class="btn btn-outline-danger" 
                        onclick="editProdInfo(${pro.id})"
                        >Edit</button>
                        <button href="#" class="btn btn-outline-danger" 
                        onclick="deleteProduct(${pro.id})"
                        >Delete</button>
                        <button href="#" class="btn btn-danger" onclick="addToCart(${pro.id})">Add to Cart</button>


                    </div>
                    </div>
                </div>
`).join('')
}

// add new prod 
function addOrEditProduct(ID) {
    console.log("click", Date.now(), ID)
    prodFromLocal = getProdFromLocal()

    updateProd = prodFromLocal.find((p) => p.id == ID)
    console.log(updateProd, "updateProd")

    if (!updateProd) {
        newProduct = {
            id: Date.now(),
            name: prodNameElmt.value,
            category: prodCategoryElmt.value,
            price: prodPriceElmt.value,
            stock: prodStockElmt.value
        }
        prodFromLocal.push(newProduct)
    } else {
        index = prodFromLocal.findIndex((p) => p.id == ID)

    }


    saveProdToLocal(prodFromLocal)
    renderProducts(prodFromLocal)



    // prodNameElmt.value = ''
    // prodCategoryElmt.value = ''
    // prodPriceElmt.value = ''
    // prodStockElmt.value = ''
}

function editProdInfo(ID) {
    btnAddEditElmt.textContent = "Update Product"

    prodFromLocal = getProdFromLocal()

    updateProd = prodFromLocal.find((p) => p.id == ID)
    console.log(updateProd, "updateProd")
    index = prodFromLocal.findIndex((p) => p.id == ID)
    console.log(index)
    if (index == -1) {
        alert("Product not Found")
    }
    console.log(prodNameElmt)
    console.log(updateProd)
    prodNameElmt.value = updateProd.name
    prodCategoryElmt.value = updateProd.category
    prodPriceElmt.value = updateProd.price
    prodStockElmt.value = updateProd.stock



}

if(btnAddEditElmt){
btnAddEditElmt.addEventListener('click', addOrEditProduct)
}

function deleteProduct(ID) {
    prodFromLocal = getProdFromLocal()

    index = prodFromLocal.findIndex((p) => p.id == ID)
    if (index == -1) {
        alert("Product not Found")
    }

    prodFromLocal.splice(index, 1)

    saveProdToLocal(prodFromLocal)
    renderProducts(prodFromLocal)

}

function addToCart(ID) {
    prodFromLocal = getProdFromLocal()

    prodForCart = prodFromLocal.find((p => p.id == ID))

    if (prodForCart.stock > 0) {
        cartProdFromLocal = getCartFromLocal()
        isAvailable = cartProdFromLocal.find((p) => p.prodID == ID)

        if (!isAvailable) {
            cartProd = {
                prodID: prodForCart.id,
                prodName: prodForCart.name,
                prodPrice: prodForCart.price,
                quantity: 1
            }
            cartProdFromLocal.push(cartProd)
            saveCartToLocal(cartProdFromLocal)
        } else {
            indexForQuantity = cartProdFromLocal.findIndex(p => p.prodID == ID)
            if (indexForQuantity == -1) {
                alert("product not found")
            } else {
                cartProdFromLocal[indexForQuantity].quantity += 1
                saveCartToLocal(cartProdFromLocal)

            }
        }
        document.querySelector("#cartLength").textContent = cartProdFromLocal.length
        console.log(cart)

    } else {
        alert("Out of Stock")
    }
}



function saveCartToLocal(c) {
    localStorage.setItem('B101Cart', JSON.stringify(c))
}
function getCartFromLocal() {
    return JSON.parse(localStorage.getItem("B101Cart"))
}

function renderCart() {
    cartFrmLocal = getCartFromLocal()
    if(cartFrmLocal.length > 0){
    renderCartElmt.innerHTML = cartFrmLocal.map((p,i) => `
            <tr>
                <th scope="col">${i+1}</th>
                <th scope="col">${p.prodName}</th>
                <th scope="col">${p.prodPrice}</th>
                <th scope="col">
                <button onclick="decreaseQuantity(${p.prodID})">-</button>
                ${p.quantity}
                <button onclick="increaseQuantity(${p.prodID})">+</button>

                </th>
            </tr>
        `)
    
    let totalMRP = cartFrmLocal.reduce((sum, p,i)=> {
       return p.prodPrice * p.quantity
    },0)
    let dis= 20
    let disOnMRP = totalMRP * 20 /100
    let platformFee = 100
    let deliveryCharges = 100
    let totalAmout = (totalMRP-disOnMRP) + platformFee + deliveryCharges
    cartAmtElmt.innerHTML = `
    <p>Total MRP :$ ${totalMRP}</p>
    <p>Discount On MRP : - $ ${disOnMRP}</p>
    <p>Platform Fee : $ ${platformFee}</p>
    <hr />
    <p>Total AMOUNT : $ ${totalAmout}</p>

    `
    }else{
        renderCartElmt.innerHTML = `<p>Your Cart is Empty</p>
            <a href="./index.html" class="btn btn-danger">SHOP NOW</a>
        `
        cartAmtElmt.innerHTML = ''
    }
}

function increaseQuantity(ID){
    cartProdFromLocal = getCartFromLocal()
    isAvailable = cartProdFromLocal.find((p) => p.prodID == ID)
    indexForQuantity = cartProdFromLocal.findIndex(p => p.prodID == ID)
    cartProdFromLocal[indexForQuantity].quantity += 1
    saveCartToLocal(cartProdFromLocal)
    renderCart()
}

function decreaseQuantity(ID){
     cartProdFromLocal = getCartFromLocal()
    isAvailable = cartProdFromLocal.find((p) => p.prodID == ID)
    indexForQuantity = cartProdFromLocal.findIndex(p => p.prodID == ID)
    if(isAvailable.quantity > 1){
    cartProdFromLocal[indexForQuantity].quantity -= 1
    saveCartToLocal(cartProdFromLocal)
    renderCart()
    }else{
        cartProdFromLocal.splice(indexForQuantity, 1)
         saveCartToLocal(cartProdFromLocal)
        renderCart()


    }
}
// const name = "Wisdom Sprouts"
// localStorage.setItem('Training' , name)
// tName = localStorage.getItem('Training')
// console.log(typeof tName)
// const numArr = [1,2,3,4,5,6,7]
// localStorage.setItem('numA', JSON.stringify(numArr))
// numFromLocal =JSON.parse(localStorage.getItem("numA"))
// console.log(typeof numFromLocal)

window.addEventListener('DOMContentLoaded', () => {


    prodFromLocal = getProdFromLocal()
    if (!prodFromLocal || prodFromLocal.length == 0) {
        saveProdToLocal(products)
    }
    if(renderProdsListElmt){
    renderProducts(prodFromLocal)
    }
    prodOfCart = getCartFromLocal()
    if (!prodOfCart || prodOfCart.length == 0) {
        saveCartToLocal(cart)
    }
    if(renderCartElmt){
    renderCart()
    }
    document.querySelector("#cartLength").textContent = prodOfCart.length
})
