
import Decimal from "decimal.js";


interface ERC20Details {
    address: string;
    symbol: string;
    name: string;
    decimals: Decimal;
    logo: string;
}

interface DerivativeTokenDetails {
    address: string;
    symbol: string;
    name: string;
    decimals: Decimal;
    logo: string;
    protocol_name: string;
    underlyings: string[];
    type: string;
}




export class TokenProvider {
    private readonly erc20Tokens: ERC20Details[] = [
        // Add all ERC20 token details here
        { address: '0x03fe2b97c1fd336e750087d68b9b867997fd64a2661ff3ca5a7c771641e8e7ac', symbol: 'WBTC', name: 'Wrapped BTC', decimals: new Decimal(8), logo: WBTC_logo },
        { address: '0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8', symbol: 'USDC', name: 'USD Coin', decimals: new Decimal(6), logo: USDC_logo },
        { address: '0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8', symbol: 'USDT', name: 'Tether USD', decimals: new Decimal(6), logo: USDT_logo },
        { address: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7', symbol: 'ETH', name: 'Ether', decimals: new Decimal(18), logo: ETH_logo },
        { address: '0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3', symbol: 'DAI', name: 'DAI', decimals: new Decimal(18), logo: DAI_logo },
    ];

    private readonly derivativeTokens: DerivativeTokenDetails[] = [
        {
            address: '0x0032ebb8e68553620b97b308684babf606d9556d5c0a652454552e85f40d000d',
            symbol: 'SITH-P',
            name: "SithSwap Pair",
            decimals: new Decimal(18),
            logo: "",
            protocol_name: 'SithSwap',
            underlyings: ['DAI', 'ETH'],
            type: 'Liquidity Pool'
        },
        {
            address: '0x0032e34553620b97b308684babf606d9556d5c0a652450c32e85f40d000d',
            symbol: 'Jedi-P',
            name: "JediSwap Pair",
            decimals: new Decimal(18),
            logo: "",
            protocol_name: 'JediSwap',
            underlyings: ['WBTC', 'USDT'],
            type: 'Liquidity Pool'
        },
        {
            address: '0x0032eb33553620b97b32284babf606d9556d5c0a652450c32e85f40d000d',
            symbol: '10K-P',
            name: "10KSwap Pair",
            decimals: new Decimal(18),
            logo: "",
            protocol_name: '10KSwap',
            underlyings: ['USDC', 'ETH'],
            type: 'Liquidity Pool'
        },
        {
            address: '0x0032ebb8e68553620b97b30868430006d9556d5c0a652450c32e85f40d000d',
            symbol: '10K-P',
            name: "10KSwap Pair",
            decimals: new Decimal(18),
            logo: "",
            protocol_name: '10KSwap',
            underlyings: ['DAI', 'ETH'],
            type: 'Liquidity Pool'
        },
        {
            address: '0x0032ebb7e68553620b97b308684babf606d9556d5c0a63939c32e85f40d000d',
            symbol: 'Sith-P',
            name: "SithSwap Pair",
            decimals: new Decimal(18),
            logo: "",
            protocol_name: 'SithSwap',
            underlyings: ['WBTC', 'USDT'],
            type: 'Liquidity Pool'
        },
        {
            address: '0x0032eb33553620b97b308684babf206d9556d5c0a652450c3305f40d000d',
            symbol: 'Jedi-P',
            name: "JediSwap Pair",
            decimals: new Decimal(18),
            logo: "",
            protocol_name: 'JediSwap',
            underlyings: ['USDC', 'ETH'],
            type: 'Liquidity Pool'
        },
        {
            address: '0x0032eb33553620b97b2108684babf206d9556d5c0a652450c3305f40d000d',
            symbol: 'Nostra-P',
            name: "Nostra Pool",
            decimals: new Decimal(18),
            logo: "",
            protocol_name: 'NostraFi',
            underlyings: ['ETH'],
            type: 'Lending Pool'
        },
        {
            address: '0x0032eb335536202abf206d9556d5c0a652450c3305f40d000d',
            symbol: 'Nostra-P',
            name: "Nostra Pool",
            decimals: new Decimal(18),
            logo: "",
            protocol_name: 'NostraFi',
            underlyings: ['WBTC'],
            type: 'Lending Pool'
        }
    ];

    getTokenByAddress(address: string): ERC20Details | null {
        return this.erc20Tokens.find((token) => token.address === address) || null;
    }

    getTokens(): ERC20Details[] {
        return this.erc20Tokens;
    }

    getTokenBySymbol(symbol: string): ERC20Details | null {
        return this.erc20Tokens.find((token) => token.symbol === symbol) || null;
    }

    getDerivativeByAddress(address: string): DerivativeTokenDetails | null {
        return this.derivativeTokens.find((token) => token.address === address) || null;
    }

    getDerivatives(): DerivativeTokenDetails[] {
        return this.derivativeTokens;
    }

    getderivativeTokensByProtocol(protocol: string): DerivativeTokenDetails[] {
        return this.derivativeTokens.filter((token) => token.protocol_name === protocol);
    }

}


const WBTC_logo: string = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 4091.27 4091.73"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_1421344023328">
   <path fill="#F7931A" fill-rule="nonzero" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"/>
   <path fill="white" fill-rule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"/>
  </g>
 </g>
</svg>
`;


const ETH_logo: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"/><g fill="#FFF" fill-rule="nonzero"><path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g></svg>
`

const DAI_logo: string = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 444.44 444.44"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path fill="#F5AC37" fill-rule="nonzero" d="M222.22 0c122.74,0 222.22,99.5 222.22,222.22 0,122.74 -99.48,222.22 -222.22,222.22 -122.72,0 -222.22,-99.49 -222.22,-222.22 0,-122.72 99.5,-222.22 222.22,-222.22z"/>
  <path fill="#FEFEFD" fill-rule="nonzero" d="M230.41 237.91l84.44 0c1.8,0 2.65,0 2.78,-2.36 0.69,-8.59 0.69,-17.23 0,-25.83 0,-1.67 -0.83,-2.36 -2.64,-2.36l-168.05 0c-2.08,0 -2.64,0.69 -2.64,2.64l0 24.72c0,3.19 0,3.19 3.33,3.19l82.78 0zm77.79 -59.44c0.24,-0.63 0.24,-1.32 0,-1.94 -1.41,-3.07 -3.08,-6 -5.02,-8.75 -2.92,-4.7 -6.36,-9.03 -10.28,-12.92 -1.85,-2.35 -3.99,-4.46 -6.39,-6.25 -12.02,-10.23 -26.31,-17.47 -41.67,-21.11 -7.75,-1.74 -15.67,-2.57 -23.61,-2.5l-74.58 0c-2.08,0 -2.36,0.83 -2.36,2.64l0 49.3c0,2.08 0,2.64 2.64,2.64l160.27 0c0,0 1.39,-0.28 1.67,-1.11l-0.68 0zm0 88.33c-2.36,-0.26 -4.74,-0.26 -7.1,0l-154.02 0c-2.08,0 -2.78,0 -2.78,2.78l0 48.2c0,2.22 0,2.78 2.78,2.78l71.11 0c3.4,0.26 6.8,0.02 10.13,-0.69 10.32,-0.74 20.47,-2.98 30.15,-6.67 3.52,-1.22 6.92,-2.81 10.13,-4.72l0.97 0c16.67,-8.67 30.21,-22.29 38.75,-39.01 0,0 0.97,-2.1 -0.12,-2.65zm-191.81 78.75l0 -0.83 0 -32.36 0 -10.97 0 -32.64c0,-1.81 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -26.39 32.22 0c1.8,0 2.5,0 2.5,-2.36l0 -26.11c0,-1.67 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -24.44c0,-1.53 0,-1.94 2.22,-1.94l29.86 0c2.08,0 2.64,0 2.64,-2.64l0 -74.86c0,-2.22 0,-2.78 2.78,-2.78l104.16 0c7.56,0.3 15.07,1.13 22.5,2.5 15.31,2.83 30.02,8.3 43.47,16.11 8.92,5.25 17.13,11.59 24.44,18.89 5.5,5.71 10.46,11.89 14.86,18.47 4.37,6.67 8,13.8 10.85,21.25 0.35,1.94 2.21,3.25 4.15,2.92l24.86 0c3.19,0 3.19,0 3.33,3.06l0 22.78c0,2.22 -0.83,2.78 -3.06,2.78l-19.17 0c-1.94,0 -2.5,0 -2.36,2.5 0.76,8.46 0.76,16.95 0,25.41 0,2.36 0,2.64 2.65,2.64l21.93 0c0.97,1.25 0,2.5 0,3.76 0.14,1.61 0.14,3.24 0,4.85l0 16.81c0,2.36 -0.69,3.06 -2.78,3.06l-26.25 0c-1.83,-0.35 -3.61,0.82 -4.03,2.64 -6.25,16.25 -16.25,30.82 -29.17,42.5 -4.72,4.25 -9.68,8.25 -14.86,11.94 -5.56,3.2 -10.97,6.53 -16.67,9.17 -10.49,4.72 -21.49,8.2 -32.78,10.41 -10.72,1.92 -21.59,2.79 -32.5,2.64l-96.39 0 0 -0.14z"/>
 </g>
</svg>
`

const USDC_logo: string = `
<svg data-name="86977684-12db-4850-8f30-233a7c267d11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
  <path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z" fill="#2775ca"/>
  <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff"/>
  <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff"/>
</svg>
`

const USDT_logo: string = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="2000" height="2000"><path d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0" fill="#53ae94"/><path d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18" fill="#fff"/></svg>
`


const JEDISWAP_logo: string = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" >
  <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
  <g transform="translate(0, 320) scale(0.1, -0.1)" fill="#000" stroke="none">
    <path d="M0 1600 l0 -1600 1600 0 1600 0 0 1600 0 1600 -1600 0 -1600 0 0 -1600z m2529 703 c-40 -76 -76 -144 -82 -150 -7 -10 -162 -13 -711 -13 l-701 0 -38 -70 c-21 -39 -40 -70 -42 -70 -4 0 -121 144 -278 343 l-77 97 1000 0 1001 0 -72 -137z m-586 -693 l-78 -150 -342 0 -342 0 72 150 72 149 348 1 348 0 -78 -150z m405 -512 c54 -68 133 -167 175 -220 l77 -98 -1000 0 -1000 0 71 143 70 142 711 5 712 5 39 73 c21 39 40 72 42 72 3 0 48 -55 103 -122z" />
  </g>
</svg>
`

const SITHSWAP_logo: string = `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100%" height="100%" viewBox="0 0 432.000000 398.000000"
 preserveAspectRatio="xMidYMid meet">
 <rect x="0" y="0" width="100%" height="100%" fill="#fff" />

<g transform="translate(0.000000,398.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 1990 l0 -1990 2160 0 2160 0 0 1990 0 1990 -2160 0 -2160 0 0
-1990z m2195 1880 c47 -5 0 -7 -145 -7 -128 0 -189 3 -150 7 88 9 210 9 295 0z
m755 -210 c10 -6 -308 -10 -905 -9 -522 0 -911 4 -900 9 28 12 1786 12 1805 0z
m355 -230 c4 -7 -417 -10 -1255 -10 -838 0 -1259 3 -1255 10 4 7 433 10 1255
10 822 0 1251 -3 1255 -10z m225 -225 c11 -13 -155 -15 -1480 -15 -1325 0
-1491 2 -1480 15 11 13 188 15 1480 15 1292 0 1469 -2 1480 -15z m168 -220
l12 -25 -485 0 c-473 0 -485 0 -519 21 -20 12 -36 23 -36 25 0 2 229 4 508 4
l509 0 11 -25z m-2303 -10 l-40 -24 -488 -1 -487 0 16 25 16 25 512 0 511 0
-40 -25z m-390 -225 l-50 -30 -347 0 -347 0 10 30 11 30 386 0 387 0 -50 -30z
m2819 4 c3 -9 6 -20 6 -25 0 -5 -143 -9 -347 -9 l-348 0 -40 25 -40 24 381 1
c339 0 383 -2 388 -16z m87 -236 l7 -28 -191 0 -192 0 -50 30 -50 30 234 -3
235 -2 7 -27z m-3296 -3 c-39 -24 -45 -24 -239 -25 -177 0 -197 2 -192 16 3 9
6 20 6 25 0 5 98 9 233 9 l232 0 -40 -25z m1556 -121 c30 -9 73 -27 95 -40 63
-37 141 -126 177 -201 30 -63 32 -76 32 -173 0 -98 -2 -110 -34 -177 -124
-265 -470 -334 -682 -137 -284 267 -102 741 287 743 39 1 95 -6 125 -15z
m-1926 -99 c-22 -14 -55 -25 -72 -25 -29 0 -33 3 -33 25 0 24 2 25 73 25 l72
-1 -40 -24z m3717 0 c5 -22 2 -25 -26 -25 -17 0 -49 11 -71 25 l-40 24 66 1
c63 0 67 -1 71 -25z m-3598 -696 c20 -12 36 -23 36 -25 0 -2 -54 -4 -120 -4
l-120 0 0 25 c0 25 1 25 84 25 68 0 92 -4 120 -21z m3576 1 c0 -29 -12 -31
-136 -28 -101 3 -107 4 -84 18 23 14 96 25 183 28 31 2 37 -1 37 -18z m-3175
-240 l30 -20 -277 0 c-267 0 -278 1 -288 20 -11 20 -8 20 247 20 241 0 260 -1
288 -20z m3105 0 c-10 -19 -21 -20 -288 -20 l-277 0 30 20 c28 19 47 20 288
20 255 0 258 0 247 -20z m-2725 -225 l90 -55 -437 0 -438 0 -25 50 c-14 27
-25 52 -25 55 0 3 168 5 373 5 l372 -1 90 -54z m2645 50 c0 -3 -11 -28 -25
-55 l-25 -50 -432 0 c-237 0 -428 3 -425 6 4 4 42 28 84 55 l78 47 373 1 c204
1 372 -1 372 -4z m-199 -322 c-17 -21 -41 -50 -54 -65 l-23 -28 -1464 0 -1465
0 -53 65 -53 65 1571 0 1572 0 -31 -37z m-231 -247 c0 -2 -42 -36 -93 -75
l-93 -71 -1123 0 c-1120 0 -1123 0 -1152 21 -16 11 -59 45 -95 75 l-67 54
1312 0 c721 0 1311 -2 1311 -4z m-433 -292 c-71 -37 -228 -96 -342 -130 l-100
-29 -440 0 -440 0 -116 37 c-117 37 -326 122 -343 139 -6 5 355 9 910 9 l919
-1 -48 -25z"/>
</g>
</svg>
`

const KSWAP_logo: string = `

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" viewBox="0 0 116 106" enable-background="new 0 0 116 106" xml:space="preserve">
     <rect x="0" y="0" width="100%" height="100%" fill="#fff" />

     <path fill="#121212" opacity="1.000000" stroke="none" 
	d="
M61.000000,107.000000 
	C40.666668,107.000000 20.833334,107.000000 1.000000,107.000000 
	C1.000000,71.666664 1.000000,36.333332 1.000000,1.000000 
	C39.666668,1.000000 78.333336,1.000000 117.000000,1.000000 
	C117.000000,36.333332 117.000000,71.666664 117.000000,107.000000 
	C98.500000,107.000000 80.000000,107.000000 61.000000,107.000000 
M76.819527,89.235115 
	C83.299545,85.532806 89.721291,81.722855 96.282494,78.170494 
	C99.940605,76.189926 101.850204,73.867081 101.702965,69.264183 
	C101.320045,57.293766 101.589500,45.302940 101.555138,33.320385 
	C101.550316,31.637821 101.301392,29.955959 101.113861,27.635199 
	C73.480980,43.552551 46.697533,58.980606 19.393082,74.708771 
	C20.791281,75.735313 21.517431,76.378662 22.340002,76.855782 
	C34.126286,83.692276 45.858883,90.627968 57.802864,97.177872 
	C59.363838,98.033882 62.283627,97.422905 64.126816,96.548584 
	C68.306305,94.566040 72.206917,91.995583 76.819527,89.235115 
M43.229462,41.256226 
	C35.390697,36.807709 27.551933,32.359188 19.216469,27.628790 
	C19.216469,40.511585 19.216469,52.408592 19.216469,65.315010 
	C30.266947,58.969166 40.709984,52.972149 51.990158,46.494400 
	C48.605171,44.504307 46.212532,43.097630 43.229462,41.256226 
M45.336422,27.688074 
	C44.105591,28.614096 42.874760,29.540117 41.280132,30.739843 
	C47.204300,34.201420 52.584324,37.474518 58.115757,40.467823 
	C59.220989,41.065918 61.185658,41.118439 62.273304,40.531567 
	C67.919952,37.484772 73.410843,34.149303 79.777824,30.434954 
	C72.798828,26.630459 66.866913,21.648588 60.243382,20.431946 
	C56.173260,19.684326 51.045410,24.695957 46.391777,27.120123 
	C46.244469,27.196857 46.089096,27.258095 45.336422,27.688074 
z"/>
<path fill="#787878" opacity="1.000000" stroke="none" 
	d="
M76.520226,89.449646 
	C72.206917,91.995583 68.306305,94.566040 64.126816,96.548584 
	C62.283627,97.422905 59.363838,98.033882 57.802864,97.177872 
	C45.858883,90.627968 34.126286,83.692276 22.340002,76.855782 
	C21.517431,76.378662 20.791281,75.735313 19.393082,74.708771 
	C46.697533,58.980606 73.480980,43.552551 101.113861,27.635199 
	C101.301392,29.955959 101.550316,31.637821 101.555138,33.320385 
	C101.589500,45.302940 101.320045,57.293766 101.702965,69.264183 
	C101.850204,73.867081 99.940605,76.189926 96.282494,78.170494 
	C89.721291,81.722855 83.299545,85.532806 76.520226,89.449646 
z"/>
<path fill="#787878" opacity="1.000000" stroke="none" 
	d="
M43.524677,41.473591 
	C46.212532,43.097630 48.605171,44.504307 51.990158,46.494400 
	C40.709984,52.972149 30.266947,58.969166 19.216469,65.315010 
	C19.216469,52.408592 19.216469,40.511585 19.216469,27.628790 
	C27.551933,32.359188 35.390697,36.807709 43.524677,41.473591 
z"/>
<path fill="#767676" opacity="1.000000" stroke="none" 
	d="
M45.636951,27.507315 
	C46.089096,27.258095 46.244469,27.196857 46.391777,27.120123 
	C51.045410,24.695957 56.173260,19.684326 60.243382,20.431946 
	C66.866913,21.648588 72.798828,26.630459 79.777824,30.434954 
	C73.410843,34.149303 67.919952,37.484772 62.273304,40.531567 
	C61.185658,41.118439 59.220989,41.065918 58.115757,40.467823 
	C52.584324,37.474518 47.204300,34.201420 41.280132,30.739843 
	C42.874760,29.540117 44.105591,28.614096 45.636951,27.507315 
z"/>
</svg>
`