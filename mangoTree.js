const myFruitTree = require('./fruitTree.js');
const fruitTree = myFruitTree.fruitTree
const fruit = myFruitTree.fruit

class MangoTree extends fruitTree{
    constructor(){
        super()
        this._maxAge = 20
    }
}

class Mango extends fruit{

}

module.exports = {
    mangoTree: MangoTree,
    mango: Mango
}