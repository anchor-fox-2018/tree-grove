class MangoTree {

    // Initialize a new MangoTree
    constructor (name,age,height,mature,status) {
      this._name = name;
      this._matureAge = mature;
      this._heightAge = height;
      this._deathAge = death;
      this._age = age;
      this._height = height;
      this._quality = this.produceMangoes();
      this._healthStatus = status
      this._buah = 0;
    }
    
    get age () {
      return this._age
    }
  
    get height () {
      return this._height
    }
  
    get fruits () {
      return this.age*this._buah
    }
  
    get healthStatus () {
      return this._healthStatus
    }
  
    get harvested () {
      return this._buah
    }
  
    // Get current states here
  
    // Grow the tree
    grow () {
      let acak = Math.random();
      let buahPerTahun = Math.floor(Math.random()*(10-1)+1)
      
      this._healthStatus = true;
      if(this._age < this._deathAge){
        this._age++
        if(this._age >= this._matureAge){
          this._buah+= buahPerTahun
        }
        if(this._age <= this._heightAge){
          this._height+=acak;
        }
      }else{
        this._healthStatus = false;
      }
      return this 
    }
  
    // Produce some mangoes
    produceMangoes () {
      let acakGood = Math.floor(Math.random()*10);
      let acakBad = Math.floor(Math.random()*10);
      return [acakGood,acakBad]  
    }
  
    // Get some fruits
    harvest () {
  
    }
  
  }

module.exports = MangoTree  
  