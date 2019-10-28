class Idea {
  constructor(id, title, body) {
    this.id = id || Date.now();
    this.title = title;
    this.body = body;
    this.starred = false;
  }

  saveToStorage() {
    var stringifiedIdeas = JSON.stringify(ideaArray);
    localStorage.setItem("ideaLocalStorage", stringifiedIdeas);
  }

  updateIdea(){

  }

  deleteFromStorage(event) {
    var fromStorage = retrieveIdeas();
    var selectedCard = event.target.parentElement.parentNode.attributes.class.ownerElement.dataset.id;
    for (var i = 0; i < fromStorage.length; i++) {
      if (selectedCard === fromStorage[i].id) {
        localStorage.removeItem("ideaLocalStorage[i].id");
      }
    }
  }
}

// module.exports = Idea;
