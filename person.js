class Person {
  // Write code here
  #id;
  constructor (){
    this.#id=Math.ceil(Math.random()*(10**3));
  }
  get getID(){
    return this.#id;
  }

}
// Score! It works!

module.exports = Person;
