export class Pony{
  constructor(id, name) {
      this.id = id;
      this.name = name;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    set id(id){
       this._id = id;
    }
    set name(name){
        this._name = name;
    }

}