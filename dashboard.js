const ctx = document.getElementById("myChart");
const ctx1 = document.getElementById("myChart1");
const ctx2 = document.getElementById("myChart2");
const spend = document.querySelector("#spend");
const earn = document.querySelector("#earn");
const earnMonth = document.querySelector('#month');
const displayTime = document.querySelector("#time");
const displayDate = document.querySelector("#date");
const earningForm = document.querySelector('.earn-form');
const submitEarning = document.querySelector('#submit');
const income =document.querySelector('#income');
const source = document.querySelector('#source');
const incomeCross = document.querySelector('#incomeCross');
const spendForm = document.querySelector('.spend-form');
const spending = document.querySelector('#spending');
const spendSource = document.querySelector('#spendSource');
const spendMonth = document.querySelector('#spendMonth');
const spendSubmit = document.querySelector('#spendSubmit');
const spendCross = document.querySelector('#spendCross');
const currencyForm = document.querySelector('.currency');
const currency = document.querySelector('#currency');
const currencyCross = document.querySelector('#currencyCross');
const amount = document.querySelector('#amount');
const check = document.querySelector('.check');
const inputCurrency = document.querySelector('#inputCurrency');
const convert = document.querySelector('#convert');
const Transaction = document.querySelector('#Transaction');
const dark = document.querySelector('#dk');
const settings = document.querySelector('#settings');
const logout = document.querySelector('#logout');
const reset = document.querySelector('#reset');
const totalSaving = document.querySelector('#totalSaving');
const feedback = document.querySelector('#feedback');
const feedbackForm = document.querySelector('.feedback');
const feedCross = document.querySelector('#feedCross');
const suggestion = document.querySelector('#suggestion');
const feedbackSubmit = document.querySelector('#fSubmit');const register = document.querySelector('#register');
const card = document.querySelector('.card1');
const registerCard = document.querySelector('.card')
const body = document.querySelector('body');
const sign = document.querySelector('#sign');
const user = document.querySelector('#user');
const password = document.querySelector('#password');
const signBtn = document.querySelector('#signin')
const loginUser = document.querySelector('#loginUser');
const loginPassword = document.querySelector('#loginPassword');
const loginBtn = document.querySelector('#login');
const dashboard = document.querySelector('.dashboard');
const name = document.querySelector('#name');
const nameRightNav = document.querySelector('#name1');
register.addEventListener("click",()=>{
  card.style.display='flex';
  registerCard.style.display='none';
})
sign.addEventListener('click',()=>{
  card.style.display='none';
 registerCard.style.display='flex';
})
let details = [];

signBtn.addEventListener('click',()=>{
  let id = 0;
  let userDetails = {
  id:++id,
  username:user.value.trim(),
  userPassword:password.value.trim(),
};
if((user.value ==''|| password.value =='')){
  alert('Enter both values');
}else{
   details.push(userDetails);
  localStorage.setItem('data',JSON.stringify(details));
}

alert('Registration SuccessFully!');
card.style.display = 'none';
registerCard.style.display = 'flex';
  
   
 
})
let dataVerify;
let dataCheck = localStorage.getItem('data');
if(dataCheck !== null){
   dataVerify = JSON.parse(dataCheck);
}else{
  alert('I have no data!');
}




let checkUsers = [];
loginBtn.addEventListener("click",()=>{
  checkUsers = dataVerify.find((user) =>{
   return( loginUser.value === user.username && loginPassword.value === user.userPassword
   );
      
    
  })
  if(checkUsers){
    localStorage.setItem('currentUser',JSON.stringify(checkUsers));
    registerCard.style.display = 'none';
    dashboard.style.display = 'grid';
 }
  
 let dataName = localStorage.getItem('currentUser');
 let checkData = JSON.parse(dataName);
 name.textContent = `Welcome back,${checkData.username} 👋`;
 nameRightNav.textContent = `${checkData.username}`;
 
 
 
 
 
  
  
  
});
function liveTime(){
  const now = new Date();
  displayDate.textContent = now.toLocaleDateString("en-US",{
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});
displayTime.textContent = now.toLocaleTimeString("en-US",{
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});
}
liveTime();
setInterval(liveTime,1000);


let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Income",
      data: [],
      borderWidth: 1,
      backgroundColor: '#DAD',
      maintainAspectRatio: false,
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  }
});

let chartSpending = new Chart(ctx1, {
  type: "pie",
  data: {
    labels: [],
    datasets: [{
      label: "Spending",
      data: [],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  }
});
let chartTransaction = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Income","Expense"],
    datasets: [{
      label:"CashFlow",
      data: [],
      backgroundColor: '#eff2f3',
      borderRadius: 8,
      borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  }
  
});
earn.addEventListener("click",()=>{
  earningForm.style.display = 'flex';
})

submitEarning.addEventListener("click",()=>{
  const earnDate = new Date(earnMonth.value);
  let incomeMonth = earnDate.toLocaleDateString('en-Us',{
    month:"long",
  });
  let allIncome = localStorage.getItem("incomeData");
  if(allIncome === null){
    allIncome = [];
  }else{
   allIncome = JSON.parse(allIncome);
  }
  
  allIncome.push(
    {
    income:Number(income.value),
    month:`${incomeMonth}`,
  }
  );
  
  localStorage.setItem('incomeData',JSON.stringify(allIncome));
 


  const storeData = localStorage.getItem("incomeData");
  let incomeArray = storeData?JSON.parse(storeData):[];
  incomeArray.forEach((item)=>{
    chart.data.labels.push(item.month);
    chart.data.datasets[0].data.push(item.income);
    chart.update();
})
if(income.value !== '' && month.value !== ''){
     earningForm.style.display = 'none';
  }else{
    alert("Please enter the value!");
  }
  earningForm.style.display = 'none';
  income.value = '';
  earnMonth.value = '';
  source.value = '';
  
});

incomeCross.addEventListener("click",()=>{
 earningForm.style.display = 'none';
 
})
spend.addEventListener("click",()=>{
  spendForm.style.display = 'flex';
})
spendSubmit.addEventListener("click",()=>{
  const spendDate = new Date(spendMonth.value);
  let spendMonthDetail = spendDate.toLocaleDateString('en-Us',{
    month:"long",
  });
  
  let allSpending = localStorage.getItem("spendData");
  if(allSpending === null){
    allSpending = [];
  }else{
   allSpending = JSON.parse(allSpending);
  }
  allSpending.push(
    {
    spend:Number(spending.value),
    monthly:`${spendMonthDetail}`,
  }
);
  localStorage.setItem('spendData',JSON.stringify(allSpending));
  const storeSpending = localStorage.getItem("spendData");
  let spendArray = storeSpending?JSON.parse(storeSpending):[];
  spendArray.forEach((item)=>{
  chartSpending.data.labels.push(item.monthly);
  chartSpending.data.datasets[0].data.push(item.spend);
  chartSpending.update();
  })
  
  
  
  if(spend.value !== '' && spendMonth.value !== ''){
     spendForm.style.display = 'none';
  }
  spend.value = '';
  spendMonth.value = '';
  spendSource.value = '';
});
spendCross.addEventListener("click",()=>{
  spendForm.style.display = 'none';
})

currency.addEventListener("click",()=>{
 currencyForm.style.display = 'flex';
 alert(`You can convert Dirham, Yuan, Yan, Euro and Dollar here!`);
});
convert.addEventListener("click",()=>{
let amountCheck = String(amount.value);
let Dollar = 94.5;
let Yuan = 13.92;
let Yen = 0.58;
let Euro = 108.01;
let Dirham = 25.74;
  switch(inputCurrency.value){
    case("Dollar"):
    check.textContent = `₹${amountCheck*Dollar}`;
    break;
    case("Yuan"):
    check.textContent = `₹${amountCheck*Yuan}`;
    break;
    case("Euro"):
   check.textContent = `₹${amountCheck*Euro}`;;
    break;
    case("Yen"):
    check.textContent = `₹${amountCheck*Yen}`;
    break;
    case("Dirham"):
    check.textContent = `₹${amountCheck*Dirham}`;
  }
 
});

currencyCross.addEventListener("click",()=>{
  currencyForm.style.display='none';
});
Transaction.addEventListener("click",()=>{
  let totalSave;
  const storeIncome = localStorage.getItem("incomeData");
  const storeSpending = localStorage.getItem("spendData");
  let incomeArray = storeIncome?JSON.parse(storeIncome):[];
  let spendArray = storeSpending?JSON.parse(storeSpending):[];
  let totalIncome = incomeArray.reduce((acc,item)=>acc+item.income,0);
  let totalSpending = spendArray.reduce((acc,item)=>acc+item.spend,0);
  chartTransaction.data.datasets[0].data.splice(0,2,totalIncome,totalSpending);
  console.log(chartTransaction.data.datasets[0].data);
  chartTransaction.update();
  totalSave = totalIncome - totalSpending;
  totalSaving.textContent = `₹${totalSave}`;
  
});
dark.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
});
settings.addEventListener("click",()=>{
  alert("Settings are not available yet!");
});
reset.addEventListener("click",()=>{
  localStorage.removeItem('incomeData');
  localStorage.removeItem('spendData');
  chart.update();
  chartSpending.update();
  chartTransaction.update();
   
});
feedback.addEventListener('click',()=>{
  feedbackForm.style.display = 'flex';
})
feedCross.addEventListener('click',()=>{
  feedbackForm.style.display = 'none';
})
feedbackSubmit.addEventListener("click",()=>{
    localStorage.setItem('suggest',JSON.stringify(suggestion.value));
    feedbackForm.style.display = 'none';
});
logout.addEventListener("click",()=>{
  dashboard.style.display = 'none';
  registerCard.style.display = 'flex';
})