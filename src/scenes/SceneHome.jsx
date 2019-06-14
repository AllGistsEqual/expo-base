import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Button, StyleSheet, Text, View,
} from 'react-native'
import { generateGameIdea } from '../redux/actions/generator.actions'

const SceneHome = (props) => {
    const {
        applicationState: { version, name },
        currentGameIdea,
        randomiseGameIdea,
    } = props

    useEffect(() => {
        randomiseGameIdea()
    }, [randomiseGameIdea])

    function onPressGenerateGameIdea() {
        randomiseGameIdea()
    }

    return (
        <View style={styles.container}>
            <Text>
                {`${name} v${version}`}
            </Text>
            <Text>Home Page</Text>
            <Button
                onPress={onPressGenerateGameIdea}
                title="[ Generate Game Idea ]"
                color="#841584"
                accessibilityLabel="Press this button to generate a Game Idea"
            />
            <Text>{currentGameIdea}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
})

SceneHome.propTypes = {
    applicationState: PropTypes.object.isRequired,
    currentGameIdea: PropTypes.string.isRequired,
    randomiseGameIdea: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    applicationState: state.application,
    currentGameIdea: state.gameIdea,
})

const mapDispatchToProps = dispatch => ({
    randomiseGameIdea: () => dispatch(generateGameIdea()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SceneHome)
