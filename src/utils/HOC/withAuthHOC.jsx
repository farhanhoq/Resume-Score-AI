import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const WithAuthHOC = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");

        if (!isLogin) {
            navigate("/")

            return;
        }
    }, []);

    return <WrappedComponent {...props} />;
}
};

export default WithAuthHOC;