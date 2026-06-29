
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
const income =document.querySelector('#income')
const source = document.querySelector('#source');
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

new Chart(ctx1, {
  type: "pie",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Spending",
      data: [500, 67, 900, 345, 567, 789],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});
new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [{
      label:"CashFlow",
      data: [45, 70, 30],
      backgroundColor: '#eff2f3',
      borderRadius: 8,
      borderSkipped: false
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
earn.addEventListener("click",()=>{
  earningForm.style.display = 'flex';
})
function addIncome(income) {
  chart.data.datasets[0].data.push(income);

  chart.update(); 
}

submitEarning.addEventListener("click",()=>{
  let checkIncome;
  // chart.data.datasets[0].data.push(Number(income.value));
  const earnDate = new Date(earnMonth.value);
  let incomeMonth = earnDate.toLocaleDateString('en-Us',{
    month:"long",
  });
  let allIncome = localStorage.getItem("incomeData");
  if(allIncome === null){
    allIncome = [];
  }else{
   checkIncome = JSON.parse(allIncome);
  }
  // chart.data.labels.push(month.push);
  // chart.update();
  
  checkIncome.push(
    {
    income:Number(income.value),
    month:`${incomeMonth}`,
  }
  );
  
  localStorage.setItem('incomeData',JSON.stringify(checkIncome));
 


  const storeData = localStorage.getItem("incomeData");
  let incomeArray = storeData?JSON.parse(storeData):[];
  incomeArray.forEach((item)=>{
    chart.data.labels.push(item.month);
    chart.data.datasets[0].data.push(item.income);
    chart.update();

     earningForm.style.display = 'none';
  income.value = '';
  earnMonth.value = '';
  source.value = '';
  })
})


