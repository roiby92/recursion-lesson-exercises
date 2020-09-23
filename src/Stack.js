/* Write your class below */
class Stack {
    constructor() {
        this.length = 0
        this.stack = []
    }

    push(item) {
        this.stack[this.length] = item
        this.length++
    }

    peek() {
        return this.isEmpty() ? null : this.stack[this.length - 1]
    }
    pop() {
        if (this.isEmpty()) {
            return null
        }
        const stackItem = this.stack[this.length - 1]
        this.length--
        delete this.stack[this.length]
        return stackItem
    }
    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        return false;
    }
    print() {
        console.log(this.stack)
    }


}

//You can paste the test code from the lesson below to test your solution
// let myStack = new Stack()
// console.log(myStack.isEmpty())    //true
// myStack.print()                    //[]
// myStack.push(2)
// console.log(myStack.isEmpty())     //false
// myStack.push(4)
// myStack.print()                    //[2,4]
// console.log(myStack.peek())        //4
// myStack.pop()
// myStack.pop()
// console.log(myStack.peek())       //null
// console.log(myStack.isEmpty())    //true


/* Do not remove the exports below */
module.exports = Stack