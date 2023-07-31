// Make a POST request to any server URL your instructor will assign to you. If the request was successful, display a unique successful message to the request status div, and change the background colour from grey to green. If the request failed display a unique failure message in the status div and change the background colour to red.


        function requestStatus(success) {   //created a function called requestStatus with a parameter called success
            const statusDiv = document.getElementById('requestStatus'); //got the html with id requestStatus
            if (success) {  //using the conditional statement by called the parameter in my function
                statusDiv.innerText = 'Status: Request successful!'; //if condition is true change the innertext to the message above and change the background color
                statusDiv.style.backgroundColor = 'green';
            } else {   //else condition is not met change the text to the statment below with a red backgrowund color
                statusDiv.textContent = 'Status: Request failed!';
                statusDiv.style.backgroundColor = 'red';
            }
        }

        async function postRequest() {  //i used the async/await method replacing the method i used in my first task
            const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'; //used the api as given by me instructor and assigned it to the variable url

            try {  //using the try method which works specifically for the async/await function
                const response = await fetch(url, { //i fetched the api link but in this case the url conatains the api link
                    method: 'POST',  //applying the POST method
                });

                if (response.ok) {  //used the ok element and applied it to the response variable
                    requestStatus(true); //called the first function with its conditional statement
                } else {  //
                    requestStatus(false); ////called the first function with its conditional statement
                }
            } catch (error) {  //catch the error
                requestStatus(false);
            }
        }
        postRequest();  //invoked the function

        //BOOM!! 
 

