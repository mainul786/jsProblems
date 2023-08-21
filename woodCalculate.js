
function woodCalculate(chairQuantity, bedQuantity, tabelQuantity){
    const chair = 4;
    const bed = 8;
    const table = 6;

    const totalChairWood = chair * chairQuantity;
    const totalBedWood = bed * bedQuantity;
    const totalTableWood = table * tabelQuantity;

    const totalWoodExpense = totalChairWood + totalBedWood + totalTableWood;
    return totalWoodExpense;
}

const woods = woodCalculate(2, 5, 8);
console.log(woods);