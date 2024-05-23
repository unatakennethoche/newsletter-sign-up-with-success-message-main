const form=document.getElementById("form");
const submitBtn=document.getElementById("submit-btn");




const validateEmail=(event)=>{
  event.preventDefault();
  const email=document.getElementById("email")
  const emailInput=email.value.trim()
if(!validEmail(emailInput)){
document.querySelector(".error-message").style.display="block"
email.classList.add('invalid-style');
} else{
 form.innerHTML=`
 <div class="success-message">
 <img src="/assets/images/icon-success.svg">
 <h1>
   Thanks for subscribing!
 </h1>
 <p>
   A confirmation email has been sent to <strong>@loremcompany.com.</strong> 
   Please open it and click the button inside to confirm your subscription.
 </p>
<button type="button" id="dismiss-btn">Dismiss message</button>
</div>
` 
}
}

form.addEventListener("submit",validateEmail)

const validEmail=(emailInput)=>{
  const emailRegex=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(emailInput);
}