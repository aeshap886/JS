const kiranaStore = (function() { //IIFE function imidiately invoked function expression
    let itemCount = 0;
    const godown = []

    return {
       add(name){
        itemCount++
        godown.push(name)
        return `Sharma ji stocked item: ${name}`
       },
       count(){
        return itemCount
       },
       list(){
        return godown.slice()
         
       }
    }
})()

/* console.log(kiranaStore.add('Tea 10 packs'))
// console.log(kiranaStore.add('ginger 10kg'))

// console.log("Count:", kiranaStore.count())
// console.log("List:",kiranaStore.list())

// console.log("Direct godwon ?:", typeof kiranaStore.godown)
 console.log("Direct count ?:", typeof kiranaStore.itemCount)
 */

const AccountBook = (function (){
    const records = []
    let accesslog = []
    
    function logAccess(action){
        accesslog.push(`[${new Date().toISOString().slice(0.10)}] ${action}`)
    }
    
    function store(doc){
        logAccess(`Stored: ${doc}`)
        records.push(doc)
    }

    function retrieve(index){
        logAccess(`Retrieved index: ${index}`)
        return records[index]  || "Not found"
    }

    function getRecordCount(){
        return records.length
    }
    function getAccesslog(){
        return accesslog.slice()
    } 

    return{
        store,
        retrieve,
        count : getRecordCount,
        log : getAccesslog
        
    }
})()

AccountBook.store("Sugar 2kg")
AccountBook.store("Rice 5kg")

/*
console.log("Sharma ji retrieve:", AccountBook.retrieve(0));
console.log("Count:", AccountBook.count);
console.log("Log Length:", AccountBook.log().length)
console.log("show me type of log access:", typeof AccountBook.logAccess);

*/

//simulation of a module

const sharmaMart = {}

sharmaMart.Inventory = (function(){
    function unitPrice(totalPrice, quantity){
        return totalPrice / quantity
    }

    function totalWeight(weightPerItem , quantity){
        return weightPerItem * quantity

    }

    //export{unitPrice, totalWeight}
    return{
        unitPrice,
        totalWeight
    }
})();

sharmaMart.BillingCalculator = (function (Inv){
    function bulkDiscount(pricePerKg, Kgs){
        const totalWeight = Inv.totalWeight(pricePerKg, Kgs)
        return `${(totalWeight * 0.95).toFixed(1)} after 5% bulk discount`
    }
    return {
        bulkDiscount
    }
})(sharmaMart.Inventory)
 console.log(sharmaMart.BillingCalculator.bulkDiscount(60,10));
 
 console.log("Store module:", Object.keys(sharmaMart));
 console.log("Inventory API :", Object.keys(sharmaMart.Inventory));
 
