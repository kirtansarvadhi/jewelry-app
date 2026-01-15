class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const user1 = new User("kirtan", "kirta@gmail.com");
const user2 = new User("jay", "jay@gmail.com");

console.log(user1.greet());
console.log(user2.greet());
