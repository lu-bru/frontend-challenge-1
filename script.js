function removeSelection() {
    let selectedIcons = document.querySelectorAll('.icon-selected');
    let selectedElements = document.querySelectorAll('.element-selected');

    //unselect previously selected icon
    selectedIcons.forEach(icon => icon.classList.toggle('icon-neutral'));
    selectedIcons.forEach(icon => icon.classList.toggle('icon-selected'));

    //unselect previously selected element
    selectedElements.forEach(element => element.classList.toggle('element-neutral'));
    selectedElements.forEach(element => element.classList.toggle('element-selected'));
}

function unselectElements() {
    let neutralIcons = document.querySelectorAll('.icon-neutral');
    let neutralElements = document.querySelectorAll('.element-neutral');
    
    //change not selected icons
    neutralIcons.forEach(icon => icon.classList.toggle('icon-not-selected'));
    neutralIcons.forEach(icon => icon.classList.toggle('icon-neutral'));
    
    //change not selected elements
    neutralElements.forEach(element => element.classList.toggle('element-not-selected'));
    neutralElements.forEach(element => element.classList.toggle('element-neutral'));
}

function activateButton() {
    //only get called once
    if (activateButton.fired) return
    btn.classList.toggle('button-activated');
    btn.classList.toggle('button-disabled');
    btn.disabled = false;
    activateButton.fired = true
}

function selectElement() {

    removeSelection();

    //change selected element
    this.classList.toggle('element-selected');
    this.classList.toggle('element-neutral');

    //change selected icon
    this.children[0].children[0].classList.toggle('icon-selected');
    this.children[0].children[0].classList.toggle('icon-neutral');

    unselectElements()

    activateButton()
}


function disableSelectedElement() {
    let selectedIcons = document.querySelectorAll('.icon-selected');
    let selectedElements = document.querySelectorAll('.element-selected');

    //disable selected icons
    selectedIcons.forEach(icon => icon.classList.toggle('icon-selected-disabled'));
    selectedIcons.forEach(icon => icon.classList.toggle('icon-selected'));

    //disable selected elements
    selectedElements.forEach(element => element.classList.toggle('element-selected-disabled'));
    selectedElements.forEach(element => element.classList.toggle('element-selected'));
}

function disableUnselectedElements() {
    let notSelectedIcons = document.querySelectorAll('.icon-not-selected');
    let notSelectedElements = document.querySelectorAll('.element-not-selected');

    //disable not selected icons
    notSelectedIcons.forEach(icon => icon.classList.toggle('icon-not-selected-disabled'));
    notSelectedIcons.forEach(icon => icon.classList.toggle('icon-not-selected'));
 
    //disable not selected elements
    notSelectedElements.forEach(element => element.classList.toggle('element-not-selected-disabled'));
    notSelectedElements.forEach(element => element.classList.toggle('element-not-selected'));
}

function disableButtonOnSubmit() {
    //disable button after submitting
    btn.classList.toggle('button-sent');
    btn.classList.toggle('button-activated');
    btn.disabled = true;
}

function pressButton () {

    disableSelectedElement()

    disableUnselectedElements()
    
    disableButtonOnSubmit()
}
    

let neutralElements = document.querySelectorAll('.element-neutral');
const btn = document.getElementById('btn');

//function calls
neutralElements.forEach(element => element.addEventListener('click', selectElement));
btn.addEventListener('click', pressButton);