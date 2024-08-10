import { Transaction, TransactionProps } from "../entities/transaction";

export interface TransactionRepository {
    create: (data: TransactionProps) => Promise<Transaction | null>
}