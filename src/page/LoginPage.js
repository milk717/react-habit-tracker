import {TextField} from "@mui/material";
import {idValidation, passwordValidation} from "../resource/validation";
import {useState} from "react";

export default function LoginPage() {
    const [idValidState, setIdValidState] = useState(true);
    const [passwordValidState, setPasswordValidState] = useState(true);

    const handleIdChange = (e) =>{
        if(idValidation.test(e.target.value)){
            setIdValidState(true);
        }else{
            setIdValidState(false);
        }
    }

    const handlePasswordChange = (e) =>{
        if(passwordValidation.test(e.target.value)){
            setPasswordValidState(true);
        }else{
            setPasswordValidState(false);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <TextField id="outlined-basic" variant="outlined" placeholder="ID"
                       helperText={!idValidState &&'4~10자리의 영문/숫자를 입력하세요'}
                       error ={!idValidState}
                       onChange={handleIdChange}
            />
            <br/>
            <TextField id="outlined-basic" variant="outlined" placeholder="Password"
                       helperText={!passwordValidState &&'8~12자리의 영문/숫자를 입력하세요'}
                       error ={!passwordValidState}
                       onChange={handlePasswordChange}
            />
        </>
    );
}