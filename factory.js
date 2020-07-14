
// Factory Pattern //
// Несколько конструкторов для нашей фабрики

function Cat(options){
    this.sound="мяу"
    this.name=options.name
}

function Dog(options){
    this.sound="гафф"
    this.name=options.name
}

function AnimalFactory(){}

// Тип Cat по умолчанию
AnimalFactory.prototype.animalType=Cat;

AnimalFactory.prototype.CreateAnimal=function(options){

    switch(options.animalType){

        case "cat": this.animalType=Cat;break;
        case "dog": this.animalType=Dog; break;
        default:
            this.animalType=cat;
            break;

    }
    return new this.animalType(options);

}