@@ -1,18 +1,19 @@
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { AppLoading } from 'expo'

const stackNavigatorOptions = {
    headerShown : false
    headerShown :false
}

const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail},
    Detail:{screen:Detail}
},
{
    defaultNavigationOptions:stackNavigatorOptions
});

export default createAppContainer(AppNavigator) 
    {
        defaultNavigationOptions:stackNavigatorOptions
    }
)
export default createAppContainer(AppNavigator);
