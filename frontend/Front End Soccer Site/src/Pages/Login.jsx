import { Link } from "react-router-dom";
function Login(){
    return(
        <>
        <h1>Fantasy Soccer</h1>
        <Link to="/waiting"> 
        <button>Login</button>
        </Link>
        </>
    ); 
}

export default Login