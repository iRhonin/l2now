import ETH from './eth.svg';
import USDC from './usdc.svg';
import Swap from './swap.svg';
import Uniswap from './uniswap.svg';
import SushiSwap from './sushiswap.svg';
import OneInch from './1inch.png';
import Matcha from './matcha.webp';
import Hop from './hop.png';
import xPollinate from './xpollinate.png';
import Aave from './aave.svg';
import TorrnadoCash from './torrnadocash.png';
import Synthetix from './synthetix.svg';

// Legacy, don't add new icons here
const icons: { [id: string]: string } = {
  ETH,
  USDC,
  Swap,
  'Uniswap V3': Uniswap,
  SushiSwap,
  '1inch': OneInch,
  Matcha,
  Hop,
  xPollinate,
  Aave,
  TorrnadoCash,
  Synthetix,
};

export default icons;
