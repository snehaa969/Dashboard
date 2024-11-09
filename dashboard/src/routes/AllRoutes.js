import { Routes, Route } from 'react-router-dom';
import { Home, Explore, Features } from '../pages';

export const AllRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/features" element={<Features/>}/>
                <Route path="/explore" element={<Explore/>}/>
            </Routes>
        </div>
    )
}