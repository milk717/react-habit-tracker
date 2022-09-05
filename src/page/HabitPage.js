import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getHabitByID} from "../modules/habitReducer";
import LinearProgressWithLabel from "../component/LinearProgressWithLabel";
import HabitCheckBoard from "../component/HabitCheckBoard";
import DateRange from "../component/DateRange";
import {Background} from "../resource/style/background";

export default function HabitPage() {
    const param = useParams();
    const dispatch = useDispatch();

    const {loading, data, error} = useSelector(state => state.habitReducer.habit)
    || {
        loading: false,
        data: null,
        error: null
    };

    useEffect(()=>{
        dispatch(getHabitByID(param.id));
    },[]);

    if(loading) return <>로딩중</>
    if(error) return <>에러발생</>
    if(!data) return;

    return (
        <Background>
            <h1>{data.title}</h1>
            <DateRange
                startDate={data.startDate}
                range={66}
            />
            <LinearProgressWithLabel value={data.progressPercent} />
            <HabitCheckBoard
                progress = {data.progress}
            />
        </Background>
    );
};