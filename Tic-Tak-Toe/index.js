var box = document.querySelectorAll('.box')
var flag=1
for (let i = 0; i < box.length; i++) {
    box[i].onclick=() => {
        if (flag === 1) {
            box[i].innerHTML = 'X'
    
            flag=0
        }
        else {
            box[i].innerHTML = 'O'
    
            flag=1
        }
        checkWinner()
    }
}

var cpu = false
var button = document.getElementById('button')
button.onclick = () => {
    cpu = true
    
    if (cpu === true) {
        console.log(true)
        for (let i = 0; i < box.length; i++) {
            console.log('wadda!')
        
            setInterval(() => {
                if (flag === 1) {
                    let index = Math.floor(Math.random() * box.length - 1)
                    if (box[index].innerHTML === '') {
                        box[index].innerHTML = 'X'
                        
                    }
                    else {
                       Array.from(box).filter(currentBox=>!currentBox.innerHTML)[0].innerHTML = "X"
                    }

                    flag=0
                    
                }
                checkWinner()
            },2000)
            
        }
    }
    

}

var reset = document.getElementById('button-reset')
reset.onclick = () => {
   reseter()
}
function reseter() {
    cpu = false
    for (let i = 0; i < box.length; i++){
        box[i].innerHTML=""
    }
}



function checkWinner() {
    var box0 = document.getElementById('box1').innerHTML
    var box1 = document.getElementById('box2').innerHTML
    var box2 = document.getElementById('box3').innerHTML
    var box3 = document.getElementById('box4').innerHTML
    var box4 = document.getElementById('box5').innerHTML
    var box5 = document.getElementById('box6').innerHTML
    var box6 = document.getElementById('box7').innerHTML
    var box7 = document.getElementById('box8').innerHTML
    var box8 = document.getElementById('box9').innerHTML


    if ((box0 === 'X')
        &&
        (box1 === 'X')
        &&
        (box2 === 'X')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 1 has won!"
            reseter()
        }, 300)
        
    }

    else  if ((box0 === 'X')
    &&
    (box3 === 'X')
    &&
    (box6 === 'X')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 1 has won!"
            reseter()
        }, 300)
        
    }


    
    else  if ((box0 === 'X')
    &&
    (box4 === 'X')
    &&
    (box8 === 'X')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 1 has won!"
            reseter()
        }, 300)
        
    }

    
    else  if ((box1 === 'X')
    &&
    (box4 === 'X')
    &&
    (box7 === 'X')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 1 has won!"
            reseter()
        }, 300)
        
    }

    
    else  if ((box2 === 'X')
    &&
    (box5 === 'X')
    &&
    (box8 === 'X')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 1 has won!"
            reseter()
        }, 300)
        
    }

    
    else  if ((box3 === 'X')
    &&
    (box4 === 'X')
    &&
    (box5 === 'X')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 1 has won!"
            reseter()
        }, 300)
        
    }

    
    else  if ((box6 === 'X')
    &&
    (box7 === 'X')
    &&
    (box8 === 'X')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 1 has won!"
            reseter()
        }, 300)
    
    }


    //player2 win check

    if ((box0 === 'O')
    &&
    (box1 === 'O')
    &&
    (box2 === 'O')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 2 has won!"
            reseter()
        }, 300)
        
    }


    else  if ((box0 === 'O')
    &&
    (box3 === 'O')
    &&
    (box6 === 'O')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 2 has won!"
            reseter()
        }, 300)
        
    }



    else  if ((box0 === 'O')
    &&
    (box4 === 'O')
    &&
    (box8 === 'O')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 2 has won!"
            reseter()
        }, 300)
        
    }


    else  if ((box1 === 'O')
    &&
    (box4 === 'O')
    &&
    (box7 === 'O')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 2 has won!"
            reseter()
        }, 300)
        
    }


    else  if ((box2 === 'O')
    &&
    (box5 === 'O')
    &&
    (box8 === 'O')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 2 has won!"
            reseter()
        }, 300)
        
    }


    else  if ((box3 === 'O')
    &&
    (box4 === 'O')
    &&
    (box5 === 'O')
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 2 has won!"
            reseter()
        }, 300)
        
    }


    else  if ((box6 === 'O')
    &&
    (box7 === 'O')
    &&
    (box8 === 'O')
    )   
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "Player 2 has won!"
            reseter()
        }, 300)
        
    }
    else if(
        (box0 === 'X' || box0 === 'O') && (box1 === 'X' || box1 === 'O') &&
        (box2 === 'X' || box2 === 'O') && (box3 === 'X' || box3 === 'O') &&
        (box4 === 'X' || box4 === 'O') && (box5 === 'X' || box5 === 'O') &&
        (box6 === 'X' || box6 === 'O') && (box7 === 'X' || box7 === 'O') &&
        (box8 === 'X' || box8 === 'O') 
    )
    {
        setTimeout(() => {
            modal.style.display = "block"
            text.textContent = "It's a tie!"
            reseter()
        }, 300)
        
    }
    
}


var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];
var text =  document.getElementById("modal-text")

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



