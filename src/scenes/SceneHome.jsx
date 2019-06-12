import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

const SceneHome = (props) => {
    const { applicationState: { version } } = props

    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <Text>Home Page</Text>
            <Text>
                {`Version: ${version}`}
            </Text>
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


SceneHome.propTypes = {
    applicationState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    applicationState: state.application,
})

export default connect(
    mapStateToProps,
)(SceneHome)
