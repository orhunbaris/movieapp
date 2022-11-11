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
    <section className="login-container mx-auto p-12">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <h1 className="text-center text-3xl text-lime-300">Welcome!</h1>
          <div className="w-auto bg-white   rounded-lg shadow dark:border md:mt-0 sm:max-wmd xl:p-0 dark:bg-neutral-800 opacity-90 dark:border-gray-300">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <form className="login-form space-y-2  m-2 p-5 " onSubmit={handleSubmit}>
                        <div className="inner-form-element py-5">
                          <label className="label-name block rounded-md text-lg text-white">Name</label>
                          <input
                            type="text"
                            id="name"
                            className="rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full"
                            placeholder=" Your Name"
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                          ></input>
                        </div>
                        <div className="inner-form-element py-5">
                          <label className="label-password block rounded-md text-lg text-white">Password</label>
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
                          className="submit-button px-3 bg-lime-300 rounded hover:bg-lime-500 mx-2"
                          value="login"
                          onClick={() => setFormAction("login")}
                        >
                          Login
                        </button>
                        <button
                          type="submit"
                          className="submit-button px-3 bg-lime-300 rounded hover:bg-lime-500 mx-2"
                          value="register"
                          onClick={() => setFormAction("register")}
                        >
                          Register
                        </button>
                      </form>
          </div>                        
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
