
// Ibrahim Aminu

let user_score = 0 ;
let bot_score = 0 ;
let tie_score = 0;

let game_status ;






function reg(){

  event.preventDefault();
    let name = document.querySelector('.name').value;
    let user = document.querySelector('.user').value;
    let pass = document.querySelector('.pass').value;

    localStorage.setItem("name",name);
    localStorage.setItem("user",user);
    localStorage.setItem("pass",pass);



    //window.location.href="signin.html"

    let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.user==user}))
{
  alert("duplicate data");
}


else if ( (pass == "")   )    {
  alert("Invalid Credentials")
}

else
{
  user_records.push({
   
  "name":name,
  "user":user,
  "pass":pass
  

}  
)


localStorage.setItem("users",JSON.stringify(user_records));
window.location.href="signin.html";
alert("Register Success");

}


}


function signIn() {
  event.preventDefault();

   
    let user = document.querySelector('.user').value;
     let pass = document.querySelector('.pass').value;

console.log(user,pass)

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.user==user && v.pass==pass}))
{
  alert("Login Pass");
  let current_user=user_records.filter((v)=>{return v.user==user && v.pass==pass})[0]
 localStorage.setItem('user',current_user.name);
 localStorage.setItem('pass',current_user.email);
  window.location.href="index.html"
}
else
{
  alert('Login Fail');
  
  
}

   


}











const selections = document.querySelectorAll(".selections")
// Capturing user click 
selections.forEach((selection) => {
    selection.addEventListener("click", function () {
      const pInput = this.textContent;


     

        promptPlay(pInput);

    
    });
  });



// Gets Computer selection with random function
function rdmInteger(max){
    return Math.floor(Math.random() * max);
}

let user;




function promptPlay(user_turn){
  
    
    
    
  
    
    

  
    
let bot_turn = rdmInteger(3);








if ((user_turn == "rock" && bot_turn == "0") || (user_turn == "paper" && bot_turn == "1") || (user_turn == "scissors" && bot_turn == "2")  )  {
    console.log(`Game tied User chose ${user_turn} and Bot chose ${bot_turn}`);
   
   tie_score =tie_score + 1;
   document.getElementById("tie").innerHTML = tie_score  ;
   document.getElementById("game_status").innerHTML = "Round Tied!"  ;
   console.log(`Round Over 
   Scores:
   User : ${user_score}
   Bot  : ${bot_score}
   Ties : ${tie_score}`);
   


   
   
 
}


//scissors rock
else if (user_turn == "scissors" && bot_turn == "0")  {
  
    bot_score = bot_score + 1;
    console.log("Bot Wins");
    console.log(` ${user_turn} User chose Scissors and Bot chose Rock ${bot_turn}`);
    console.log(`Bot Score :${bot_score}`);

    document.getElementById("bscore").innerHTML = bot_score  ;
    document.getElementById("game_status").innerHTML = "Bot Wins!"  ;

  

    console.log(`Round Over 
           Scores:
           User : ${user_score}
           Bot  : ${bot_score}
           Ties : ${tie_score}`);

       
          
   
}

//rock scissors
else if (user_turn == "rock" && bot_turn == "2")  {
    
    user_score = user_score + 1;
    console.log("User Wins");
    console.log(` ${user_turn} User chose Rock and Bot chose Scissors ${bot_turn}`);
    console.log(`User Score :${user_score}`);
    document.getElementById("uscore").innerHTML = user_score  ;
    document.getElementById("game_status").innerHTML = "User Wins!"  ;


    console.log(`Round Over 
    Scores:
    User : ${user_score}
    Bot  : ${bot_score}
    Ties : ${tie_score}`);


           
  
}



//rock paper
else if (user_turn == "rock" && bot_turn == "1")  {

    bot_score = bot_score + 1;
    console.log("Bot Wins");
    console.log(` ${user_turn} User chose Rock and Bot chose Paper ${bot_turn}`);
    console.log(`Bot Score :${bot_score}`);
    document.getElementById("bscore").innerHTML = bot_score  ;
    document.getElementById("game_status").innerHTML = "Bot Wins!"  ;


    console.log(`Round Over 
    Scores:
    User : ${user_score}
    Bot  : ${bot_score}
    Ties : ${tie_score}`);


          
   
}

//paper rock
else if (user_turn == "paper" && bot_turn == "0")  {
   
    console.log("User Wins");
    console.log(` ${user_turn} User chose Paper and Bot chose Rock ${bot_turn}`);
    console.log(`User Score :${user_score}`);
    user_score = user_score + 1;
   document.getElementById("uscore").innerHTML = user_score  ;
   document.getElementById("game_status").innerHTML = "User Wins!"  ;


    console.log(`Round Over 
           Scores:
           User : ${user_score}
           Bot  : ${bot_score}
           Ties : ${tie_score}`);


           
  
}

//paper scissors
else if (user_turn == "paper" && bot_turn == "2")  {
   
    console.log("Bot Wins");
    console.log(` ${user_turn} User chose Paper and Bot chose Scissors ${bot_turn}`);
    console.log(`Bot Score :${bot_score}`);
    bot_score = bot_score + 1;
    document.getElementById("bscore").innerHTML = bot_score  ;
    document.getElementById("game_status").innerHTML = "Bot Wins!"  ;


    console.log(`Round Over 
           Scores:
           User : ${user_score}
           Bot  : ${bot_score}
           Ties : ${tie_score}`);

        
   
}
//scissors paper
else if (user_turn == "scissors" && bot_turn == "1")  {
 

    console.log("User Wins");
    console.log(` ${user_turn} User chose Scissors and Bot chose Paper ${bot_turn}`);
    console.log(`User Score :${user_score}`);
    user_score = user_score + 1;
    document.getElementById("uscore").innerHTML = user_score  ;
    document.getElementById("game_status").innerHTML = "User Wins!"  ;


    console.log(`Round Over 
           Scores:
           User : ${user_score}
           Bot  : ${bot_score}
           Ties : ${tie_score}`);

         
  
}



 
if(user_score == 10 ) {
    
    console.log("Game Over");
  
      console.log(`Game Over Final Results
    
            Scores:
            User : ${user_score}
            Bot  : ${bot_score}
            Ties : ${tie_score}`);

            alert("User Won ");
            window.location.href="index.html"

}

if(bot_score == 10 ) {
    console.log("Game Over");
    console.log("Bot Wins Wins");
      console.log(`Game Over Final Results
    
            Scores:
            User : ${user_score}
            Bot  : ${bot_score}
            Ties : ${tie_score}`);

        alert("Bot Won ");
        window.location.href="index.html"
 

}
 

   
    
 




}



