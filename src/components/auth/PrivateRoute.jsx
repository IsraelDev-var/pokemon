import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

const PrivateRoute = () => {
  const { name } = useSelector((store) => store.userName);

  if (name)
    return (
      <Header>
        <Outlet />
      </Header>
    );

  return <Navigator to="/" />;
};
export default PrivateRoute;
