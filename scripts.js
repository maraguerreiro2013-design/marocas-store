const prevbutton = document.getElementById('prev')
const nextbutton = document.getElementById ('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')
const btn= document.querySelector('button').style.cursor = 'pointer';

let active =0;
const total = items.length
let timer ;



function update (direction){
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')


    if( direction > 0){
        active = active + 1
       
        if (active=== total){
            active = 0
        }

    } 
    
    else if( direction < 0){
        active = active -1

        if (active <0 ){
            active = total -1
        }
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicator.textContent = String (active + 1).padStart(2,'0')
}

   
setInterval(()=>{
    update (1)
},5000)

prevbutton.addEventListener('click',() =>{
    update (-1)
 })
 nextbutton.addEventListener('click',() => {
   update ( 1)
 })



// quando vai trocar let ou const quando vai ser costante