import React from 'react'
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'
import SceneHome from "./src/scenes/SceneHome"
import SceneStart from "./src/scenes/SceneStart"
import SceneSettings from "./src/scenes/SceneSettings"

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
    <Navigation />
  )
}
