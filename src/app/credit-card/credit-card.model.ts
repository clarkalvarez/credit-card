export interface App{
    id?:number,
    card_number:string,
    card_holder:string,
    expiration_date:Date,
    cvv:string
    amount:number
}