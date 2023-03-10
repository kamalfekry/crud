var productContainer = [];
var pName = document.getElementById("productName");
var pCategory = document.getElementById("productCategory");
var pPrice = document.getElementById("productPrice");
var pDesc = document.getElementById("productDescription");



if (localStorage.getItem("products") != null) {
    productContainer = JSON.parse(localStorage.getItem("products"));
}

function addProduct() {
    var productObj = {
        name: pName.value,
        category: pCategory.value,
        price: pPrice.value,
        desc: pDesc.value,
    };
    productContainer.push(productObj);
    localStorage.setItem("products", JSON.stringify(productContainer));
    showProduct();
    clearInputs();
}

function showProduct() {
    var cartona = ``;
    for (i = 0; i < productContainer.length; i++) {
        cartona += `
        <tr>
             <td>${i}</td>
             <td>${productContainer[i].name}</td>
             <td>${productContainer[i].category}</td>
             <td>${productContainer[i].price}</td>
             <td>${productContainer[i].desc}</td>
             <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
             <td><button class="btn btn-success btn-sm">Update</button></td>
         </tr>  
        `;
    }
    document.getElementById("demo").innerHTML = cartona;
}
showProduct();

function clearInputs() {
    pName.value = " ";
    pCategory.value = " ";
    pPrice.value = "";
    pDesc.value = "";
}

function deleteProduct(Index) {
    productContainer.splice(Index, 1);
    localStorage.setItem("products", JSON.stringify(productContainer));
    showProduct();
}

function search() {
    var searchInput = document.getElementById('searchInput').value
    var box2 = ` `
    for (i = 0; i < productContainer.length; i++) {
        if (productContainer[i].pName.includes(searchInput)) {
            box2 += `
            <tr>
                 <td>${i}</td>
                 <td>${productContainer[i].name}</td>
                 <td>${productContainer[i].category}</td>
                 <td>${productContainer[i].price}</td>
                 <td>${productContainer[i].desc}</td>
                 <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
                 <td><button class="btn btn-success btn-sm">Update</button></td>
             </tr>  
            `;
        }
    }
}









// var products = [
//     {name:'tv', category:'apple', price:4000, desc:'lorem lorem ipsum dolor sit'},
//     {name:'watch', category:'apple', price:4230, desc:'lorem lorem ipsum dolor sit'},
//     {name:'phone', category:'apple', price:1220, desc:'lorem lorem ipsum dolor sit'},
//     {name:'laptop', category:'apple', price:3500, desc:'lorem lorem ipsum dolor sit'},
//     {name:'tablet', category:'apple', price:7000, desc:'lorem lorem ipsum dolor sit'},
// ]
// var cartona = ``
// for(i=0;i<products.length; i++) {
//     cartona+= `
//     <tr>
//     <td>${products[i].name}</td>
//     <td>${products[i].category}</td>
//     <td>${products[i].price}</td>
//     <td>${products[i].desc}</td>
// </tr>
//     `
// }
// document.getElementById('demo').innerHTML = cartona;

// var img=document.getElementById('img')
// document.addEventListener('mousemove',changeColor)

// function changeColor(e) {
//   img.style.left=e.clientX
//   img.style.top=e.clientY
// }