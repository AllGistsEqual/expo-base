import React from 'react'
import {
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation'
import { Provider } from 'react-redux'
import configureStore from './src/redux/store'
import SceneHome from "./src/scenes/SceneHome"
import SceneStart from "./src/scenes/SceneStart"
import SceneSettings from "./src/scenes/SceneSettings"

const store = configureStore()

let TabNavigator = createBottomTabNavigator(
  {
      Home: SceneHome,
      Settings: SceneSettings,
      Start: SceneStart,
  },
  {
      initialRouteName: "Home"
  }
)

let Navigation = createAppContainer(TabNavigator)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
