// src/utils/lpTokenFetcher.ts
import { Erc20 } from '../entities/Erc20';
import { Derivative } from '../entities/Derivative';
import { Decimal } from 'decimal.js';
import { TokenProvider } from '../providers/TokenProvider';
import { TokenBalance } from '@/entities/TokenBalance';
import { Protocol } from '@/entities/Protocol';
import { ProtocolProvider } from '../providers/ProtocolProvider';

function generateRandomNumberAPY(): number {
  return parseFloat((Math.random() * 150).toFixed(2));
}

function generateRandomNumberTVL(): number {
  return parseFloat((Math.random() * 10000000).toFixed(2));
}

export async function fetchDerivativeTokens(): Promise<Derivative[]> {
  const tokenProvider = new TokenProvider();
  const lpTokens = tokenProvider.getDerivatives();
  const underlyingTokens: Derivative[] = [];
  for (let index = 0; index < lpTokens.length; index++) {
    underlyingTokens.push(await fetchDerivativeToken(lpTokens[index].address));
  }
  return underlyingTokens;
}

export async function fetchDerivativeToken(address: string): Promise<Derivative> {
  // static propreties
  const tokenProvider = new TokenProvider();
  const lpTokenDetails = tokenProvider.getDerivativeByAddress(address);
  if (!lpTokenDetails) {
    throw new Error('LP token not found');
  }

  const underlyingTokens: TokenBalance[] = [];
  for (const underlyingTokenAddress of lpTokenDetails.underlyings) {
    const erc20Details = tokenProvider.getTokenBySymbol(underlyingTokenAddress);
    if (!erc20Details) {
      throw new Error(`Underlying token not found for address ${underlyingTokenAddress}`);
    }
    // fetch price from starken
    const price_token_usd: Decimal = new Decimal(1000);
    const user_balance: Decimal = new Decimal(1000);

    underlyingTokens.push(
      new TokenBalance(
        new Erc20(
          erc20Details.address,
          erc20Details.symbol,
          erc20Details.name,
          erc20Details.decimals,
          price_token_usd,
          erc20Details.logo,
        ),
        user_balance,
      ),
    );
  }

  // To call each time
  // fetch those from starken
  const totalSupply: Decimal = new Decimal(100);
  const TVL: Decimal = new Decimal(generateRandomNumberTVL());
  const APY: Decimal = new Decimal(generateRandomNumberAPY());
  const logo = '';
  const protocol = new ProtocolProvider().getProtocolByName(lpTokenDetails.protocol_name);
  if (!protocol) {
    throw new Error(`Protocol not found for name ${lpTokenDetails.protocol_name}`);
  }

  const lpToken = new Derivative(
    lpTokenDetails.address,
    lpTokenDetails.symbol,
    lpTokenDetails.name,
    lpTokenDetails.decimals,
    protocol,
    logo,
    underlyingTokens,
    totalSupply,
    APY,
    TVL,
    lpTokenDetails.type,
  );
  return lpToken;
}

export async function fetchTokens(): Promise<Erc20[]> {
  const tokenProvider = new TokenProvider();
  const tokens = tokenProvider.getTokens();
  const underlyingTokens: Erc20[] = [];
  for (let index = 0; index < tokens.length; index++) {
    underlyingTokens.push(await fetchToken(tokens[index].address));
  }
  return underlyingTokens;
}

export async function fetchToken(address: string): Promise<Erc20> {
  // static propreties
  const tokenProvider = new TokenProvider();
  const tokenDetails = tokenProvider.getTokenByAddress(address);
  if (!tokenDetails) {
    throw new Error('Token not found');
  }

  // fetch from starknet
  const price = new Decimal(38);
  const logo = '';

  const token = new Erc20(
    tokenDetails.address,
    tokenDetails.symbol,
    tokenDetails.name,
    tokenDetails.decimals,
    price,
    logo,
  );
  return token;
}
