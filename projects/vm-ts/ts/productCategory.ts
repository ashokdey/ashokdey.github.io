abstract class ProductCategory {
    protected imgPath = 'img/';
    public name : string;
    abstract getImageUrl() : string;
}

class SodaCategory extends ProductCategory {
    name : string = "Soda";
    getImageUrl () : string {
        return this.imgPath + 'SodaCan.png'
    }
}

class ChipsCategory extends ProductCategory {
    name : string = 'Potato Chips';
    getImageUrl() : string {
        return this.imgPath + 'Chips.png';
    }
}

class CandyCategory extends ProductCategory {
    name : string = "Candy";
    getImageUrl() : string {
        return this.imgPath + 'Candy.png';
    }
}

class CandyBarCategory extends ProductCategory {
    name : string = 'Candy Bar';
    getImageUrl() : string {
        return this.imgPath + 'CandyBar.png';
    }
}


class NutsCategory extends ProductCategory {
    name : string = "Nuts"
    getImageUrl () : string {
        return this.imgPath + 'Nuts.png';
    }
}
