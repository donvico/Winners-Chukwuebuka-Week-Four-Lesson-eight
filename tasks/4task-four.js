// Make a GET request to a food recipe server and use the data to develop a single page food recipe web page that would display the food picture, and recipe data, and apply pagination
// Make a GET request to any news URL your instructor will assign to you. Use pagination to display only 10 of the news feed for each click on the “next” button. Make the “previous” button to be invisible until you have a previous news feed to navigate back to.  Make the “next” button invisible when you've come to the end of the pagination.



const url = "https://www.themealdb.com/api/json/v1/1/categories.php"; //assigned the api to url

let previousBtn = document.getElementById("previousBtn");
previousBtn.style.backgroundColor = 'red'
previousBtn.style.color = 'white'
let nextBtn = document.getElementById("nextBtn");
nextBtn.style.backgroundColor = 'blue'
nextBtn.style.color = 'white'



let currentPage = 1,
    itemsPerPage = 4,
    categoriesData,
    categoriesDataLength;

async function getApi() {
    const response = await fetch(url);
    const data = await response.json();
    categoriesData = data.categories;
    categoriesDataLength = categoriesData.length
}

async function displayItems() {
    await getApi()

    let food = document.getElementById("food");
    food.innerHTML = "";
    food.style.display = 'grid'
    food.style.placeItems = 'center'
    
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let showcategories = categoriesData.slice(startIndex, endIndex);
    
    showcategories .forEach((category) => {
        let elementId = document.createElement("p"),
        img = document.createElement("img"),
        title = document.createElement("h3"),
        description = document.createElement("p");
        img.style.width = '500px'
        // strCategoryDescription.style.fontsize = '200em'
        
        elementId.innerText = category.idCategory;
        img.src = category.strCategoryThumb;
        title.innerText = category.strCategory;
        description.innerText = category.strCategoryDescription;
        
        food.append(elementId);
        food.append(img);
        food.append(title);
        food.append(description);
    })
}
displayItems();



nextBtn.addEventListener("click", () => {
    currentPage++;
    displayItems();
});

previousBtn.addEventListener("click", () => {
    currentPage--;
    displayItems();
});

function hideBtns() {
    if (currentPage === 1) {
        previousBtn.style.display = "none";
    } else {
        previousBtn.style.display = "inline-block";
    }
    let totalNumberOfPages = Math.ceil(categoriesDataLength / itemsPerPage);

    if (currentPage === totalNumberOfPages) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "initial";
    }
}
// hideBtns(); 
