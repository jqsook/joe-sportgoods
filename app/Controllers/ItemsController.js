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

function drawForm(){
  let template = ''
  ProxyState.items.forEach(i => template += i.Template)
  document.getElementById('cart-form').innerHTML = template
}

//Public
export default class ItemsController {
  constructor() {
    console.log("You are in the items control")
    ProxyState.on('money', drawMoney)
    ProxyState.on('items', drawItems)
    // ProxyState.on('cart', drawForm)
    drawMoney()
    drawItems()
    // drawForm()
  }
    
  addMoney() {
    console.log("Money button worked");
    itemsService.addMoney()
  }
  addCart() {
    console.log("Cart button worked in Controller");
    itemsService.addCart()
  }
      
  purchaseItem(itemName) {
    itemsService.purchaseItem(itemName)
  }
      
  drawForm() {
    let template = " "
    ProxyState.items.forEach(item => {
      template += /*html*/`
        <div class ="col-lg-4 my-3">  
        <div class = "card">
          <div><img src="${item.img}" height="200"/>
          </div>
          <div class="card-body">
          <p>
          <b>${item.name} - ${item.quantity}</b>
          </p>
          <p>
          <em>${item.price}</em>
          </p>
          </div>
      </div>
      </div>
      `
    })
  }
}
  // addCart() {
  //   event.preventDefault()
    // console.log(event) //For testing to see what happens before prevent default.  Should see submit event in the console.

    // // THis is for taking info from the forms
    // let form = event.target
    // let formData = {
    //   make: form.make.value,
    //   model: form.model.value,
    //   price: form.price.value,
    //   color: form.color.value,
    //   miles: form.miles.value,
    //   img: form.img.value
    // }
    // console.log(formData)
    // ItemsService.addCar(formData)
    //Dont need to draw as it should update when the page changes
    // form.reset()
//   }
//   showItemForm() {
//     document.getElementById('cart-form').classList.remove('d-none')
//   }
//   showItemForm() {
//     document.getElementById('cart-form').classList.add('d-none')
//   }
// }
  
//   document.getElementById('purchases').innerHTML = template