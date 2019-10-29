var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveButton = document.querySelector('.save');
var formSection = document.querySelector('.form-section');
var cardsContainer = document.querySelector('.card-section');
var ideaArray = [];


window.onload = displayLocalStorageCards();
formSection.addEventListener('keyup', saveButtonToggle);
formSection.addEventListener('click', formHandler);
cardsContainer.addEventListener('click', cardHandler);

// ********** Begining of formhandler and card functions ************ //

function formHandler(event) {
  event.preventDefault();
  if (event.target.classList.contains('save')) {
    createIdea();
    clearInputs();
  }
}

function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
  saveButton.disabled = true;
  saveButton.classList.remove('active-save-btn');
}

function createIdea() {
  // for (var i = 0; i < ideas.length; i++) {
  var newCard = new Idea(Date.now(), titleInput.value, bodyInput.value);
  ideaArray.push(newCard);
  showIdea(newCard);
  newCard.saveToStorage();
}


function saveButtonToggle() {
  event.preventDefault();
  if(titleInput.value !== '' && bodyInput.value !== '') {
    saveButton.classList.add('active-save-btn');
    saveButton.disabled = false;
  }
}

function showIdea(card) {
  cardsContainer.insertAdjacentHTML('beforeend',
  `<article class='cards' data-id='${card.id}'>
    <div class='card-header'>
      <button class='card-btns disable-favorite-btn'></button>
      <button class='card-btns delete-btn'></button>
    </div>
    <div class='card-content'>
      <h2>${card.title}</h2>
      <p>${card.body}</p>
    </div>
    <div class='card-footer'>
      <button class='card-btns  comment-btn'></button>
      <label class='comment-label'>Comment</label>
    </div>
  </article>`);
};

// ********** Begining of cardhandler and card functions ************ //

function cardHandler(event) {
  if (event.target.classList.contains('delete-btn')) {
    console.log(event);
    event.target.parentNode.parentNode.remove();
    card.deleteFromStorage(event);
  }
  if (event.target.classList.contains('disable-favorite-btn')) {
    event.target.classList.toggle('active-favorite-btn');
    card.starred = !card.starred;
  }
}



function retrieveIdeas() {
  var getIdeas = localStorage.getItem("ideaLocalStorage");
  var parsedIdeas = JSON.parse(getIdeas);
  return parsedIdeas;
}

function displayLocalStorageCards() {
  console.log(localStorage.key)
  var fromStorage = retrieveIdeas();
  if (localStorage.getItem("ideaLocalStorage") === null) {
    ideaArray = [];
  }else{
    for (var i = 0; i < fromStorage.length; i++) {
    var localStorageCard = new Idea(fromStorage[i].id, fromStorage[i].title, fromStorage[i].body, fromStorage[i].starred);
    showIdea(localStorageCard);
    ideaArray.push(localStorageCard);
    }
  }
}
