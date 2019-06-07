import React from 'react'
import { StyleSheet, Text, View} from "react-native"

const SceneStart = (props) => {
    const { navigation } = props

    return (
        <View style={styles.container}>
            <Text>SceneStart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff7100',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SceneStart
