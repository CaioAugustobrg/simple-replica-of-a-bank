import { Account, AccountProps } from "../entities/account";

export interface AccountRepository {
    create: (data: AccountProps) => Promise<Account | null>
}