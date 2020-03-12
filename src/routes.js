import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Star from './pages/Star';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Star,
    },
    {
      defaultNavigationOptions: {
        headerBackTitle: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
