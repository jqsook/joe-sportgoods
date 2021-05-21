export class Form{
    constructor(name, description, price, quantity, img = 'placehold.it/200x200') {
        this.name = name
        this.description = description
        this.price = price
        this.quantity = quantity
        this.img = img
    }
    
    get Template() {
        return /*html*/`
        <div class="container">
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col-md-7">
      <div class="form d-flex justify-content-between">
        <div class="image">
          <img src="${this.img}">
        </div>
        <form action="" class="my-form">
          <h4 class="font-weight-bold mb-3">Log in to your account</h4>
          <p class="mdb-color-text">To log in, please fill in these text fiels with your e-mail address and password.</p>
          <!-- Email address -->
          <div class="md-form md-outline">
            <i class="fas fa-envelope prefix"></i>
            <input type="email" id="emailExample" class="form-control">
            <label for="emailExample">E-mail address</label>
          </div>
          <!-- Password -->
          <div class="md-form md-outline">
            <i class="fas fa-lock prefix"></i>
            <input type="password" id="passwordExample" class="form-control">
            <label for="passwordExample">Password</label>
          </div>
          <div class="space">
            <div class="float-right">
              <button class="btn btn-rounded" type="button">Log in</button>
            </div>
          </div>
          <hr>
          <a class="link" href="#!">Forgot password? Click here.</a>
        </form>
      </div>
    </div>
  </div>
</div>
        `
    }
}