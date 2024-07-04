export class Cartas{
    constructor(cartasList=[],faceDown,listName="",) {
        this._cartasList=cartasList;
        this.faceDown=faceDown;
        this.listName=listName;
    }
    get cartasList(){
        return this._cartasList;
    }
    set cartasList(value){
        if (value.length%2!=0){
            console.log("Error")
        }else{
            this._cartasList=value
            return this._cartasList
        }
    }
}
