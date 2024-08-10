import { Entity } from "./core/Entity"

export interface TransactionProps {
    value: string
    destinationAccountId: string
    originAccountId: string
}

export class Transaction extends Entity<TransactionProps>  {
    public value: string
    public destinationAccountId: string
    public originAccountId: string
    public constructor (props: TransactionProps) {
        super()
        this.value = props.value
        this.destinationAccountId = props.destinationAccountId
        this.originAccountId = props.originAccountId
    }
}