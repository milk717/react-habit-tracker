import DateExtension from './utils/DateExtension'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import HabitListContainer from "./container/HabitListContainer";
import HomeContainer from "./container/HomeContainer";
import TogetherContainer from "./container/TogetherContainer";
import HabitPage from "./page/HabitPage";
import EditHabitPage from "./page/EditHabitPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}>
                        <Route path="/home" element={<HomeContainer/>}/>
                        <Route path="/habit" element={<HabitListContainer/>}/>
                        <Route path="/together" element={<TogetherContainer/>}/>
                    </Route>
                    <Route path="/habit/:id" element={<HabitPage/>}/>
                    <Route path="/habit/edit" element={<EditHabitPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
