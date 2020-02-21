import  React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './Screens/Todo';
import CompletedTask from './Screens/CompletedTask';
import { Provider } from 'react-redux'
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Tab = createBottomTabNavigator();

function Todos() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="To do" component={Todo} />
      <Tab.Screen name="Completed Task" component={CompletedTask} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Todos />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
