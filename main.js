var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveButton = document.querySelector('.save');
var formSection = document.querySelector('.form-section');
var cardsContainer = document.querySelector('.card-section');
var filterAside = document.querySelector('.filter-aside');
var ideaArray = [];

window.onload = displayLocalStorageCards();
formSection.addEventListener('keyup', saveButtonToggle);
formSection.addEventListener('click', formHandler);
cardsContainer.addEventListener('click', cardHandler);
filterAside.addEventListener('click', asideHandler);

// ********** Begining of formhandler and card functions ************ //

function formHandler(event) {
  event.preventDefault();
  if (event.target.classList.contains('save')) {
    var newCard = createIdea(Date.now(), titleInput.value, bodyInput.value);
    newCard.saveToStorage();
    clearInputs();
  }
}

function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
  saveButton.disabled = true;
  saveButton.classList.remove('active-save-btn');
}


function createIdea(id, title, body) {
  var newCard = new Idea(id, title, body)
  ideaArray.push(newCard);
  showIdea(newCard);
  return newCard;
}

function saveButtonToggle() {
  event.preventDefault();
  if(titleInput.value && bodyInput.value) {
    saveButton.classList.add('active-save-btn');
    saveButton.disabled = false;
  } else {
    saveButton.classList.remove('active-save-btn');
    saveButton.disabled = true;
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
    var card = checkCardID(event);
    event.target.parentNode.parentNode.remove();
    card.deleteFromStorage();
  }
  if (event.target.classList.contains('disable-favorite-btn')) {
    var card = checkCardID(event);
    event.target.classList.toggle('active-favorite-btn');
    card.updateIdea();
  }
}

function retrieveIdeas() {
  var getIdeas = localStorage.getItem("ideaLocalStorage");
  var parsedIdeas = JSON.parse(getIdeas);
  return parsedIdeas;
}

function displayLocalStorageCards() {
  var fromStorage = retrieveIdeas();
  if (localStorage.getItem("ideaLocalStorage") === null) {
    ideaArray = [];
  } else {
    for (var i = 0; i < fromStorage.length; i++) {
      createIdea(fromStorage[i].id, fromStorage[i].title, fromStorage[i].body, fromStorage[i].starred)
    }
  }
  // console.log(window);
  // console.log(window.cardsContainer.children[0])
  // console.log(window.cardsContainer.children["0"].children["0"].children["0"].classList)
}

function checkCardID(event) {
  var cardId = JSON.parse(event.path[2].dataset.id);
  var card = null;
  for (var i = 0; i < ideaArray.length; i++) {
    if (cardId === ideaArray[i].id) {
      card = ideaArray[i];
    }
  }
  return card;
}


// function setFavoriteStyle(ary) {
//   for (var i = 0; i < ary.length; i++) {
//     if (ary[i].starred === true) {
//       console.log(ary[i]);
//     }
//   }
// }

// ********** Aside Handler and Functions ********** //

function asideHandler(event) {
  if (event.target.classList.contains("mobile-menu-inactive")) {
    event.target.classList.toggle("mobile-menu-active");
    event.path[1].children[2].classList.toggle("starred-ideas-active");
  }
}
