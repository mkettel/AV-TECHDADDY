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


//this is one i took online of how to make result show up after text input. I need to do 
//a lot more to be able to make it work well but it is a good idea and I could and content like this to a lot of the buttons
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
    if (nameField === "Millett") {
        result.textContent = 'Input Patient information into the Arthrex Tablet';
        //alert('Millet uses Arthrex shit');
    } else if (nameField === "Hackett") {
        result.textContent = "Bring in the S & N Tower and setup that";
        //alert(nameField);
    } else {
        result.textContent = "Look it up fucker";
    }
    }
    var subButton = document.getElementById('subButton');
    subButton.addEventListener('click', getUserName, false);

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