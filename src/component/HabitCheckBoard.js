import {Button, HabitCheckBoardItem, HabitCheckBoardList} from "../resource/style/components";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";


export default function HabitCheckBoard(
    {
        progress,
    }
) {
    const dateArray = new Date(progress[0].date).dateRange(66);

    const handleDateClick = () =>{
        confetti({
            particleCount: 150,
            spread: 100
        });
    }

    return (
        <>
            <HabitCheckBoardList>
                {
                    dateArray.map((item, index) => (
                        <HabitCheckBoardItem>
                            <Button onClick={handleDateClick} checked={progress[index]?.isComplete}>
                                {item.date.slice(5, 10)}
                            </Button>
                        </HabitCheckBoardItem>
                    ))
                }
            </HabitCheckBoardList>
        </>
    );
};