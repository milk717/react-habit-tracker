import {Button, HabitCheckBoardItem, HabitCheckBoardList} from "../resource/style/components";
// import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import {useDispatch} from "react-redux";
import {checkHabit} from "../modules/habitReducer";


export default function HabitCheckBoard(
    {
        progress,
    }
) {
    const dispatch = new useDispatch();
    const dateArray = new Date(progress[0].date).dateRange(66);

    const handleDateClick = (e, item) =>{
        // confetti({
        //     particleCount: 150,
        //     spread: 100
        // });
        dispatch(checkHabit(item.day));
    }

    return (
        <>
            <HabitCheckBoardList>
                {
                    dateArray.map((item, index) => (
                        <HabitCheckBoardItem>
                            <Button onClick={(e)=>handleDateClick(e, item)} checked={progress[index]?.isComplete}>
                                {item.date.slice(5, 10)}
                            </Button>
                        </HabitCheckBoardItem>
                    ))
                }
            </HabitCheckBoardList>
        </>
    );
};