
let cars = [
   { id:1, year:1998, engine: 1, name: 'Tico'},
   { id:2, year:2005, engine: 1.2, name: 'Matiz'},
   { id:3, year:2010, engine: 1.6, name: 'Gentra'},
   { id:4, year:2010, engine: 1.5, name: 'Cobalt'},
   { id:5, year:2012, engine: 2, name: 'Malibu'},
   { id:6, year:2000, engine: 1.2, name: 'Damas'},
   { id:7, year:2018, engine: 2.4, name: 'Tracker'}
   
];


// // ================================================4
// Read

// const sortByYear = () => { 

// let key = cars.sort((a,b) => a.year-b.year )
    
//     console.log(cars);  }
//     sortByYear()

// const sortByAlphapet = () => {
//    let key = cars.sort((a,b) => a.name.localeCompare(b.name))
//    cars = key
// }
// sortByAlphapet()
// console.log(cars);



//==========================================1
    //Update

const onUpdate = (ids) => { 

keys = cars.map (value => (value.id === ids.id) ? {...value, ...ids} : value )
cars = keys
}
onUpdate({ id: 2,  name: 'BMW', year:2020})
console.log(cars);


// ============================================2
//Create

// const addCar = (car) => {
// cars=[...cars, {id: cars.length+1, ...car}]

// console.log(cars);
// }

// addCar({id:8, year:2018, engine: 2.4, name: 'K5'})


//////// Create 2-way//////////////

// const addCar = (car) => {
// cars = [...cars, {...car} ]
// console.log(cars)}
// addCar({id:8, year:2018, engine: 2.4, name: 'K5'})



// //================================================3
// //Delete

// const onDelete = (_id_number) => {
   //     let checking = users.filter(value => value.id !== _id_number);
   //     console.log(checking);
   // }
   
   // onDelete(5)
   

   
   
   
    
    
