let vasia = { name: "Вася", age: 25 };
let petia = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let egor = { name: "Егор", age: 40 };
let dima = { name: "Дима", age: 35 };
let lena = { name: "Лена", age: 18 };

let users = [ vasia, petia, masha, egor, dima, lena ];

console.log(getYoungEmployees(users, 30));

/**
 * this function filters employees by condition ("<") from the specified age ("age")
 * 
 * @param {object} arrayOfEmployees massive of employee's object
 * @param {number} age is age of employee 
 * @returns {object} Returns new string massive of employee names
 */
function getYoungEmployees(arrayOfEmployees, age){
    let tempArr = [];

    tempArr = filterEmployeesByAge(arrayOfEmployees, age);

    tempArr = getNameOfEmployees(tempArr);

    return tempArr;
}

/**
 * This function filters objects by age of employees
 * 
 * @param {object} arrayOfEmployees massive of employee's object
 * @param {number} age is age of employee
 * @returns {object} Returns new filtered massive by age
 */
function filterEmployeesByAge(arrayOfEmployees, age) {
    return arrayOfEmployees.filter( (item) => item['age'] < age );
}

/**
 * This function returns new string massive of employee names
 * 
 * @param {object} arrayOfEmployees massive of employee's object
 * @returns {object} new string massive
 */
function getNameOfEmployees(arrayOfEmployees) {
    let str = [], 
        index = 0;

    for (let employee of arrayOfEmployees) {
        for (let prop in employee) {
            if (prop == 'name') {
                str[index++] = employee[prop];
            }
        }
    }

    return str;
}