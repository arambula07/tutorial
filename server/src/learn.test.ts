import {add, addEvens, addMultiplesOf, charCounter, addTodo, getTodos, debugSetTodoList, markTodoComplete} from "./learn";

describe("Add function", () => {
  it('should add the numbers in the array', () => {
    const testList = [1, 3, 5, 1];
    const result = add(testList);
    expect(result).toBe(10);
  });

  it('should work with negatives', () => {
    expect(add([1, -1, 2])).toBe(2)
  })

})

describe("AddEvens function", () => {
  it("should work", () => {
    const testList = [1, 3, 4, 2, 8];
    expect(addEvens(testList)).toBe(14)
  })
  
})

describe('Add multiples of x', () => {
  it('should add numbers that are multiple of x', () => {
    const testList = [10, 20, 2, 3, 5];
    expect(addMultiplesOf(testList, 10)).toBe(30)
  })

  it('should add numbers that are multiple of x', () => {
    const testList = [9, 12, 2, 3, 5];
    expect(addMultiplesOf(testList, 3)).toBe(24)
  })
})

describe("how many times it occurs", () => {
  it("should return how many times each char is in a string", () => {
    const exampleInput = "This is a test";
    const expectedResult = {
      t: 3,
      h: 1,
      i: 2,
      s: 3,
      a: 1, 
      e: 1
    }

    expect(charCounter(exampleInput)).toEqual(expectedResult);
  })
})

describe("todo service", () => {
  beforeEach(() => {
    debugSetTodoList([])
  });

  it('should be able to add a todo', ()=> {
    addTodo("Do my homework");
    expect(getTodos()).toEqual([{title: 'Do my homework', done: false}])
    addTodo("Take out the trash");
    expect(getTodos()).toEqual([{title: 'Do my homework', done: false}, {title: "Take out the trash", done: false}])
  });

  it('should mark a todo as done', () => {
    const task = "Brush Teeth"
    addTodo(task);
    const response = markTodoComplete(task);
    expect(getTodos()).toEqual([{title: task, done: true}])
    expect(response).toEqual('success');

    const invalidTodoResponse = markTodoComplete("Doesnt exist");
    expect(invalidTodoResponse).toEqual('failed')
  })

  it('should return todos that match a filter', () => {
    const task1 = "Brush teeth";
    const task2 = "Clean Room";
    const task3 = "Boom";

    addTodo(task1);
    addTodo(task2);
    addTodo(task3);
    markTodoComplete(task2)
    markTodoComplete(task3)
    expect(getTodos({done: false})).toEqual([{title: task1, done: false}])
  })

  
})