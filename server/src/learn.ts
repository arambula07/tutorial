

// // are you old enough to drive

// interface Driver {
//     fullname: string;
//     age: number;
// }

// const drivers: Driver[] = [
//     buildDriver('Mike', "ortiz", 12),
//     buildDriver('Sam', "ortiz", 50),
// ]

// function buildDriver(firstName: string, lastName: string, age: number): Driver {
//     return {
//         fullname: firstName+ ' ' +lastName,
//         age,
       
//     }
// }


// function oldEnough (driver: Driver){
//     if ( driver.age > 15){
//         const message = driver.fullname +' you are old enough to drive'
//         console.log(message);
//     } else {
//         const message = driver.fullname +' you are not old enough to drive'
//         console.log(message)
//     }
// }

// for (let driver of drivers) {
//     oldEnough(driver)
// }


// given a list of numbers, write a function to return the sum of the numbers


export function add(numbers: number[]){

    let totalNum = 0

    for (let i=0; i<=numbers.length -1; i++){
        const currentNum = numbers[i];
        
        totalNum = currentNum + totalNum
    }
    return totalNum
}

export function addEvens( list: number[]) {
    let result = 0

    for (let i = 0; i<= list.length -1 ; i++) {
        const num = list[i]

        if (num%2 === 0){
            result = result + num
        }
    }
    return result
}


export function addMultiplesOf(list: number[], divider: number) {
    let result = 0

    for (let i = 0; i<= list.length -1; i++){
        let num = list[i]
        if  (num%divider === 0){
            result = result + num
        }
    }
    return result
}
/*
 loop every character of the string
create counter for each unique character

 */
export function charCounter(input: string) {
    const result:any = {};
   
    const arrayFromString = input.toLowerCase().split("");
    
    for (let i = 0; i<= arrayFromString.length -1; i++) {
        
        const letter = arrayFromString[i];
        

        if(letter == " ") {
            continue;
        }

        if (result[letter]) { 
            result[letter] = result[letter]+1; 
        } else {
            result[letter] = 1;
        }        

    }
    return result
}
/* variable that is an empty array
a function that adds to the array
function that lists the array
*/

let todoList:Todo[] = []

export interface Todo {
    done: boolean;
    title: string;
}

export interface TodoListFilter {
    done: boolean
}

export function debugSetTodoList(list: Todo[]) {
    todoList = list;
}


export function addTodo(task: string) {
    const todo = {title:task,done:false}
    todoList.push(todo)
}

export function getTodos(filter?: TodoListFilter) {
    let filteredTodoList:Todo[] = []
    if (!filter){
        return todoList
    }
    for (let todo of todoList){
        if (todo.done == filter.done){
            filteredTodoList.push(todo)
        }
    }
    return filteredTodoList
}

export function markTodoComplete(task: string):"success" | "failed" {
    for (let todo of todoList){
        if (todo.title == task){
            todo.done = true
            return "success"
        }
    
    }
    return 'failed'
}