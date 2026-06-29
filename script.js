const register = document.querySelector('#register');
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




let checkUsers;
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
 
  
  
  
})






