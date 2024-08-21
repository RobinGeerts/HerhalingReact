import {FunctionComponent} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import Bar from './pages/bar/bar.tsx'
import Home from './pages/home/home.tsx'
import Class from './pages/class/class.tsx'
import PageNotFound from './pages/404/pageNotFound.tsx'
import Student from './pages/class/student.tsx'
import Foo from './pages/foo/foo.tsx'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/foo'} element={<Foo/>}/>
            <Route path={'/bar'} element={<Bar/>}/>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/class'} element={<Outlet/>}>
                <Route index element={<Class/>}/>
                <Route path={':id'} element={<Student/>}/>
            </Route>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Routing