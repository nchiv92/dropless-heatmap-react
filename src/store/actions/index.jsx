export const ActionTypes = {
    SWITCH_TAB: 'SWITCH_TAB',
    ADD_LOCATION: 'ADD_LOCATION'
}

export function switchTab(navIndex){
    return {
        type: ActionTypes.SWITCH_TAB,
        payload: {
            navIndex
        }
    }
}

export function addPosition(positions){
    return {
        type: ActionTypes.ADD_LOCATION,
        payload: {
            positions
        }
    }
}