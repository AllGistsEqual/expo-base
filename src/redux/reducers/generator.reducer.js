import { GENERATE_GAME_IDEA } from '../actions/generator.actions'
import buzzwords from '../../res/buzzwords.json'

const initialState = 'init'

const getRandomFromArray = arr => arr[Math.floor(Math.random() * arr.length)]
const generateIdea = () => {
    const {
        genre, objectives, things, setting,
    } = buzzwords

    const randomGenre = getRandomFromArray(genre)
    const randomObjective = getRandomFromArray(objectives)
    const randomThing = getRandomFromArray(things)
    const randomSetting = getRandomFromArray(setting)

    return (`Build a ${randomGenre} game, where you ${randomObjective} ${randomThing} ${randomSetting}`)
}

const generatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_GAME_IDEA: {
            return generateIdea()
        }

        default: {
            return state
        }
    }
}

export default generatorReducer
