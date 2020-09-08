let vasia = { name: "Вася", age: 25 };
let petia = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let egor = { name: "Егор", age: 40 };
let dima = { name: "Дима", age: 35 };
let lena = { name: "Лена", age: 18 };

let users = [ vasia, petia, masha, egor, dima, lena ];

// console.log(sortByKey(users, "bornDate"));

// console.log(getAverageAge(users));

/**
 * This function sort array of objects by key
 * 
 * @param {object} obj array of employees
 * @param {string} key property 
 * @returns {object} Returns new sorted array by key but if object of the array has not a key returns null
 */
function sortByKey(obj, key) {
    let tempArr = [];

    if (hasKey(obj, key)) {
        tempArr = obj.sort(function (a, b) {
            if (a[key] > b[key]) {
                return 1;
            } else if (b[key] > a[key]) {
                return -1;
            }
            return 0;
        });

        return tempArr;
    } 

    console.error(`The Object has not this "${key}" key`);
    return null;
}

/**
 * This function verifies properties of objects of the array
 * 
 * @param {object} obj array of objects
 * @param {string} key property
 * @returns {boolean} Return true/false 
 */
function hasKey(obj, key) {
    let has = false;

    for (let user of obj) {
        if (user.hasOwnProperty(key)) {
            has = true;
        }
    }

    return has;
}

/**
 * This function calculate average age of employees
 * 
 * @param {object} array array of objects
 * @returns {number} Returns value of average age of employees
 */
function getAverageAge(array) {
    let tempArr = array.map( (item) => item['age'] );

    let sumofAges = tempArr.reduce( (preVal, currVal) => preVal += currVal );

    let averageAge = sumofAges / array.length;

    return Math.round(averageAge);
}