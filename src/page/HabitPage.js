import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LinearProgressWithLabel from "../component/LinearProgressWithLabel";
import HabitCheckBoard from "../component/HabitCheckBoard";
import DateRange from "../component/DateRange";
import {Background} from "../resource/style/background";

export default function HabitPage() {
    const param = useParams();
    const dispatch = useDispatch();

    const data = useSelector(state => state.habitReducer.habit)


    return (
        <Background>
            <h1>{data.title}</h1>
            <DateRange
                startDate={data.startDate}
                endDate={data.endDate}
            />
            <LinearProgressWithLabel value={data.progressPercent} />
            <HabitCheckBoard
                progress = {data.progress}
            />
        </Background>
    );
};