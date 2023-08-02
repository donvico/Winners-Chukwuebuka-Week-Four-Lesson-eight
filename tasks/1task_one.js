// Make a simple AJAX request ( fetch API) to any server your instructor will assign to you. Inspect the response and display the response status to a “response” div. If the request was successful, display “Successful AJAX request”, else display “Request failed, check internet connectivity.
// Write something


    const parentResponse = document.getElementById('response')  //got the id response from the html file and assigned it to the variable parentRepsonse
    const fetchApi = fetch('https://www.themealdb.com/api/json/v1/1/categories.php')  //applied the fetch method and saved it in the variable fetchApi
    .then(response =>{ response.json();  //converted it to json format
parentResponse.innerText = '“Successful AJAX request”'; //change
parentResponse.style.display = 'flex'; //played around the dom styling
parentResponse.style.justifyContent = 'center'; //justified it to the center
parentResponse.style.fontSize = '50px'; // changed the font size
parentResponse.style.color = 'green' //and the text color to green

})
.catch( error => {  //applied the catch for error request
    parentResponse.innerText = '“Request failed, check internet connectivity."'; //changed the innertext 
    parentResponse.style.color = 'red'; //changed the text color
    parentResponse.style.fontSize = '50px' //changed the font size to 50
    
})



