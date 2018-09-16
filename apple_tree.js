const myFruitTree = require('./fruitTree.js');
const fruitTree = myFruitTree.fruitTree
const fruit = myFruitTree.fruit

class AppleTree extends fruitTree{
    constructor(){
        super()
        this._maxAge = 20
    }
}

class Apple extends fruit{

}

module.exports = {
   appleTree : AppleTree,
   apple :Apple
}