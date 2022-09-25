import {useState} from "react";
import {idValidation} from "../resource/validation";
import {useDispatch, useSelector} from "react-redux";
import {changeHabit} from "../modules/habitReducer";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function EditHabitPage(){
    const dispatch = new useDispatch();
    const [titleValidation, setTitleValidation] = useState(true);
    const startDate = useSelector(state=>state.habitReducer.habit)
    const [value, setValue] = useState(null);
    
    const handleHabitTitleChange = (e) =>{
        if(idValidation.test(e.target.value)){
            setTitleValidation(true);
        }else{
            setTitleValidation(false);
        }
    }

    const handleStartDateChange = (e) =>{
        dispatch(changeHabit('startDate', e));
    }

    return(
        <>
            <h1>새로운 습관 추가</h1>
            <TextField id="outlined-basic" variant="outlined" placeholder="ID"
                       helperText={!titleValidation &&'4~10자리의 영문/숫자를 입력하세요'}
                       error ={!titleValidation}
                       onChange={handleHabitTitleChange}/>
            <br/><br/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </>
    )
}