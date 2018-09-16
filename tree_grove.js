const myMangoTree = require('./mangoTree.js');
var mangoTree = myMangoTree.mangoTree
const myAppleTree = require('./apple_tree.js');
var appleTree = myAppleTree.appleTree
// const myPearTree = require('./pear_tree.js');
// var pearTree = myPearTree.pearTree

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
        }
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
// grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
// grove.inputTree("AppleTree", 4, 1.2, 5, true)
// grove.inputTree("PearTree", 7, 2, 15, true)
console.log(grove.all_trees);


// next year
// grove.nextYear()

// show trees ages
// grove.showAges()

// show trees
// grove.showTrees()

// show trees
// grove.showMatureTrees()

// show trees
// grove.showDeadTrees()
