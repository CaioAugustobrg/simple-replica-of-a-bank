import { Entity } from "./core/Entity"

export interface AccountProps {
    
    balance: string
}

export class Account extends Entity<AccountProps>  {
    public balance: string
    public constructor (props: AccountProps) {
        super()
        this.balance = props.balance
        
    }
}