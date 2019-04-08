var box = document.querySelectorAll(".box");
var reset = document.getElementById("reset");
var display_winner = document.querySelector("h3");
var num_box = box.length;
var sign = "O";
for(var i=0; i<num_box; i++)
{
  box[i].addEventListener("click", function(){
    if(sign==="O" && this.innerHTML===""){
      this.innerHTML = "X";
      sign = "X";
      checkwin();

    }
    else {
      if(this.innerHTML===""){
        this.innerHTML = "O";
        sign = "O";
        checkwin();

      }
    }
  })
}

function checkwin(){
  //horizontal
  if(box[0].innerHTML==="O" && box[1].innerHTML==="O" &&box[2].innerHTML==="O"){
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[3].innerHTML==="O" && box[4].innerHTML==="O" &&box[5].innerHTML==="O"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[6].innerHTML==="O" && box[7].innerHTML==="O" &&box[8].innerHTML==="O"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[0].innerHTML==="X" && box[1].innerHTML==="X" &&box[2].innerHTML==="X"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[3].innerHTML==="X" && box[4].innerHTML==="X" &&box[5].innerHTML==="X"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[6].innerHTML==="X" && box[7].innerHTML==="X" &&box[8].innerHTML==="X"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }

  //vertical
  if(box[0].innerHTML==="O" && box[3].innerHTML==="O" &&box[6].innerHTML==="O"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[1].innerHTML==="O" && box[4].innerHTML==="O" &&box[7].innerHTML==="O"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[2].innerHTML==="O" && box[5].innerHTML==="O" &&box[8].innerHTML==="O"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[0].innerHTML==="X" && box[3].innerHTML==="X" &&box[6].innerHTML==="X"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[1].innerHTML==="X" && box[4].innerHTML==="X" &&box[7].innerHTML==="X"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[2].innerHTML==="X" && box[5].innerHTML==="X" &&box[8].innerHTML==="X"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }

  //diagonal
  if(box[0].innerHTML==="O" && box[4].innerHTML==="O" &&box[8].innerHTML==="O"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[0].innerHTML==="X" && box[4].innerHTML==="X" &&box[8].innerHTML==="X"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }

  if(box[2].innerHTML==="O" && box[4].innerHTML==="O" &&box[6].innerHTML==="O"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }
  if(box[2].innerHTML==="X" && box[4].innerHTML==="X" &&box[6].innerHTML==="X"){
    alert("you win");
    display_winner.innerHTML = "Player with " + sign + " wins";

  }

}

reset.addEventListener("click", function(){
  box[0].innerHTML = "";
  box[1].innerHTML = "";
  box[2].innerHTML = "";
  box[3].innerHTML = "";
  box[4].innerHTML = "";
  box[5].innerHTML = "";
  box[6].innerHTML = "";
  box[7].innerHTML = "";
  box[8].innerHTML = "";
  sign= "O";
  display_winner.innerHTML = "";

})
