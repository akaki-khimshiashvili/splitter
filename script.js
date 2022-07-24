const bill = document.querySelector("#amount");
let billAmount;
bill.addEventListener("input", () => {
  billAmount = parseInt(bill.value);
});

const numberOfPeople = document.querySelector("#numberofpeople");
let peopleNum;
numberOfPeople.addEventListener("input", () => {
  peopleNum = parseInt(numberOfPeople.value);
});

const form = document.querySelector(".form");

let tip;

const custom = document.querySelector("#custom");

let customTip;

custom.addEventListener("input", () => {
  customTip = parseInt(custom.value);
  if (customTip !== "") {
    tip = customTip;
  } else {
    tip = parseInt(form.tip.value);
  }
});

form.addEventListener("change", () => {
  tip = parseInt(form.tip.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(billAmount, tip, peopleNum);
  let finalAmount = (billAmount + (billAmount * tip) / 100) / peopleNum;
  console.log(finalAmount);
  tipPerPerson.textContent = ((billAmount * tip) / 100 / peopleNum).toFixed(2);
  totalPerPerson.textContent = finalAmount.toFixed(2);
  form.reset();
});

let tipPerPerson = document.querySelector("#tipPerPerson");

let totalPerPerson = document.querySelector("#totalPerPerson");
