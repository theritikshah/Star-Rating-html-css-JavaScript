var modal = document.getElementsByClassName("modal")[0];
var rateBtn  = document.querySelector(".rate-button");
var submitBtn  = document.querySelector(".submit-button");
var span = document.getElementsByClassName("close")[0];
var rateModel = document.getElementsByClassName("rating-modal")[0];
var rateNum = document.getElementsByClassName("rate-number");
// console.log(rateNum);
rateBtn.onclick = ()=> {
    modal.style.display = "flex";
}
window.onclick = function (event){

    if(event.target == modal){
        modal.style.display = "none";
    }
}

span.onclick = function() {
    modal.style.display = "none";
  }

//   var thnkx = ;







var numClick = (e)=> {
    (()=>{for(const e of rateNum){e.classList.remove("numSelected")}})();
    e.target.classList.toggle("numSelected");
    submitBtn.onclick = () => {
  
        rateModel.innerHTML =  '   <div class="thnks" style="display: flex;flex-direction: column; align-items:center;"  > '+
        ' <img style="margin: auto;" src="./Resource/interactive-rating-component-main/images/illustration-thank-you.svg" alt="Thank you Image" />'+
         
         '<span class="rateCount">'+'You have selected '+e.target.innerHTML+' out of 5'+'</span>'+
         '<h1 style="text-align: center; margin-bottom: 0;">Thank You!</h1>'+
         '<p style="text-align: center;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae'+
           'maiores nobis similique, doloremque qui iusto sapiente ducimus.</p>'+
       '</div>';
        
     
     }
   
    // rateCount.innerText = `You have selected ${rate} out of 5`;

    }
    
       for(const element of rateNum){
            element.addEventListener("click", numClick)
          
       }

 