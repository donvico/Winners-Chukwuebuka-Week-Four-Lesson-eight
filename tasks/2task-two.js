const likes = 
    {
        "item_id": "item1",
        "likes": 1
    }

const requestStatus = document.getElementById('requestStatus')
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iPg3op61YSuQ0fNaz7UX/likes'

function updateStatus() {
    fetch(url, {
    method:'POST',
    headers: {
        "Content-Type": 'application/json',
    },
    body: JSON.stringify(likes)
    })
    .then(response => {
        if(response.ok) {
            requestStatus.innerText = 'Status: Request successful!'
            requestStatus.style.backgroundColor = 'green'
        }
        else{
            requestStatus.innerText = 'Status: Request failed!'
            requestStatus.style.backgroundColor = 'red'
        }
        
    })
    .catch(error => {
        requestStatus.innerText = 'Status: Request failed!'
        requestStatus.style.backgroundColor = 'red'
    })
}
updateStatus()