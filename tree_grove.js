// const MangoTree = require('./mango_tree.js');
// const AppleTree = require('./apple_tree.js');
// const PearTree = require('./pear_tree.js');

class Tree {
    constructor(treeName, treeAge, treeHeight, treeMatureAge, treeHealth) {
        this._treeName = treeName;
        this._treeAge = treeAge;
        this._treeHeight = treeHeight;
        this._treeMatureAge = treeMatureAge;
        this._treeHealth = treeHealth;
    }
}

class TreeGrove {
    constructor() {
        this._treeList = [];
    }
    inputTree(namaPohon, usiaPohon, tinggiPohon, usiaDewasa, kesehatan) {
        switch (namaPohon) {
            case "MangoTree":
                this._treeList.push(new Tree(namaPohon, usiaPohon, tinggiPohon, usiaDewasa, kesehatan));
                break;
            case "AppleTree":
                this._treeList.push(new Tree(namaPohon, usiaPohon, tinggiPohon, usiaDewasa, kesehatan));
                break;
            case "PearTree":
                this._treeList.push(new Tree(namaPohon, usiaPohon, tinggiPohon, usiaDewasa, kesehatan));
                break;
            default:
                this._treeList.push(new Tree(namaPohon, usiaPohon, tinggiPohon, usiaDewasa, kesehatan));
                break;
        }
    }
    nextYear() {
        this._treeList.forEach(element => {
            element._treeAge = element._treeAge + 1;
        });
    }
    showAges() {
        console.log("Tree age list: ");
        this._treeList.forEach(element => {
            console.log(`${element._treeName} age: ${element._treeAge}`);
        });
    }
    showTrees() {
        console.log("Tree list on park: ");
        this._treeList.forEach(element => {
            console.log(`${element._treeName}`);
        });
    }
    showMatureTrees() {
        console.log("Mature tree list on park (age > 2 and height > 1): ");
        this._treeList.forEach(element => {
            if (element._treeAge > 2 && element._treeHeight > 1) {
                console.log(`${element._treeName} age: ${element._treeAge} height: ${element._treeHeight}`)
            }
        });
    }
    showDeadTrees() {
        console.log("Dead tree list on park (age > 2 and height > 1): ");
        this._treeList.forEach(element => {
            if (element._treeHealth === false) {
                console.log(`${element._treeName} age: ${element._treeAge} height: ${element._treeHeight}`)
            }
        });
    }
}

let grove = new TreeGrove();
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)
grove.inputTree("PearTree", 7, 0.8, 15, false)

grove.showAges()
// // next year
grove.nextYear()

// // show trees ages
grove.showAges()

// // show trees
grove.showTrees()

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()
