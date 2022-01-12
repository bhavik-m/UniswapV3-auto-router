import { ethers } from "ethers";
import { CurrencyAmount, Token, TradeType,Currency } from "@uniswap/sdk-core";
import { AlphaRouter } from "@uniswap/smart-order-router";
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/47722f74a0264bd98bdc66c7f0177333");
const router = new AlphaRouter({ chainId: 1, provider });
const WETH = new Token(
  1,
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  18,
);
const USDC = new Token(
  1,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
)
const usdcAmount = CurrencyAmount.fromRawAmount(USDC, "1000000");
let route;

(async function func(){
route = await router.route(
  usdcAmount,
  WETH,
  TradeType.EXACT_INPUT,
);
console.log("route -> " , route); 
})();
