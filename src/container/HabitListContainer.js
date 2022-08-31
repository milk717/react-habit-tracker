import {List, ListItem, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function HabitListContainer() {
    const navigate = useNavigate();
    const handleListClick = (e, id) =>{
        navigate(`/habit/${id}`)
    }
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemText primary="물 마시기" secondary="2022-08-08 ~ 2022-10-13" onClick={(e)=>handleListClick(e,1)}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List>
        </>
    );
};