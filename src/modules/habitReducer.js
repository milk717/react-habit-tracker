
const ACTION = {
    CHECK_HABIT: 'CHECK_HABIT',
}
Object.freeze(ACTION);

export const checkHabit = (day) => ({type: ACTION.CHECK_HABIT, day: day})

const initialState = {
    habit: {
        id: 0,
        title: "",
        startDate: new Date().format("yyyy-MM-dd"),
        endDate: new Date().setDateExtension(true, 66),
        progressPercent: 0,
        progress: new Date().dateRange(66),
    },
}

export default function habitReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.CHECK_HABIT:{
            const newProgress = state.habit.progress.map((item)=>(item.day === action.day ? {...item, isComplete: !item.isComplete} : item))
            return {
                ...state,
                habit: {
                    ...state.habit,
                    progress: newProgress,
                }
            }
        }

        default:
            return state;
    }
}