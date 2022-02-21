/// <reference types="react" />
import { UniswapDappSharedLogic } from 'uniswap-dapp-integration-shared';
declare const Header: ({ uniswapDappSharedLogic, disableMultihopsCompleted, }: {
    uniswapDappSharedLogic: UniswapDappSharedLogic;
    disableMultihopsCompleted: (noLiquidityFound: boolean) => void;
}) => JSX.Element;
export default Header;
