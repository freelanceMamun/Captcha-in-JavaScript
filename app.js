const captcha = document.querySelector(".captcha");
const reloadBtn = document.querySelector(".reload-btn");
const  inputfalid = document.querySelector(".input_area input");
const checkbtn  = document.querySelector(".check-btn");
const statusber  = document.querySelector(".Status_text");
let allCharecters =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ,"a","b" ,"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ,0,1,2,3,4,5,6,7,8,9] ;


function getRandomCaptcha(){
    for(let i = 0 ; i < 6 ; i++){
        let randomCaptcha  =  allCharecters[Math.floor(Math.random() * allCharecters.length)];
        captcha.innerText += ` ${randomCaptcha}` ;
        
    }
}
reloadBtn.addEventListener("click",()=>{
    captcha.innerText  = "";
    getRandomCaptcha();
    inputfalid.value = "";
})

checkbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    statusber.style.display = "block"
    let inputvalid = inputfalid.value.split("").join(' ');
     if(inputvalid == captcha.innerText){
        statusber.style.color = "#17f717cb"
        statusber.innerHTML = "Captch is match."
        setTimeout(() => {
            statusber.style.display = "" ;
            inputfalid.value = "" ;
            captcha.innerText = "" ;
            getRandomCaptcha();
        }, 4000);

     }else{
        statusber.innerHTML=  "Captch not match. Please try again"
     }
})