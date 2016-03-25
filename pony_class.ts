export class Pony {
  private _id :string;
  private _name :string;

  constructor(_id, _name) {
      this._id = _id;
      this._name = _name;
    }
    get id() :string{
        return this._id;
    }
    get name()  :string{
        return this._name;
    }
    set id(id){
       this._id = id;
    }
    set name(name){
        this._name = name;
    }

}