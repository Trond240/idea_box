var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveButton = document.querySelector('.save');
var formSection = document.querySelector('.form-section');
var cardsContainer = document.querySelector('.card-section');

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
  var cards = new Idea(titleInput.value, bodyInput.value);
  showIdea();
}

function saveButtonToggle() {
  event.preventDefault();
  if(titleInput.value !== '' && bodyInput.value !== '') {
    saveButton.classList.add('active-save-btn');
    saveButton.disabled = false;
  }
}

function showIdea() {
  cardsContainer.insertAdjacentHTML('beforeend',
  `<article class='cards'>
    <div class='card-header'>
      <button class='card-btns favorite-btn'></button>
      <button class='card-btns delete-btn'></button>
    </div>
    <div class='card-content'>
      <h2>${titleInput.value}</h2>
      <p>${bodyInput.value}</p>
    </div>
    <div class='card-footer'>
      <button class='card-btns  comment-btn'></button>
      <label class='comment-label'>Comment</label>
    </div>
  </article>`);
};

// ********** Begining of cardhandler and card functions ************ //

function cardHandler(event) {
  if(event.target.classList.contains('delete-btn')) {
    event.target.parentNode.parentNode.remove();
  }
}
