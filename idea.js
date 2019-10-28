class Idea {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.starred = false;
    this.id = Date.now();

  }

  saveToStorage() {
    var stringifiedIdeas = JSON.stringify(ideaArray);
    localStorage.setItem("ideaLocalStorage", stringifiedIdeas);
  }

  deleteFromStroage() {

  }

  updateIdea(){

  }
}

// module.exports = Idea;
