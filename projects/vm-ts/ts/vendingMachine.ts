/// <reference path="coin.ts" />
/// <reference path="productFactory.ts" />


enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    public stock = ko.observable(3);
    public sold  = ko.observable(false);
    constructor (public product : Product) {

    }
}

class VendingMachine {
    private paid = ko.observable(0);
    // cell size of the machine 
    cells = ko.observableArray([]);  
    // selected cells 
    selectedCell = ko.observable(new Cell(new Initial()));
    // array of accepted coins 
    acceptedCoins : Coins.Coin[] = [new Coins.Ten(), new Coins.Five(), new Coins.Quarter(), new Coins.Dime() ];

    canPay = ko.pureComputed(() => this.paid() - 
    this.selectedCell().product.price >= 0);
    
    // set the size of the machine 
    set size(givenSize : VendingMachineSize) {
        // mae sure the cells are empty 
        this.cells([]);

        for(let index = 0; index < givenSize; ++index) {
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));
        }
     }

     select = (cell : Cell) : void => {
         cell.sold(false);
         this.selectedCell(cell);
     } 

    // using arrow functions 
    acceptCoin = (coin : Quarter) : void => {
        let oldValue = this.paid();
        this.paid(oldValue + coin.Value); 
    }

    pay = () : void => {
        if(this.selectedCell().stock() < 1) {
            alert("Sorry, it's out of stock");
            return;
        }
        let currentPaid = this.paid();
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price)*100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}