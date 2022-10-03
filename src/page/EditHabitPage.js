import {useState} from "react";
import {idValidation} from "../resource/validation";
import {useDispatch, useSelector} from "react-redux";
import {changeHabit, createHabit} from "../modules/habitReducer";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Button} from "@mui/material";


export default function EditHabitPage(){
    const dispatch = new useDispatch();
    const [titleValidation, setTitleValidation] = useState(true);
    const startDate = useSelector(state=>state.habitReducer.habit)
    const [value, setValue] = useState(null);
    
    const handleHabitTitleChange = (e) =>{
        if(!e.target.value) setTitleValidation(false);
        else setTitleValidation(true);

        dispatch(changeHabit('title', e.target.value))
    }

    const handleStartDateChange = (newValue) =>{
        setValue(newValue)
        console.log(newValue.$y)
        dispatch(changeHabit('startDate',`${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`))
    }

    const handleSubmit = () =>{
        dispatch(createHabit())
    }

    return(
        <>
            <h1>새로운 습관 추가</h1>
            <TextField id="outlined-basic" variant="outlined" placeholder="Title"
                       error ={!titleValidation}
                       helperText={!titleValidation ? '제목은 공백일 수 없습니다.': null}
                       onChange={handleHabitTitleChange}/>
            <br/><br/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Start Date"
                    value={value}
                    onChange={(newValue)=>handleStartDateChange(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <br/>
            <Button onClick={handleSubmit}>저장하기</Button>
        </>
    )
}