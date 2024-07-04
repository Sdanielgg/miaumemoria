import { Cartas } from "./cartasModel.js";
let cards=new Cartas(["./images/cards/cat1.jpg","./images/cards/cat1.jpg","./images/cards/cat2.jpg",
    "./images/cards/cat2.jpg","./images/cards/cat3.jpg",
    "./images/cards/cat3.jpg","./images/cards/cat4.jpg","./images/cards/cat4.jpg"],"./images/site_icon.jpg")
let cardList = cards.cartasList.slice(); // Create a copy of the array
let randomizedArray=[]
console.log(cardList)
function randomizeCards(){
    for (let i=0;i<cards.cartasList.length;i++){
        let index=Math.floor(Math.random()*(cards.cartasList.length-1-i))   
        randomizedArray.push(cardList[index])
        cardList.splice(index,1)
        console.log(index)
    }

}
randomizeCards()
function loadTable(){
    let tableBody=document.querySelector("tbody")
    let tableRow=document.createElement("tr")
    for (let x=0;x<cards.cartasList.length;x++){
        let img=document.createElement("img")
        img.id=x+1
        img.src="./images/site_icon.jpg"
        tableRow.appendChild(img)
        
    }
    tableBody.appendChild(tableRow)
 }

loadTable()
let click=0
let cellText
let plays=0
document.querySelectorAll("img").forEach((cell,index)=>{
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
                        console.log("ESPERA")
                    },500)
                })
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

}
)

