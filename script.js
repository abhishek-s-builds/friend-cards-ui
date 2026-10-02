
let btn=document.querySelectorAll(".add");

btn.forEach(function(button){
    let v=0;

    button.addEventListener("click",function(){

        let card=button.parentElement.parentElement;
        let status=card.querySelector("h5");

        if(v==0){
          status.textContent="Friends";
          status.style.color="green";
          button.textContent="Remove Friend";
          button.style.backgroundColor="red";
          v=1;
        }
        else
        {
          status.textContent="Stranger";
          status.style.color="red";
          button.textContent="Add Friend";
          button.style.backgroundColor="cadetblue";
          v=0;
        }
    });
});

