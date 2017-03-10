namespace Coins {
    // image path is only available inside the Coins namespace 
    let imgPath = 'img/';

    export abstract class Coin {
        constructor(protected value : number) {
            this.value = value;
        }
        abstract getImageUrl() : string;
    }   

    export class Quarter extends Coin {
        
        constructor() {
            super(.25); 
        }
        // getter in TS
        get Value() {
            return this.value;
        }
        // normal method
        getImageUrl() : string {
            return  imgPath + 'Quarter.png'; 
        }
    }

    export class Dime extends Coin {
        constructor() {
            super(.10);
        }
        get Value() {
            return this.value;
        }
        getImageUrl() : string {
            return imgPath + 'Dime.png';
        }
    }

    export class Ten extends Coin {
        constructor() {
            super(10);
        }
        get Value() {
            return this.value;
        }

        getImageUrl() : string {
            return imgPath + 'Half.png';
        }
    }


    export class Five extends Coin {
        constructor() {
            super(5);
        }

        get Value() {
            return this.value;
        }

        getImageUrl() : string {
            return imgPath + 'Dollar.jpg';
        }
    }
}