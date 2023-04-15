import Decimal from 'decimal.js';
import { Erc20 } from './Erc20';
import { Derivative } from './Derivative';

export class TokenBalance {
  public readonly token: Erc20 | Derivative;
  public readonly balance: Decimal;
  constructor(token: Erc20 | Derivative, balance: Decimal) {
    this.token = token;
    this.balance = balance;
  }
}
