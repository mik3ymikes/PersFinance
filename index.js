"use strict"


let moneyButton=document.querySelector(".moneyButton")


let moneyInupt=document.querySelector(".moneyInput")

let title=document.querySelector("h1")

let test=true

let brokeColor=document.querySelector("body")
let audio5=new Audio("wrong.mp3")


let thumbsUp=document.querySelector(".thumbsUp")
let thumbsDown=document.querySelector(".thumbsDown")

let resetButton=document.querySelector(".resetButton")

let itemButton=document.querySelector(".itemButton")
let itemInput=document.querySelector(".itemInput")
let itemsContainer=document.querySelector(".itemsContainer")
let items=document.querySelector(".items")
let checkBox=document.querySelector(".checkBox")
let loading=document.querySelector(".loading")


let counter=false


let colors=["yellow", "blue", "white", "purple", "pink", "orange", "green"]

let track=0

let gameOn=true




function timeEvent (){
    let ranColor=colors[Math.floor(Math.random()*colors.length)]
    title.style.color=ranColor
thumbsUp.style.visibility="hidden"




}


function timeEvent2 (){
    checkBox.checked=false  
    loading.textContent="Resetting ⏳"
    
    
}

function timeEvent3 (){
        
        loading.textContent= "Check to Reset"
        checkBox.style.visibility="hidden"
        loading.style.visibility="hidden"
    }




    
    
    let startingMoney=function(){
        
        // title.style.color="red"
        let spanAmount=document.querySelector(".spanAmount")
        let amountSentence=document.querySelector(".amountSentence")
        let notValid=document.querySelector(".notValid")
        
        
        
        
        
        // while (test==true){ 
            
            
            if (isNaN(moneyInupt.value) || moneyInupt.value=="" || moneyInupt.value<0 ){
        // amountSentence.textContent="That is not a Valid Response. Please Enter an amount of money"
        amountSentence.style.display="none"
        notValid.style.display="block"
        
        
    } 
    
    
    else{ 
        while (test==true){ 
            amountSentence.style.display="block"
            notValid.style.display="none"
            spanAmount.textContent=moneyInupt.value  
            moneyInupt.value=""
            moneyInupt.placeholder="How much is the item you want to buy?"
            moneyInupt.color="red"
            test=false
        } 
        amountSentence.style.display="block"
        notValid.style.display="none"
        spanAmount.textContent-=moneyInupt.value
        
        
        if(spanAmount.textContent<0){
            brokeColor.style.backgroundColor="black"
            // title.textContent="You Can't Buy This!" check back if i wanna do this
            thumbsUp.style.display="none"
            thumbsDown.style.display="block"
            title.textContent=" 😢 YOU CAN'T BUY THIS 😢"
            audio5.play()
            moneyInupt.style.visibility="hidden"
            moneyButton.style.visibility="hidden"
            resetButton.style.visibility="visible"
            gameOn=false
            
            // moneyInupt.placeholder.style.color="red"
            
            
        } else if (spanAmount.textContent>=0 && track!=0){
            setTimeout(timeEvent,300)
            thumbsUp.style.visibility="visible"
            title.textContent=" 🎉 YOU CAN BUY THIS 🎉"
            moneyInupt.value=""
            
            
        } else {
            track++
            
        }
    }
    


    
    resetButton.addEventListener("click", function(){
        title.textContent="💰  Can I Buy This!? 💰"
        moneyInupt.value=0
        moneyInupt.value=""
        moneyInupt.placeholder="How Much Money Do you have? 🤑"
        brokeColor.style.backgroundColor="white"
        thumbsUp.style.display="block"
        thumbsDown.style.display="none"
        moneyInupt.style.visibility="visible"
        moneyButton.style.visibility="visible"
        resetButton.style.visibility="hidden"
        title.style="black"
        track=0
        test=true
        spanAmount.textContent=0
        gameOn=true
        //   console.log(moneyInupt.value)
    })
    }

    
    
    moneyButton.addEventListener("click", startingMoney) 
    
    
    
    
    
    moneyInupt.addEventListener("keypress", function(e) {
        if(gameOn && e.key=="Enter"){
            startingMoney() } 
            
        }
        
        ) 
        
        



let itemContents=function(){
    let paragraph=document.createElement('li')
        if (itemInput.value!==""){
            paragraph.textContent=itemInput.value
            itemsContainer.appendChild(paragraph)
            itemInput.value=""
            checkBox.style.visibility="visible"
            loading.style.visibility="visible"
        } 
        
        paragraph.addEventListener("click", function(){
            paragraph.style.textDecoration="line-through"
        })
        
        
        checkBox.addEventListener("click", function(){
            setTimeout(timeEvent2,150)
            setTimeout(timeEvent3,500)
            paragraph.remove()
        
} 
        )}




    itemButton.addEventListener("click", itemContents)
    
    
    
    
    
itemInput.addEventListener("keypress", function(e) {
    if(e.key=="Enter"){
      itemContents()
    } 
        
    }
    
    ) 
    
    
    
    
    
    console.log("hey")