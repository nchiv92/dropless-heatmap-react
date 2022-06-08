export const ActionTypes = {
    SWITCH_TAB: 'SWITCH_TAB',
}

export function switchTab(navIndex: number){
    return {
        type: ActionTypes.SWITCH_TAB,
        payload: {
            navIndex
        }
    }
}