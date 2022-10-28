import { useState } from "react"



function WelcomeForm({handleSubmit, user, setUser}){

    

    return(
        <div>
            <h1>Welcome!</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="inner-form-element">
                    <label className="label-name">Name</label>
                    <input type="text"  id="name" placeholder="Your Name" onChange={(e) => setUser({...user, name: e.target.value })}></input>
                </div>
                <div className="inner-form-element">
                    <label className="label-password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value })}></input>
                </div>
                <button type="submit">Login</button>


            </form>
        </div>
    )

}

export default WelcomeForm