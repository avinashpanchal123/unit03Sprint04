import navbar from "../components/navbar.js";

let nav_div = document.getElementById("nav_div");

nav_div.innerHTML = navbar()

let res = fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

.then((res)=>{
    return res.json()
})

.then((res)=>{
    console.log(res.categories);

    let data = res.categories

    append(data)
})

.catch((e)=>{
    console.log(e);
})

let dish_container = document.getElementById("dish_container")



function append(data){

    data.forEach((dish) => {
        let dish_div = document.createElement("div");

        let img = document.createElement("img");

        let mrp = +(dish.idCategory) * 100

        let price = document.createElement("p");

        price.textContent = `price : ${mrp}`

        let name = document.createElement("p")

         name.textContent = dish.strCategory;

        img.src = dish.strCategoryThumb;

        dish_div.append(img,name,price);

        dish_container.append(dish_div)
    });



}




