import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js"

function drawMoney() {
  document.getElementById('money').innerText = ProxyState.money
}

function drawItems(){
  let template = ''
  ProxyState.items.forEach(i => template += i.Template)
  document.getElementById('items').innerHTML = template
}

//Public
export default class ItemsController {
   constructor() {
    console.log("You are in the items control")
    ProxyState.on('money', drawMoney)
    ProxyState.on('items', drawItems)
    drawMoney()
    drawItems() 
    }
     
    addMoney(){
      console.log("button worked"); 
      itemsService.addMoney()
      }
      
      purchaseItem(itemName){   
        itemsService.purchaseItem(itemName)
      }
      
    }
