import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { initialiseApplication } from '../redux/actions/application.actions'

const SceneHome = (props) => {
    const { applicationState: { version, name }, checkInit } = props

    useEffect(() => {
        checkInit()
    }, [checkInit])

    return (
        <View style={styles.container}>
            <Text>
                {`${name} v${version}`}
            </Text>
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

SceneHome.propTypes = {
    applicationState: PropTypes.object.isRequired,
    checkInit: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    applicationState: state.application,
})

const mapDispatchToProps = dispatch => ({
    checkInit: () => dispatch(initialiseApplication()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SceneHome)
