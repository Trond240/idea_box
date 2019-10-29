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
    var selectedCard = this.id;
    console.log(selectedCard);
  }
}

// module.exports = Idea;
