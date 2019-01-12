import { createStackNavigator,createAppContainer } from 'react-navigation';
import { Component } from 'react'

import Home from './Home';
import Sell from './components/SellPage/Sell'
import Buy from './components/BuyPage/BuyPage'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Sell: { screen: Sell},
  Buy: { screen:Buy}
});
 
const AppNav=createAppContainer(AppNavigator);

export default AppNav;
