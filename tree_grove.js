const myMangoTree = require('./mangoTree.js');
const myAppleTree = require('./apple_tree.js');
const myPearTree = require('./pear_tree.js');

var mangoTree = myMangoTree.mangoTree
var appleTree = myAppleTree.appleTree
var pearTree = myPearTree.pearTree
// let mangga = new mangoTree()
// mangga.name = 'mangga'
// console.log(mangga)



class TreeGrove {
    constructor(){
        this._all_trees = []    
    }

    get all_trees(){
        return this._all_trees 
    }

    set all_trees(object){
        this._all_trees.push(object);
    }

    inputTree(name, age, height, matureAge, healthStatus){
        if(name === 'MangoTree'){
            let mangga = new mangoTree()
            mangga.name = name
            mangga.age = age
            mangga.height = height
            mangga.matureAge = matureAge
            mangga.healthStatus = healthStatus
            this.all_trees = mangga
        } else if(name === 'AppleTree'){
            let apel = new appleTree()
            apel.name = name
            apel.age = age
            apel.height = height
            apel.matureAge = matureAge
            apel.healthStatus = healthStatus
            this.all_trees = apel
        } else if(name === 'PearTree'){
            let pear = new pearTree()
            pear.name = name
            pear.age = age
            pear.height = height
            pear.matureAge = matureAge
            pear.healthStatus = healthStatus
            this.all_trees = pear
        }
    }

    nextYear(){
        for (let i = 0; i < this._all_trees.length; i++){
            this.all_trees[i].grow()
        }
    }

    showAges(){
        for(let i = 0; i < this._all_trees.length; i++){
            console.log(`${this.all_trees[i].name}'s age is ${this.all_trees[i].age}`)
        }
    }

    showTrees(){
        let trees = []
        for(let i = 0; i < this._all_trees.length; i++){
            trees.push(' '+ this._all_trees[i].name)
        }
        console.log(`These are trees in the grove: ${trees}`)
    }

    showMatureTrees(){
        let matureTrees = []
        for(let i = 0; i < this._all_trees.length; i++){
            if(this._all_trees[i].age > this._all_trees[i].matureAge){
                matureTrees.push(' ' + this._all_trees[i].name)
            }
        }
        console.log(`Mature tree: ${matureTrees}`)
    }

    showDeadTrees(){
        let deadTrees = []
        for(let i = 0; i < this._all_trees.length; i++){
            if(this._all_trees[i].age > this._all_trees[i].maxAge ){
                deadTrees.push(' '+ this._all_trees[i].name)
            }
        }
        console.log(`Dead tree: ${deadTrees}`)
    }


}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)
console.log(grove.all_trees);

function addYear(number){
    for(let i = 0; i < number; i++){
        grove.nextYear()
    }
}

addYear(20)

// next year

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
