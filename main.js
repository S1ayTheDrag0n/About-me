let upgcost = 10;
let powah = 1;
let coins = 0;

function getcoin() {
  coins += powah;
  document.getElementById("Coins").textContent = coins;
}

function upgcoin() {
  if coins >= upgcost {
    coins -= upgcost;
    upgcost *= 1.5;
    upgcost = Math.floor(upgcost);
    powah += 1;
  }
  document.getElementById("Coins").textContent = coins;
}
