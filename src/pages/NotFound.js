import { useNavigate } from "react-router-dom";

function NotFound() {

    let navigate = useNavigate();
    function handleClick() {
      navigate("/");
    }

    return (
        <div>
            <p>Page not found!</p>
            <button onClick={handleClick}>go to welcome page</button>
        </div>
    )
}

export default NotFound
