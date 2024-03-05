import { FaUserCheck } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";
import { TbChartCandleFilled } from "react-icons/tb";
export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'About',
      route: '/about',
    },
    {
      label: 'Services',
      route: '/services',
    },

    {
      label: 'Market',
      route: '/market',
    },
    {
      label: 'Pricing',
      route: '/trade',
    },
    {
      label: 'Contact',
      route: '/contact',
    },
  ]
  export const FeaturedCompanies =  [
    {
      name: 'Coinbase',
      logo: '/assets/images/coinbase.png',
    },
    {
      name: 'Kraken',
      logo: '/assets/images/bitmex.png',
    },
    {
      name: 'Bitfinex',
      logo: '/assets/images/bitcoin.png',
    },
    {
      name: 'Bitfinex',
      logo: '/assets/images/tether.png',
    },
    {
      name: 'Binance',
      logo: '/assets/images/binance.png',
    },
  ]

  export const StarterItems = [
    {
      step1: 'Create An Account',
      step2: 'Create an account on our platform',
      stepIcon: FaUserCheck,
    },
    {
      step1: 'Verify Your Bank',
      step2: 'Verify Your Bank Account In Few Steps',
      stepIcon: BsBank2,
    },
    {
      step1: 'Add Funds In Wallet',
      step2: 'Quickly Add Money To Your Investment Wallet',
      stepIcon: FaWallet,
    },
    {
      step1: 'Start Trading Instantly',
      step2: 'Buy And Sell Variety Of Top Coins At Best Rates',
      stepIcon: TbChartCandleFilled,
    },
  ]