import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/WriteStoryScreen';
import ReadScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render() {  
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: { screen: WriteScreen},
  Read: { screen: ReadScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
            source={require("./assets/write.png")}
            style={{width:35, height: 35}}
          />
        );

      }
      else if(routeName === "Read"){
        return(
          <Image
            source={require("./assets/read.png")}
            style={{width: 35, height: 35}}
          />)
      }
    }
  })
}
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
});
