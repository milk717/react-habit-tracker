import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LinearProgressWithLabel from "../component/LinearProgressWithLabel";
import HabitCheckBoard from "../component/HabitCheckBoard";
import DateRange from "../component/DateRange";
import {Background} from "../resource/style/background";
import {useEffect} from "react";

export default function HabitPage() {
    const param = useParams();
    const dispatch = useDispatch();

    const habit = useSelector(state => state.habitReducer.habit);

    // todo - 마운트 될 때 습관 리스트에서 id값에 해당하는 것 불러오기 만약 새로 생성이라면 초기화값
    useEffect(()=>{
        console.log(param.id)
    },[])

    return (
        <Background>
            <h1>{habit.title}</h1>
            <DateRange
                startDate={habit.startDate}
                endDate={habit.endDate}
            />
            <LinearProgressWithLabel value={habit.progressPercent} />
            <HabitCheckBoard
                progress = {habit.progress}
            />
        </Background>
    );
};