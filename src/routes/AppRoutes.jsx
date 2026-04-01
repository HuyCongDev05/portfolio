import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import Project from "../pages/Project/Project"
import Detail from "../pages/Detail/Detail";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}