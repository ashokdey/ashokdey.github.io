/// <reference path="productCategory.ts" />


interface Product {
    name : string;
    price : number;
    category? : ProductCategory
}

class Initial implements Product {
    name : string = 'Please Select a Product';
    price : number = 0;
}

class CocaCola implements Product{
    name : string = "Coca-Cola";
    price : number = 11.30;
    category : SodaCategory = new SodaCategory()
}

class Fanta implements Product {
    name : string = 'Fanta';
    price : number = 12;
    category : SodaCategory = new SodaCategory();
}

class Sprite implements Product {
    name : string = 'Sprite';
    price : number = 11.80;
    category : SodaCategory = new SodaCategory();
}

class Peanuts implements Product {
    name : string = 'Peanuts';
    price : number = 8.50;
    category : NutsCategory = new NutsCategory();
}

class Cashews implements Product {
    name : string = 'Cashews';
    price : number = 12.80;
    category : NutsCategory = new NutsCategory();
}

class Plain implements Product {
    name : string = 'Plain';
    price : number = 15;
    category : ChipsCategory = new ChipsCategory();
}

class Cheddar implements Product {
    name: string = 'Cheddar';
    price : number = 11;
    category : ChipsCategory = new ChipsCategory();
}

class Mints implements Product {
    name : string = 'Mints';
    price : number = 1.30;
    category : CandyCategory = new CandyCategory();
}

class Gummies implements Product {
    name : string = 'Gummies'
    price : number = 1.90;
    category : CandyCategory = new CandyCategory();
}

class Hersey implements Product {
    name : string = 'Hersey\'s';
    price : number = 2.30;
    category : CandyBarCategory = new CandyBarCategory();
}

class MilkyWay implements Product {
    name : string = 'Milky Way';
    price : number = 12.80;
    category : CandyBarCategory = new CandyBarCategory();
}