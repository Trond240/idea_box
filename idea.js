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

  updateIdea() {
    this.starred = !this.starred;
    var storageIdeas = retrieveIdeas();
    var newArray = [];
    for (var i = 0; i < storageIdeas.length; i++) {
      if (this.id === storageIdeas[i].id) {
        storageIdeas[i].starred = !storageIdeas[i].starred;
      }
      newArray.push(storageIdeas[i]);
    }
    localStorage.setItem('ideaLocalStorage', JSON.stringify(newArray));
  }

  deleteFromStorage() {
    var fromStorage = retrieveIdeas();
    var newIdeaArray = [];
    for (var i = 0; i < fromStorage.length; i++) {
      if (this.id !== fromStorage[i].id) {
        newIdeaArray.push(fromStorage[i]);
      }
    }
    localStorage.setItem("ideaLocalStorage", JSON.stringify(newIdeaArray));
  }
}
