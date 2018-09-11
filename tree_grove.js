"use strict"
class FruitTree {
  constructor (umur, tinggi, jenisBuah, jumlahBuah, status) {
    this._age = umur || 0;
    this._height = tinggi || 0;
    this._fruitName = jenisBuah || 'Any Fruit';
    this._harvested = jumlahBuah || 0;
    this._healthStatus = status || true;
    this._fruits = [];
    this._maxAge = 20;
    this._maxFruit = 50;
    this.goodQuality = 0;
    this.badQuality = 0;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruitName;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  grow () {
    this._age++;
    if (this._age < this._maxAge) {
      this._height += Math.round(Math.random() * 10 + 1);
      return this._healthStatus = true;
    } else {
      return this._healthStatus = false;
    }
  }

  produceFruits () {
    let buah = Math.round(Math.random() * 40 + 10);
    let totalBuah = (buah > this._maxFruit) ? this._maxFruit : buah;
    for (var i = 0; i < totalBuah; i++) {
      let fruit = new Fruit();
      if (fruit.quality === 'Good') {
        this.goodQuality++;
      } else {
        this.badQuality++;
      }
      this._fruits.push(fruit);
    }
  }

  harvest () {
    this._harvested = ` ${this._fruits.length} (${this.goodQuality} good, ${this.badQuality} bad)`;
    this.goodQuality = 0;
    this.badQuality = 0
    this._fruits = [];
  }
}
class Fruit {
  constructor () {
    this.quality = this.random() % 2 === 0 ? 'Good': 'Bad';
  }

  random() {
    return Math.round(Math.random() * 10)
  }
}

// END FRUIT TEMPLATE

class MangoTree extends FruitTree {
  constructor() {
    super(5, 25, 'Mango', 25, true);
    this._maxAge = 17;
  }
}
class Mango extends Fruit {
}

class AppleTree extends FruitTree {
  constructor() {
    super(7, 30, 'Apple', 43, true);
    this._maxAge = 35;
  }
}
class Apple extends Fruit {
}

class PearTree extends FruitTree {
  constructor() {
    super(2, 10, 'Pear', 3, true);
    this._maxAge = 10;
  }
}
class Pear extends Fruit {
}

// END MANGO TREE TASK, CONTINUE TREEGROVE

class TreeGrove {
  constructor() {
    this._allTrees = [];
  }

  inputTree(jenisBuah, umur, tinggi, jumlahBuah, status) {
    if (jenisBuah === 'MangoTree') {
      let mangoTree = new MangoTree({jenisBuah: jenisBuah, umur: umur, tinggi: tinggi, jumlahBuah:jumlahBuah, status: status});
      this._allTrees.push(mangoTree);
    } else if (jenisBuah === 'AppleTree') {
      let appleTree = new AppleTree({jenisBuah: jenisBuah, umur: umur, tinggi: tinggi, jumlahBuah:jumlahBuah, status: status});
      this._allTrees.push(appleTree);
    } else if (jenisBuah === 'PearTree') {
      let pearTree = new PearTree({jenisBuah: jenisBuah, umur: umur, tinggi: tinggi, jumlahBuah:jumlahBuah, status: status});
      this._allTrees.push(pearTree);
    }
  }

  showAges() {
    for (var i = 0; i < this._allTrees.length; i++) {
      console.log(`${this._allTrees[i]._fruitName}'s age is ${this._allTrees[i]._age}`);
    }
  }

  showTrees() {
    console.log(`\nWe have all kinds of tree:`);
    for (var i = 0; i < this._allTrees.length; i++) {
      console.log(`${this._allTrees[i]._fruitName}`);
    }
  }

  showMatureTrees() {
    console.log(`\nReady to be picked:`);
    for (var i = 0; i < this._allTrees.length; i++) {
      if (this._allTrees[i]._harvested > 0) {
        console.log(`${this._allTrees[i]._fruitName} is growing! :smile:`);
      }
    }
  }

  showDeadTrees() {
    console.log(`\nList of dead tree:`);
    for (var i = 0; i < this._allTrees.length; i++) {
      if (this._allTrees[i]._healthStatus === false) {
        console.log(`${this._allTrees[i]._fruitName} is dead! :sad:`);
      } else {
        return console.log(`Nothing's dead! Yeay! :smile:`);
      }
    }
  }

  nextYear(){
    for (var i = 0; i < this._allTrees.length; i++) {
      this._allTrees.grow();
    }
    console.log(`\nNext year harvest:`);
  }
}

var grove = new TreeGrove()

grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
//grove.nextYear()

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
