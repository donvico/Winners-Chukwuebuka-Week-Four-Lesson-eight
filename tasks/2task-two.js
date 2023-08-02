// Make a POST request to any server URL your instructor will assign to you. If the request was successful, display a unique successful message to the request status div, and change the background colour from grey to green. If the request failed display a unique failure message in the status div and change the background colour to red.


const likes =                   //initiated the like from the api
    {
        "item_id": "item1",
        "likes": 1
    }

const requestStatus = document.getElementById('requestStatus')  //got the div id from the html document and assigned it to requeststatus
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iPg3op61YSuQ0fNaz7UX/likes'  //the api assigned to url


    fetch(url, {  //fetched the api link assigned to url, 
    method:'POST',  //am using a post method
    headers: {
        "Content-Type": 'application/json',
    },
    body: JSON.stringify(likes)  //converted likes to strings
    })
    .then(response => {   //used the .then to check for the connection status
        if(response.ok) {
            requestStatus.innerText = 'Status: Request successful!' //changed the innertext
            requestStatus.style.backgroundColor = 'green' //changed the background color to green
        }
        else{
            requestStatus.innerText = 'Status: Request failed!' 
            requestStatus.style.backgroundColor = 'red'
        }
        
    })
    .catch(error => {  //catched the error 
        requestStatus.innerText = 'Status: Request failed!'
        requestStatus.style.backgroundColor = 'red'
    })
