import Item from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
   /** @type {Value[]} */
  values = []
  
  money = 0
  
  cart = 0
  
  /** @type {Item[]} */
  items = [new Item("lure-ylw", "yellow-lure", 5, 10, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lVavw7gCg5zYjxR-Df6DrLr-jPOYQTYXOA&usqp=CAU'), new Item("lure-small-fish", "small-fish", 5, 10, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSPTYq2z1fLwJq2itV7XfNZDfXEzIATZhJ7D2FALgGbVWjKH8Q-pVcAu3wqd8k_oZPmY&usqp=CAU'), new Item("lure-black", "black lure", 5, 10, 'https://i.pinimg.com/originals/58/d8/2c/58d82cbd3e1a54b1f4f7fa966689ce3e.jpg'), new Item("spoon-red", "red spoon", 8, 20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZ8ggQIj-BGqObXpfrSeyyRxYlekerVIqpg&usqp=CAU'), new Item("grn-frog", "green frog", 15, 25, 'https://storage.googleapis.com/bol-cdn/2020/03/Frog.png'), new Item("lure-grn", "green lure", 2, 200, 'https://cdn.shopify.com/s/files/1/1915/8001/files/trout-fishing-lures_pic3_trans_large.png?v=1521814400'), new Item("fishing-pole", "fish pole", 200, 50, 'https://spng.pngfind.com/pngs/s/61-617943_profishiency-6ft-8in-realtree-orange-spinning-combo-fishing.png'), new Item("bass-boat", "boat", 8500, 2, 'https://i.pinimg.com/236x/3f/1d/d4/3f1dd468ded879ab153f44648d969334--bass-boat-bass-fishing.jpg')]
}





export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
