import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: 'app.home',
        title: 'Home',
    },
    drawer: {
        left: {
            screen: 'app.side-menu-left',
        }
    }
});