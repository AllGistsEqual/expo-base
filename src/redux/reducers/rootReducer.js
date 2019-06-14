import { combineReducers } from 'redux'
import applicationReducer from './application.reducer'
import generatorReducer from './generator.reducer'

export default combineReducers({
    application: applicationReducer,
    gameIdea: generatorReducer,
})
