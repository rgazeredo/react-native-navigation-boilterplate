import { Navigation } from 'react-native-navigation';

import Home from './home';
import SideMenuLeft from './side-menu-left';

export function registerScreens() {
    Navigation.registerComponent('app.home', () => Home);
    Navigation.registerComponent('app.side-menu-left', () => SideMenuLeft);
}