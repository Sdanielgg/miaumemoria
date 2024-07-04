import { Cartas } from "./cartasModel.js";
let cards=new Cartas(["./images/cards/cat1.jpg","./images/cards/cat1.jpg","./images/cards/cat2.jpg","./images/cards/cat2.jpg","./images/cards/cat3.jpg","./images/cards/cat3.jpg"],"./images/site_icon.jpg")
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
    for (let i=0;i<cards.cartasList.length;i++){
        let cell=document.createElement("td")
        let img=document.createElement("img")
        cell.id=i+1
        img.src="./images/site_icon.jpg"
        cell.appendChild(img)
        tableRow.appendChild(cell)
    }
    tableBody.appendChild(tableRow)
}
loadTable()
let click=0
let cellText
let plays=0
document.querySelectorAll("td").forEach((cell,index)=>{
    if(cell.id!=0){
            cell.addEventListener("click",()=>{
        plays+=1
        console.log("plays:"+plays)
        if (click==0){
            click=1
            cell.innerHTML=`<img src="${randomizedArray[index]}">`
            cellText=cell.innerHTML
            console.log(click)
        }else if (click==1){
            cell.innerHTML=`<img src="${randomizedArray[index]}">`
            if(cell.innerHTML==cellText){
                console.log()
                console.log(cell.innerHTML)
                document.querySelectorAll("td").forEach(cellx=>{
                    if (cellx.innerHTML==cellText){
                        cellx.style.backgroundColor="purple"
                        cellx.id=0
                        click=0
                    }
                    setTimeout(()=>{
                        console.log("ESPERA")
                    },500)
                })
            }else{
                click=0
                cell.innerHTML=`<img src="${randomizedArray[index]}">`
               setTimeout(()=>{
                    document.querySelectorAll("td").forEach(cell=>{
                        if(cell.innerHTML==cellText && cell.id!=0){
                            cell.innerHTML=`<img src="./images/site_icon.jpg">`  
                        }})
                    cell.innerHTML=`<img src="./images/site_icon.jpg">`     
                },500)
                console.log(cell.innerHTML)
                console.log(click)
                     
 
            }
        }
    })
    }

}
)

