import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getHabitByID} from "../modules/habitReducer";

export default function HabitPage() {
    const param = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getHabitByID(param.id))
    },[]);

    return (
        <>

        </>
    );
};