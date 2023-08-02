// Make a GET request to any news URL your instructor will assign to you. Use pagination to display only 10 of the news feed for each click on the “next” button. Make the “previous” button to be invisible until you have a previous news feed to navigate back to.  Make the “next” button invisible when you've come to the end of the pagination.

const url = "https://www.themealdb.com/api/json/v1/1/categories.php"; //assigned the api to url

let previousBtn = document.getElementById("previousBtn");
let nextBtn = document.getElementById("nextBtn");

let currentPage = 1,
    itemsPerPage = 2,
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

    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let showcategories = categoriesData.slice(startIndex, endIndex);

    showcategories .forEach((category) => {
        let elementId = document.createElement("p"),
            img = document.createElement("img"),
            title = document.createElement("h3"),
            description = document.createElement("p");

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
