var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coins;
(function (Coins) {
    // image path is only available inside the Coins namespace 
    var imgPath = 'img/';
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
            this.value = value;
        }
        return Coin;
    }());
    Coins.Coin = Coin;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            return _super.call(this, .25) || this;
        }
        Object.defineProperty(Quarter.prototype, "Value", {
            // getter in TS
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        // normal method
        Quarter.prototype.getImageUrl = function () {
            return imgPath + 'Quarter.png';
        };
        return Quarter;
    }(Coin));
    Coins.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            return _super.call(this, .10) || this;
        }
        Object.defineProperty(Dime.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Dime.prototype.getImageUrl = function () {
            return imgPath + 'Dime.png';
        };
        return Dime;
    }(Coin));
    Coins.Dime = Dime;
    var Ten = (function (_super) {
        __extends(Ten, _super);
        function Ten() {
            return _super.call(this, 10) || this;
        }
        Object.defineProperty(Ten.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Ten.prototype.getImageUrl = function () {
            return imgPath + 'Half.png';
        };
        return Ten;
    }(Coin));
    Coins.Ten = Ten;
    var Five = (function (_super) {
        __extends(Five, _super);
        function Five() {
            return _super.call(this, 5) || this;
        }
        Object.defineProperty(Five.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Five.prototype.getImageUrl = function () {
            return imgPath + 'Dollar.jpg';
        };
        return Five;
    }(Coin));
    Coins.Five = Five;
})(Coins || (Coins = {}));
var ProductCategory = (function () {
    function ProductCategory() {
        this.imgPath = 'img/';
    }
    return ProductCategory;
}());
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Soda";
        return _this;
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imgPath + 'SodaCan.png';
    };
    return SodaCategory;
}(ProductCategory));
var ChipsCategory = (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Potato Chips';
        return _this;
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return this.imgPath + 'Chips.png';
    };
    return ChipsCategory;
}(ProductCategory));
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Candy";
        return _this;
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this.imgPath + 'Candy.png';
    };
    return CandyCategory;
}(ProductCategory));
var CandyBarCategory = (function (_super) {
    __extends(CandyBarCategory, _super);
    function CandyBarCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Candy Bar';
        return _this;
    }
    CandyBarCategory.prototype.getImageUrl = function () {
        return this.imgPath + 'Candybar.png';
    };
    return CandyBarCategory;
}(ProductCategory));
var NutsCategory = (function (_super) {
    __extends(NutsCategory, _super);
    function NutsCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Nuts";
        return _this;
    }
    NutsCategory.prototype.getImageUrl = function () {
        return this.imgPath + 'Nuts.png';
    };
    return NutsCategory;
}(ProductCategory));
/// <reference path="productCategory.ts" />
var Initial = (function () {
    function Initial() {
        this.name = 'Please Select a Product';
        this.price = 0;
    }
    return Initial;
}());
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 11.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Fanta = (function () {
    function Fanta() {
        this.name = 'Fanta';
        this.price = 12;
        this.category = new SodaCategory();
    }
    return Fanta;
}());
var Sprite = (function () {
    function Sprite() {
        this.name = 'Sprite';
        this.price = 11.80;
        this.category = new SodaCategory();
    }
    return Sprite;
}());
var Peanuts = (function () {
    function Peanuts() {
        this.name = 'Peanuts';
        this.price = 8.50;
        this.category = new NutsCategory();
    }
    return Peanuts;
}());
var Cashews = (function () {
    function Cashews() {
        this.name = 'Cashews';
        this.price = 12.80;
        this.category = new NutsCategory();
    }
    return Cashews;
}());
var Plain = (function () {
    function Plain() {
        this.name = 'Plain';
        this.price = 15;
        this.category = new ChipsCategory();
    }
    return Plain;
}());
var Cheddar = (function () {
    function Cheddar() {
        this.name = 'Cheddar';
        this.price = 11;
        this.category = new ChipsCategory();
    }
    return Cheddar;
}());
var Mints = (function () {
    function Mints() {
        this.name = 'Mints';
        this.price = 1.30;
        this.category = new CandyCategory();
    }
    return Mints;
}());
var Gummies = (function () {
    function Gummies() {
        this.name = 'Gummies';
        this.price = 1.90;
        this.category = new CandyCategory();
    }
    return Gummies;
}());
var Hersey = (function () {
    function Hersey() {
        this.name = 'Hersey\'s';
        this.price = 2.30;
        this.category = new CandyBarCategory();
    }
    return Hersey;
}());
var MilkyWay = (function () {
    function MilkyWay() {
        this.name = 'Milky Way';
        this.price = 12.80;
        this.category = new CandyBarCategory();
    }
    return MilkyWay;
}());
/// <reference path="product.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Fanta();
            case 2: return new Sprite();
            case 3: return new Peanuts();
            case 4: return new Cashews();
            case 5: return new Plain();
            case 6: return new Cheddar();
            case 7: return new Mints();
            case 8: return new Gummies();
            case 9: return new Hersey();
            case 10: return new MilkyWay();
        }
    };
    return productFactory;
}());
/// <reference path="coin.ts" />
/// <reference path="productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        // cell size of the machine 
        this.cells = ko.observableArray([]);
        // selected cells 
        this.selectedCell = ko.observable(new Cell(new Initial()));
        // array of accepted coins 
        this.acceptedCoins = [new Coins.Ten(), new Coins.Five(), new Coins.Quarter(), new Coins.Dime()];
        this.canPay = ko.pureComputed(function () { return _this.paid() -
            _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        // using arrow functions 
        this.acceptCoin = function (coin) {
            var oldValue = _this.paid();
            _this.paid(oldValue + coin.Value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("Sorry, it's out of stock");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        // set the size of the machine 
        set: function (givenSize) {
            // mae sure the cells are empty 
            this.cells([]);
            for (var index = 0; index < givenSize; ++index) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
// set the size of the machine 
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map