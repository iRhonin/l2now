import { Context } from '@cryptostats/sdk';

const ARB_GAS_PRECOMPILE = '0x000000000000000000000000000000000000006C'

const ARB_GAS_ABI = [
  'function getPricesInWei() external view returns (uint256,uint256,uint256,uint256,uint256,uint256)',
]

export function setup(sdk: Context) {
  const getFeeResolverForCost = (gasAmt: number) => async() => {
    const gasPrecompileContract = sdk.ethers.getContract(ARB_GAS_PRECOMPILE, ARB_GAS_ABI, 'arbitrum-one');
    const weiPerArbGas = (await gasPrecompileContract.getPricesInWei())[5];

    const ethPrice = await sdk.coinGecko.getCurrentPrice('ethereum');
    
    return weiPerArbGas * gasAmt * ethPrice / 1e18;
  }

  sdk.register({
    id: 'arbitrum-one',
    queries: {
      feeTransferEth: getFeeResolverForCost(644000),
      feeTransferERC20: getFeeResolverForCost(708377),
      feeSwap: getFeeResolverForCost(2838631),
    },
    metadata: {
      icon: sdk.ipfs.getDataURILoader('QmeRunQGxv3haLoMfgwD2VjKwScf7gDQiA1DCYd1HNBCG6', 'image/svg+xml'),
      category: 'l2',
      name: 'Arbitrum One',
    },
  });
}
