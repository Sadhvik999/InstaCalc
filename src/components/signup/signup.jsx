import React from "react";

export default function Signup(){
    return (
        <>
        <h1>InstaCalc</h1>
        <form >
            <label>Username:</label>
            <input type="text" placeholder="username"/>
            <label>Password:</label>
            <input type="password" placeholder="password"/>
            <button>Submit</button>
        </form>
        </>
    )
}