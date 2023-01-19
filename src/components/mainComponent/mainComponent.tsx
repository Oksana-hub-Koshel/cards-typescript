
import {Routes, Route} from "react-router-dom";
import {Home} from "../../pages/home/Home";
import {Error} from "../errorPage/errorPage";
import {Info} from "../../pages/info/Info";
import {FC} from "react";

const MainComponent: FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error/>} />
                <Route path="/products/:id" element={<Info />} />
            </Routes>
        </div>
    );
};

export default MainComponent;