export const GEN = '[GEN]'
export const GENERATE_GAME_IDEA = `${GEN} Generate a random seed`

export const generateGameIdea = () => ({
    type: GENERATE_GAME_IDEA,
    payload: {},
    meta: {
        throttle: 1500,
    },
})

