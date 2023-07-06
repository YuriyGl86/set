// TODO: write your code here

// const { forEach } = require("core-js/core/array");

class Team {
  constructor() {
    this.members = new Set();
  }

  add(cheracter) {
    if (this.members.has(cheracter)) {
      throw new Error('такой персонаж уже есть в команде');
    }
    this.members.add(cheracter);
  }

  addAll(...newCharacters) {
    newCharacters.forEach((cheracter) => {
      this.members.add(cheracter);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

const team = new Team();
export default team;
