// Load dataset
import carsDataset from './MOCK_DATA.json' assert {type: 'json'}

// Define UI variables
const view_dataset_UI = document.getElementById("view-dataset")
const for_each_UI = document.getElementById("for-each")
const filter_UI = document.getElementById("filter")
const map_UI = document.getElementById("map")
const sort_UI = document.getElementById("sort")
const reduce_UI = document.getElementById("reduce")

// Load event listeners
function loadEventListeners() {
    view_dataset_UI.addEventListener("click", viewDataSet)
    for_each_UI.addEventListener("click", executeForEach)
    filter_UI.addEventListener("click", executeFilter)
    map_UI.addEventListener("click", executeMap)
    sort_UI.addEventListener("click", executeSort)
    reduce_UI.addEventListener("click", executeReduce)
}

loadEventListeners()

// View all dataset
function viewDataSet(){
    console.log(carsDataset)
}

// Execute forEach
function executeForEach() {
    // Log each object
    console.log("Log each object from cars datatset")
    carsDataset.forEach((car) => {
        console.log(car)
    })
    
    // Example: Log individual element from object { id, car_make, car_model, car_model_year, is_available }
    console.log("Log each car_make from cars datatset")
    carsDataset.forEach((car) => {
        console.log(car.car_make)
    })
}

// Execute filter
function executeFilter() {
    // Example: filter 90's cars
    const ninetiesCar = carsDataset.filter((car) => {
        if (car.car_model_year < 2000) {
            return true
        }
    })
    console.log("Filterd Ninties Cars")
    console.log(ninetiesCar)

    // Example: filter available cars
    const availableCars = carsDataset.filter((car) => {
        if (car.is_available) {
            return true
        }
    })
    console.log("Filtered Available Cars")
    console.log(availableCars)
}

// Execute Map
function executeMap() {
    // create an array of car make
    const carMake = carsDataset.map((car) => {
        return car.car_make 
    })
    console.log("car_make Array")
    console.log(carMake)
    
    // create custom strings array 
    const customString = carsDataset.map((car) => {
        return `${car.car_make} - ${car.car_model} [${car.car_model_year}]`
    })
    console.log("custon strings Array")
    console.log(customString)
}

// Execute Reduce
function executeSort() {
    // sort cars in ascending order based on car make
    const carsSort = carsDataset.sort((a, b) => (
        a.car_model_year > b.car_model_year ? 1 : -1
    ))
    console.log("Sorted cars in ascending order based on car model year")
    console.log(carsSort)
}

// Execute Reduce
function executeReduce() {
    // Add total price
    const total_price = carsDataset.reduce((total, car) => {
        return total += car.price
    }, 0)
    console.log("Added total price")
    console.log(total_price)
}

