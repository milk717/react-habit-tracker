import {Outlet, useNavigate} from "react-router-dom";
// import {Link} from "@mui/material";
import {Link} from "react-router-dom";
import {Box, Tab, Tabs} from "@mui/material";
import {useState} from "react";

export default function MainPage(){
    const navigate = useNavigate();
    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) =>{
        setValue(newValue);
        navigate(`/${newValue}`)
    }

    return(
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab value={'home'} label="메인"/>
                    <Tab value={'habit'} label="목록"/>
                    <Tab value={'together'} label="투게더" />
                </Tabs>
            </Box>
            <Outlet/>
        </>
    );
}