//Classes = Person and Club
//Club has members who can swap their goods
//Person can add items to trade
//Person can make an offer and take the deal to swap items

class Person {
  constructor(name, age, city, items = []) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.items = items;
  }

  displayItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }
  becomeAMember(club) {
    this.club = club.name;
    club.members.push(this);
  }
  makeAnOffer(person, x, y) {
    console.log(
      "Hello " + person.name,
      ", my name is " + this.name,
      ". I like to trade your " + x,
      " with my " + y,
      "."
    );
  }
  takeTheDeal(person, x, y) {
    if (person.items.includes(x) && this.items.includes(y)) {
      let index1 = person.items.indexOf(x);
      person.items.splice(index1, 1);
      this.items.push(x);

      let index2 = this.items.indexOf(y);
      this.items.splice(index2, 1);
      person.items.push(y);
    }
  }
}

class Club {
  constructor(name, members = []) {
    this.name = name;
    this.members = members;
  }
  printMemberNames() {
    console.log(this.members.forEach(printName));
  }
}
const printName = (person) => console.log(person.name);

letsDeal = new Club("Let's Deal");
ayca = new Person("Ayca", 44, "Kusadasi", ["Book", "Dress", "Pen"]);
deniz = new Person("Deniz", 15, "Kusadasi", ["Ball", "Sun Glasses"]);

ayca.becomeAMember(letsDeal);
deniz.becomeAMember(letsDeal);

ayca.addItem("Mario Wii Game");
deniz.addItem("NBA20K");
ayca.makeAnOffer(deniz, "Ball", "Book");
deniz.takeTheDeal(ayca, "Book", "Ball");
letsDeal.printMemberNames();
