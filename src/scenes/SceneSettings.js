import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SceneSettings = () => (
    <View style={styles.container}>
        <Text>Scene Settings</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SceneSettings
