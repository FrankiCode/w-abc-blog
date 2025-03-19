
import Film from '../Pages/Film'
import Education from '../Pages/Education'
import ArtPhotography from '../Pages/Art&Photography'
import Ecommerce from '../Pages/ECommerce'
import Login from '../Pages/Login'
import { Routes, Route } from 'react-router'

const WebRouter = () => {

    const routes = [
        {id: 100, path: "/film", element: <Film/>},
        {id: 101, path: "/education", element: <Education/>},
        {id: 102, path: "/Art&Photography", element: <ArtPhotography/>},
        {id: 103, path: "/e-commerce", element: <Ecommerce/>},
        {id: 104, path: "/login", element: <Login/>},
    ]

  return (
    <div>
        <Routes>
            {
                routes.map(({id, path, element}) => {
                    return <Route key={id} path={path} element={element}></Route>
                })
            }
        </Routes>
    </div>
  )
}

export default WebRouter