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
      window.alert("y u no has $??")
    }
  }
    }


    export const itemsService = new ItemsService();

