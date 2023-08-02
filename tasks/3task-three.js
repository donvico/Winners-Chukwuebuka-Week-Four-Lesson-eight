const url = "https://www.themealdb.com/api/json/v1/1/categories.php"; //assigned the api to url

let previousBtn = document.getElementById("previousBtn");
let nextBtn = document.getElementById("nextBtn");

let currentPage = 1,
    itemsPerPage = 3,
    categoriesData,
    categoriesDataLength;

async function getApi() {
    const response = await fetch(url);
    const data = await response.json();
    categoriesData = data.categories;
    categoriesDataLength = categoriesData.length
}

async function itemsToShow() {
    await getApi()

    let food = document.getElementById("food");
    food.innerHTML = "";

    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let categoreiesToShow = categoriesData.slice(startIndex, endIndex);

    categoreiesToShow.forEach((category) => {
        let elementId = document.createElement("p"),
            img = document.createElement("img"),
            title = document.createElement("h3"),
            desc = document.createElement("p");

        elementId.textContent = category.idCategory;
        img.src = category.strCategoryThumb;
        title.textContent = category.strCategory;
        desc.textContent = category.strCategoryDescription;

        food.append(elementId);
        food.append(img);
        food.append(title);
        food.append(desc);
    })
    hideBtns();
}

itemsToShow();


nextBtn.addEventListener("click", () => {
    currentPage++;
    itemsToShow();
});

prevBtn.addEventListener("click", () => {
    currentPage--;
    itemsToShow();
});

function hideBtns() {
    if (currentPage === 1) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "inline-block";
    }
    let totalNumberOfPages = Math.ceil(categoriesDataLength / itemsPerPage);

    if (currentPage === totalNumberOfPages) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "initial";
}
}
