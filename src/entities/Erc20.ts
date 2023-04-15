// src/entities/Token.ts

import Decimal from 'decimal.js';

export class Erc20 {
  constructor(
    public readonly address: string,
    public readonly symbol: string,
    public readonly name: string,
    public readonly decimals: Decimal,
    public readonly price: Decimal,
    public readonly logo: string,
  ) {}
}
