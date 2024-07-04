import { Cartas } from "./cartasModel.js";
let cards=new Cartas(["./images/cards/cat1.jpg","./images/cards/cat2.jpg","./images/cards/cat3.jpg","./images/cards/cat4.jpg"],"./images/site_icon.jpg")

let randomizedArray=[]
let dupeArray=cards.cartasList.slice()
let cardList=cards.cartasList.slice()
cardList.push(...dupeArray)

function randomizeCards(){
    for (let i=0;i<cards.cartasList.length*2;i++){
        let index=Math.floor(Math.random()*((cards.cartasList.length*2)-1-i))   
        randomizedArray.push(cardList[index])
        cardList.splice(index,1)
    }
    console.log(randomizedArray)
}
randomizeCards()
function loadTable(){
    let tableBody=document.querySelector("tbody")
    let tableRow=document.createElement("tr")
    for (let x=0;x<cards.cartasList.length*2;x++){
        let img=document.createElement("img")
        img.id=x+1
        img.src="./images/site_icon.jpg"
        tableRow.appendChild(img)
        
    }
    tableBody.appendChild(tableRow)
 }

loadTable()
imgClick()
let click=0
let cellText
let plays=0
let modal=document.getElementById("winMessage")

function checkWin(){
    let x=0
    document.querySelectorAll("img").forEach(cell=>{
      if (cell.id==0){
        console.log(cell.id)
        x++
      }
      if(x==8){
        modal.style.display="flex"
      }
    })
    console.log(x)
}
let closeBtn=document.getElementById("close")
closeBtn.addEventListener("click",()=>{
    modal.style.display="none"
})
let restartBtn=document.getElementById("restart")
restartBtn.addEventListener("click",()=>{
    window.location.reload()
})
function imgClick(){
    document.querySelectorAll("img").forEach((cell,index)=>{
        setTimeout(()=>{
             if(cell.id!=0){
                cell.addEventListener("click",()=>{
            plays+=1
            console.log("plays:"+plays)
            if (click==0){
                click=1
                cell.src=randomizedArray[index]
                cellText=cell.src
                console.log(click)
            }else if (click==1){
                cell.src=randomizedArray[index]
                if(cell.src==cellText){
                    document.querySelectorAll("img").forEach(cellx=>{
                        if (cellx.src==cellText){
                            cellx.style.border=" 2px solid purple"
                            console.log(cellx)
                            cellx.id=0
                            click=0
                        }
                        setTimeout(()=>{
                            console.log("ESPERA");
    
                        },500)
                        })
                    checkWin()
                    console.log("checking win")
                }else{
                    click=0
                    cell.src=randomizedArray[index]
                   setTimeout(()=>{
                        document.querySelectorAll("img").forEach(cell=>{
                            if(cell.src==cellText && cell.id!=0){
                                cell.src="./images/site_icon.jpg"
                            }})
                            cell.src="./images/site_icon.jpg" 
                    },500)
                    console.log(cell.src)
                    console.log(click)
                }
            }
        })
        }
        },500)
    }
    )
}
