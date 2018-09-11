const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');


class TreeGrove {
    inputTree(name,age,height,mature,status){
        this._name = name;
        this._age = age;
        this._height = height;
        this._mature = mature;
        this._status = status;
        return this
    }
    showAges(){
        console.log('umur dari "',this._name,'" adalah "',this._age,'" tahun')
    }
    showTrees(){
        console.log('Nama Pohon: "',this._name,'"')
    }
    showMatureTrees(){
        if(this._age >= this._mature){
            console.log('"',this._name,'" anda Sudah berbuah')
        }else{
            console.log('"',this._name,'" anda Belum berbuah')
        }
        
    }
    showDeadTrees(){
        if(this._age > this._mature){
            console.log(this._name,'Sudah Wafat...')
        }else{
            console.log("Belum Ada Tanaman Yang Mati,Silahkan Tunggu...")
        } 
    }
    nextYear(year){
        this._age = this._age + year
        console.log(this)
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

// next year
grove.nextYear(7)

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()