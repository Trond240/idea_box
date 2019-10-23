var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
// var saveButton = document.getElementById('save-btn');
var saveButton = document.querySelector('.save');
var formSection = document.querySelector('.form-section');
var cardsContainer = document.querySelector('.card-section')

formSection.addEventListener('click', formHandler);
// cardsContainer.addEventListener('click', cardHandler);

function formHandler(event) {
  if (event.target.classList.contains('save')) {
    event.preventDefault();
    createIdea();
  }
  console.log(event.target);
}


function createIdea() {
  var card = new Idea(titleInput.value, bodyInput.value, Date.now());
  showIdea(card);
};



function showIdea(card) {
  cardsContainer.insertAdjacentHTML('beforeend',
  `<article class='cards'>
    <div class='card-header'>
      <button class='card-btns favorite-btn'></button>
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
  </article>`) ;
};
