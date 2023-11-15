import { FcGoogle } from "react-icons/fc";
import { signUpLogin } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  function goSignUp() {
    signUpLogin()
      .then((result) => {
        localStorage.setItem("authUser", JSON.stringify(result.user));
        navigate("/");
      })
      .catch((result) => {
        console.log(result);
      });
  }
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <button onClick={goSignUp} className="btn btn-outline ">
        <FcGoogle />
        Sign up with Google
      </button>
    </div>
  );
}

export default Login;
