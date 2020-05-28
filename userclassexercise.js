//User class is defined

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  
  //compare function is created for comparison
  compare(user2) {
    if (typeof user2 === 'object') {
      if (this.age > user2.age) {
        return this.name + ' is older than ' + user2.name
      } else if (this.age < user2.age) {
        return user2.name + ' is older than ' + this.name
      } else {
        return user2.name + ' age is equal to ' + this.name
      }
    } else {
      throw new Error(
        'value passed is not an object comparison cannot take place'
      )
    }
  }
}

let user1 = new User('John', 25)
let user2 = new User('Mary', 24)
console.log(user1.compare(user2))
