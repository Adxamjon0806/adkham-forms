import { useDispatch, useSelector } from "react-redux";
import Router from "./router/Router";
import { useEffect } from "react";
import UserFetch from "./Api/UserFetchApi";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      UserFetch.checkAuth(dispatch);
    }
  }, []);
  console.log(user);

  return <Router />;
}

export default App;
