import { Erc20 } from './Erc20';
import { Decimal } from 'decimal.js';
import { TokenBalance } from './TokenBalance';
import { Protocol } from './Protocol';

export class Derivative extends Erc20 {
  public readonly protocol: Protocol;
  public readonly underlyings: TokenBalance[];
  public readonly totalSupply: Decimal;
  public readonly APY: Decimal;
  public readonly TVL: Decimal;
  public readonly type: string;

  constructor(
    address: string,
    symbol: string,
    name: string,
    decimals: Decimal,
    protocol: Protocol,
    logo: string,
    underlyings: TokenBalance[],
    totalSupply: Decimal,
    APY: Decimal,
    TVL: Decimal,
    type: string,
  ) {
    const price = underlyings
      .reduce((accumulator: Decimal, currentValue: TokenBalance): Decimal => {
        const tokenValue = currentValue.balance
          .times(currentValue.token.price)
          .div(new Decimal(10).pow(currentValue.token.decimals));
        return accumulator.plus(tokenValue);
      }, new Decimal(0))
      .div(decimals.div(new Decimal(10).pow(decimals)));
    super(address, symbol, name, decimals, price, logo);
    this.protocol = protocol;
    this.underlyings = underlyings;
    this.totalSupply = totalSupply;
    this.APY = APY;
    this.TVL = TVL;
    this.type = type;
  }
}
