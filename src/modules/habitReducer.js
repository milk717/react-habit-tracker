import {HabitModel} from "../model/entity/HabitModel";

const ACTION = {
    CHECK_HABIT: 'CHECK_HABIT',
    GET_HABIT_LIST: 'GET_HABIT_LIST',
    GET_HABIT: 'GET_HABIT',
    CREATE_HABIT: 'CREATE_HABIT',
    MODIFY_HABIT: 'MODIFY_HABIT',
    CHANGE_HABIT: 'CHANGE_HABIT',
    UNMOUNT_HABIT: 'UNMOUNT_HABIT'
}
Object.freeze(ACTION);

/**
 * 습관 목록에서 id 기반으로 현재 선택된 습관을 불러오는 함수
 */
export const getHabit = (id) => ({type: ACTION.GET_HABIT, id: id});
/**
 * 선택된 습관에서 해당 날짜를 선택하는 함수
 * @param day 체크하는 날짜
 */
export const checkHabit = (day) => ({type: ACTION.CHECK_HABIT, day: day});
export const createHabit = () => ({type: ACTION.CREATE_HABIT});
export const modifyHabit = (id) => ({type: ACTION.MODIFY_HABIT, id: id});
/**
 * 습관 생성 페이지에서 입력 정보 수정할 때 호출됨.
 */
export const changeHabit = (key, value) => ({type: ACTION.CHANGE_HABIT, key: key, value: value});
export const unmountHabit = () => ({type: ACTION.UNMOUNT_HABIT});

const initialState = {
    id: 0,
    habitList: new HabitModel().getInitHabitList(),
    habit: new HabitModel()
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
        case ACTION.GET_HABIT:{
            const nowHabit = state.habitList[action.id]
            return{
                ...state,
                habit: nowHabit,
            }
        }
        case ACTION.CREATE_HABIT:{  //새로 만든거 등록
            return{
                ...state,
                habitList: state.habitList.concat(state.habit),    //기존 습관 리스트 배열에다가 빈 습관 배열 추가하기
            }
        }
        case ACTION.MODIFY_HABIT: {
            const newList = state.habitList.map((item)=>((item.id===action.id) ? state.habit: item))
            return{
                ...state,
                habitList: newList
            }
        }
        case ACTION.CHANGE_HABIT:{
            return {
                ...state,
                habit: {
                    ...state.habit,
                    [action.key]: action.value
                }
            }
        }
        case ACTION.UNMOUNT_HABIT:{
            return{
                ...state,
                habit: initialState.habit
            }
        }

        default:
            return state;
    }
}