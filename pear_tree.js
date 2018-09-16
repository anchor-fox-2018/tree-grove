const myFruitTree = require('./fruitTree.js');
const fruitTree = myFruitTree.fruitTree
const fruit = myFruitTree.fruit

class PearTree extends fruitTree{
    constructor(){
        super()
        this._maxAge = 25
    }
}

class Pear extends fruit{

}

module.exports = {
   pearTree:PearTree,
   pear:Pear
}