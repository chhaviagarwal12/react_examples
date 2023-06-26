import React from "react";
import { useState } from "react";


const UserForm=({onUserAdd})=>{
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')


    const handleSubmit=(event)=>{
        event.preventDefault()
        onUserAdd({name,email})
        setEmail('')
        setName('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Username</label>
                <input id="name" value={name} onChange={(e)=>{
                    setName(e.target.value)
                }}></input>
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input  id="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}>
                </input>
            </div>
            <button>Submit</button>
        </form>
    )
}
export default UserForm
