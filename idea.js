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
// Creating new array to be set in localStorage
    var newIdeaArray = [];
    for (var i = 0; i < fromStorage.length; i++) {
      if (this.id !== fromStorage[i].id) {
// Checking for the id that matches and creating an array of everything that does not
        newIdeaArray.push(fromStorage[i]);
      }
    }
// Sending the new array to localStorage as a string
    localStorage.setItem("ideaLocalStorage", JSON.stringify(newIdeaArray));
  }
}

// module.exports = Idea;
