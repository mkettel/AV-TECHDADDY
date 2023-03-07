const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position < 350){
        header.style.backgroundColor = "transparent";
    } else{
        header.style.backgroundColor = "#29323c";
    }
})


// //this is one i took online of how to make result show up after text input. I need to do
// //a lot more to be able to make it work well but it is a good idea and I could and content like this to a lot of the buttons
// function getUserName() {
//     var nameField = document.getElementById('nameField').value;
//     var result = document.getElementById('result');

//     if (nameField === "Millett") {
//         result.textContent = 'Input Patient information into the Arthrex Tablet';
//         //alert('Millet uses Arthrex shit');
//     } else if (nameField === "Hackett") {
//         result.textContent = "Bring in the S & N Tower and setup that";
//         //alert(nameField);
//     } else {
//         result.textContent = "Look it up fucker";
//     }
//     }
//     var subButton = document.getElementById('subButton');
//     subButton.addEventListener('click', getUserName, false);

//Another function to fuck around with and it works but just dont know how to link to a form

function doctorName(a) {
    if (a === 'millett') {
    return 'Setup the Arthrex Tablet';
    } else if (a === 'hackett') {
        return 'Setup the S & N Tower';
    } else {
        return 'Go Home Bitch';
    }
}


// ----- LINKED LIST PRACTICE -----------

class LinkedList {
  constructor() {
    this.head = this.tail = null
  }
  // add to end / tail of the list
  append(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }
  // add to beginning / head of list
  prepend(value) {
    // if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value)
      oldHead.next = this.head;
      this.head.prev = oldHead;
    }
  }
  deleteHead() {
    // if list is empty
    if (!this.head) {
      return null
    } else {
      let removedHead = this.head;
      // 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.value;
    }
  }
  deleteTail() {
    // if list empty
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      // 1 node left
      if (this.tail === this.head) {
        this.tail = this.head = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.value;
    }
  }
  search(value) {
    // start at head and go through list
    let currentNode = this.head;

    // loop through list
    while (currentNode) {
      if (currentNode === value) {
        return currentNode;
      }
      currentNode = currentNode.next // moves onto the next node if it is not equal
    }
    return null // if the list is iterated and does not find then return null
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}


let list = new LinkedList()
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.search(1);

console.log(list.search(1));
