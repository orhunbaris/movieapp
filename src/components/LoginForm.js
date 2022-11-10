import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import { formActionType } from "../constants/Constants.js";
import { Container } from "@mui/material";

function LoginForm() {
  // State to store users
  const [user, setUser] = useState({ name: "", password: "" });

  const [formAction, setFormAction] = useState("");
  // navigation
  const navigate = useNavigate();
  // Current User Context
  const { setCurrentUser, registeredUsers, addNewUser } =
    useContext(UserContext);

  // fetching the registered users from db.json
  useEffect(() => {
    //fetchUsers()
  }, []);

  //console.log(currentUser)

  const handleSubmit = (e) => {
    e.preventDefault();

    const isRegistered = registeredUsers.some(
      (registeredUsers) =>
        registeredUsers.name === user.name &&
        registeredUsers.password === user.password
    );

    const matchedUser = registeredUsers.find(
      (registeredUsers) =>
        registeredUsers.name === user.name &&
        registeredUsers.password === user.password
    );

    if (formAction === formActionType.LOGIN) {
      if (isRegistered) {
        // If login process is successful update UserContext -> current_user and update isLoggedIn which is passed by UserContext from parent component
        setCurrentUser({
          ...matchedUser,
          isLoggedIn: true,
        });
        localStorage.setItem("currentUser", matchedUser.name);
        navigate("/popular");
      } else {
        alert("cannot log in...");
      }
    } else if (formAction === formActionType.REGISTER) {
      const userToAddId = Math.floor(Math.random() * (1000 - 5) + 5);

      const newUser = {
        id: userToAddId,
        name: user.name,
        password: user.password,
        favlist: [],
      };
      addNewUser(newUser);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center hover:text-slate-500">Welcome!</h1>

      <form className="login-form text-center m-2 p-12" onSubmit={handleSubmit}>
        <div className="inner-form-element">
          <label className="label-name px-5 border-2 rounded-md ">Name</label>
          <input
            type="text"
            id="name"
            className="rounded"
            placeholder=" Your Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </div>
        <div className="inner-form-element py-2">
          <label className="label-password px-2 border-2 rounded-md ">Password</label>
          <input
            type="password"
            id="password"
            placeholder=" Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="rounded"
          ></input>
        </div>
        <button
          type="submit"
          className="submit-button px-3 bg-slate-300 rounded hover:bg-slate-200 mx-2"
          value="login"
          onClick={() => setFormAction("login")}
        >
          Login
        </button>
        <button
          type="submit"
          className="submit-button px-3 bg-slate-300 rounded hover:bg-slate-200 mx-2"
          value="register"
          onClick={() => setFormAction("register")}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
