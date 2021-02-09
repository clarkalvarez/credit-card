import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as appActions from "../state/app.action";
import * as fromApp from "../state/app.reducer";
import { App } from "../credit-card.model";
@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss']
})
export class AddCreditCardComponent implements OnInit {
  cardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromApp.AppState>
    ) {}

  ngOnInit() { 

    this.cardForm = this.fb.group({
      card_number: ["", Validators.requiredTrue],
      card_holder: ["", Validators.requiredTrue],
      expiration_date: ["", Validators.requiredTrue],
      cvv: ["",[ Validators.required,Validators.maxLength(3)]],
      amount: ["", Validators.requiredTrue]
    });
  }

  createCard() {
    const newCard: App = {
      card_holder: this.cardForm.get("card_holder").value,
      card_number: this.cardForm.get("card_number").value,
      expiration_date: this.cardForm.get("expiration_date").value,
      cvv: this.cardForm.get("cvv").value,
      amount: this.cardForm.get("amount").value
    };

    var validateResponse =this.validateInput(newCard)
    
    if(validateResponse == "Added Credit Card Completed")
    {
    this.store.dispatch(new appActions.CreateApp(newCard));
    this.cardForm.reset();

    }
    alert(validateResponse)
  }

    validateInput(obj){
      var d = new Date()
      var currentDate = this.formatDate(d)

      if(!obj.card_holder || !obj.card_number ||!obj.expiration_date  ||!obj.amount  )
      {
        return "Please Complete All Fields"
      }
     else if(obj.expiration_date < currentDate)
     {
      return "Expiration Date Invalid"
     }
     else if(obj.cvv && obj.cvv.length <3)
     {
      return "CVV should be 3 character"
     }
     else if(obj.amount == 0)
     {
      return "Amount should be greater that 0"
     }
     


      return "Added Credit Card Completed"
  }

 formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

 

}
