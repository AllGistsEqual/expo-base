import React from 'react'
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'
import SceneHome from "./src/scenes/SceneHome"
import SceneStart from "./src/scenes/SceneStart"
import SceneSettings from "./src/scenes/SceneSettings"

let RootStack = createBottomTabNavigator(
  {
      Home: SceneHome,
      Settings: SceneSettings,
      Start: SceneStart,
  },
  {
      initialRouteName: "Home"
  }
)

let Navigation = createAppContainer(RootStack)

export default function App() {
  return (
    <Navigation />
  )
}
