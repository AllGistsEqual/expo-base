import React from 'react'
import { StyleSheet, Text, View} from "react-native"

const SceneHome = (props) => {
    const { navigation } = props

    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <Text>Home Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SceneHome
