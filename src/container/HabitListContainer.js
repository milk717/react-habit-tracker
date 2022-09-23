import {List, ListItem, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function HabitListContainer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const habitList = useSelector((state)=>state.habitReducer.habitList)

    const handleListClick = (e, id) =>{
        navigate(`/habit/${id}`)
    }
    const handleHabitCreate = () =>{
        navigate(`/habit/edit`)
    }
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
                {
                    habitList.map((habit)=>(
                        <ListItem key={habit.id}>
                            <ListItemText
                                primary={habit.title}
                                secondary={`${habit.startDate} ~ ${habit.endDate}`}>
                                onClick={(e)=>handleListClick(e, habit.id)}
                            </ListItemText>
                        </ListItem>
                    ))
                }
            </List>
            <button onClick={handleHabitCreate}>습관 추가하기</button>
        </>
    );
};