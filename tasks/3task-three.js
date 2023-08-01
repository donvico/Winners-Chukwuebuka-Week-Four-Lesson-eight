// // // function myname = (array,object){
// // //     object.name = {age:[...array]}
// // // }
// // // myname()
// // // console.log(myname);
// // let myObj = {
// //     name: "list of things to buy",
// //     list: ["groceries", "vegetables", "berries"],
// //     cost: 3900
// //     }

// //     let {name, ...rest} = myObj
// //     //the name with comma stands for the first index, and the rest of the properties are spread into the rest
// //     console.log(rest); //output will be { list: [ 'groceries', 'vegetables', 'berries' ], cost: 3900 }

//     let myArr = [
//         {name: 'list of things'},
//         [{
//             type: 'groceries',
//             cost: 3900,
//             isAvailable: true,
//             alternatives: ['beans', 'oil'],
//         }]
//     ]

//     let [,[{alternatives: [, kill]}]]= myArr
    
//     console.log(kill);
    let apiArray = []
    async function getApi () {
        const res = await fetch(url)
        const data = await res.json()
        apiArray.push(data)
    }

    let myBook = {
        title: 'things fall apart',
        author: "kenpachi",

    } // an object 

    function displayBooks ({title, author}) { //adding the properties of mybook and destructuting in the displaBooks function
        let parag1 = document.getElementsByTagName('p')[0]
        let parag2 = document.getElementsByTagName('p')[1]
        parag1.innerText = title  
        parag2.innerText = author //modified the text of parag2
    }
    displayBooks(apiArray)
   