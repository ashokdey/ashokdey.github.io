/// <reference path="vendingMachine.ts" />

let machine =  new VendingMachine();
// set the size of the machine 
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
