import {createPromiseThunk, handleAsyncActions, reducerUtils} from "../utils/asyncUtils";
import * as habitApi from "../axios/apis/habit";

const ACTION = {
    GET_HABIT_LIST: 'GET_HABIT_LIST',
    GET_HABIT_LIST_SUCCESS: 'GET_HABIT_LIST_SUCCESS',
    GET_HABIT_LIST_ERROR: 'GET_HABIT_LIST_ERROR',

    GET_HABIT_BY_ID: 'GET_HABIT_BY_ID',
    GET_HABIT_BY_ID_SUCCESS: 'GET_HABIT_BY_ID_SUCCESS',
    GET_HABIT_BY_ID_ERROR: 'GET_HABIT_BY_ID_ERROR',
}

Object.freeze(ACTION);

export const getHabitByID = createPromiseThunk(ACTION.GET_HABIT_BY_ID, habitApi.getHabit)

const initialState = {
    habits: reducerUtils.initial([]),
    habit: reducerUtils.initial(),
}

export default function habitReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_HABIT_BY_ID:
        case ACTION.GET_HABIT_BY_ID_SUCCESS:
        case ACTION.GET_HABIT_BY_ID_ERROR:
            return handleAsyncActions(action.type,'habit')(state, action);
    }
}