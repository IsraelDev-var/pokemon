import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

const PrivateRoute = () => {

    const {name} = useSelector((store) => store.userName)

    if(name) return <Outlet />

    return <Navigator to="/" />

}
export default PrivateRoute