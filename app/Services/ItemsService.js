import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";


class ItemsService {
  constructor() {
  console.log('Item service is up');
}
  addMoney(){
    ProxyState.money += 10
    console.log(ProxyState.money);
}
  
purchaseItem(itemName){
    let foundItem = ProxyState.items.find(i => i.name == itemName)
    console.log(foundItem);
    if(ProxyState.money >= foundItem.price && foundItem.quantity > 0){
      ProxyState.money -= foundItem.price
      foundItem.quantity--
      ProxyState.items = ProxyState.items 
    } else {
      window.alert("Insufficient Funds")
    }
  }
  
  
  addCart(formData) {
    new Item(formData.make, formData.model, formData.model, formData.miles, formData.color, formData.price, formData.img)
    ProxyState.items.unshift(newItem) 
    ProxyState.items = ProxyState.cars //triggers all the events to occur.
    ProxyState.items = [newItem, ...ProxyState.items] //Use this if you dont want to use the unshift. THis way expands the array out. Called the spread operator (...) its the 3 dots.
  }
  
}

  export const itemsService = new ItemsService()

