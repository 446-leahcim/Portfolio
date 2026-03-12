let totalIncome = 0;
let rentExpense = 0;
let utilityExpense = 0;


function addSalary(){
    let salaryInput = document.getElementById("salaryInput");
    let salary = Number(salaryInput.value);
    if (!isNaN(salary) && salary > 0) {
        totalIncome += salary;
        updateSummary();
    }
}

function addRent(){
    let rentInput = document.getElementById("rentInput");
    let rent = Number(rentInput.value);
    if (!isNaN(rent) && rent > 0) {
        rentExpense += rent;
        updateSummary();
    }
}

function addUtilities(){
    let utilInput = document.getElementById("uttilInput");
    let util = Number(utilInput.value);
    if (!isNaN(util) && util > 0) {
        utilityExpense += util;
        updateSummary();
    }
}

function updateSummary(){
    // Monthly
    let totalIncomeElem = document.getElementById("totalIncome");
    if (totalIncomeElem) totalIncomeElem.innerHTML = totalIncome;
    let totalExpensesElem = document.getElementById("totalExpenses");
    if (totalExpensesElem) totalExpensesElem.innerHTML = rentExpense + utilityExpense;
    let rentExpenseElem = document.getElementById("rentExpense");
    if (rentExpenseElem) rentExpenseElem.innerHTML = rentExpense;
    let utilityExpenseElem = document.getElementById("utilityExpense");
    if (utilityExpenseElem) utilityExpenseElem.innerHTML = utilityExpense;
    // Annual
    let annualIncome = totalIncome * 12;
    let annualIncomeElem = document.getElementById("annualIncome");
    if (annualIncomeElem) annualIncomeElem.innerHTML = annualIncome;
    let annualExpensesElem = document.getElementById("annualExpenses");
    if (annualExpensesElem) annualExpensesElem.innerHTML = (rentExpense + utilityExpense) * 12;
    let annualRentElem = document.getElementById("annualRent");
    if (annualRentElem) annualRentElem.innerHTML = rentExpense * 12;
    let annualUtilitiesElem = document.getElementById("annualUtilities");
    if (annualUtilitiesElem) annualUtilitiesElem.innerHTML = utilityExpense * 12;
    // Debug
    console.log({totalIncome, rentExpense, utilityExpense, annualIncome});

    //
}