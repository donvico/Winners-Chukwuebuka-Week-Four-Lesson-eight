// Make a simple AJAX request ( fetch API) to any server your instructor will assign to you. Inspect the response and display the response status to a “response” div. If the request was successful, display “Successful AJAX request”, else display “Request failed, check internet connectivity.
// Write something

function task1 (){

    const parentResponse = document.getElementById('response')
    const fetchApi = fetch('https://www.themealdb.com/api/json/v1/1/categories.php')

    .then(response =>{ response.json();
parentResponse.innerText = '“Successful AJAX request”';
parentResponse.style.display = 'flex';
parentResponse.style.justifyContent = 'center';
parentResponse.style.fontSize = '50px';
parentResponse.style.color = 'green'
// parentResponse.style.placeContent = 'center'
})
.catch( error => {
    parentResponse.innerText = '“Request failed, check internet connectivity."';
    parentResponse.style.color = 'red';
    parentResponse.style.fontSize = '50px'
    
})
}
task1()