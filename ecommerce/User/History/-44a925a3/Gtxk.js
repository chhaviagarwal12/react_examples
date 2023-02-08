import React from "react";
import { useState } from "react";
import { Button,Label } from "semantic-ui-react";
import fakeStore from "../../apis/fakeStore"
import { userDetails } from "../../actions";
import { connect } from "react-redux";


const UserLogin=(props)=>{

    const [username,setUsername]=useState("")
    const [passwd,setPassword]=useState("")
   //  const [userId,setUserId]=useState()


    async function userLoginRequest(){
      try{
         const response=await fakeStore.post('/auth/login',{
             username: username,
            password: passwd
            })
            console.log("from user login request function response",response)
            const key=Object.keys(response.data)[0]
            const value=Object.values(response.data)[0]
            window.localStorage.setItem(key,value)

            getUserList()
      }
      catch(error){
         console.log("from user login request function",error)
      }
    }
 
   const getUserList=async()=>{
      try{
         const response=await fakeStore.get('/users')
         console.log("from get user list function response",response)
         for(const userdata of response.data){
                     if(Object.is(username,userdata.username)){
                      console.log("userdata id",userdata.id)
                        //  setUserId(userdata.id)
                        //  console.log("from user login",userId)
                        await props.userDetails(userdata.id)
                     }
                  }
                  
                  //  window.location.replace("/")
                 
      }
      catch(error){
         console.log("from get user list function",error)
      }
   }
   

 const handleSubmit=(event)=>{
   console.log("in handle submit")
    event.preventDefault();
    
 }
 const handleUsername=(event)=>{
   //  console.log("username")
    setUsername(event.target.value)
 }
 const handlePassword=(event)=>{
   //  console.log("password")
    setPassword(event.target.value)
 }
    return(
        
        <div>
           <div className="ui center aligned container" >
            <div className="ui form">
                <div className="ui field">
                <label className="left floated">Enter Username</label>
                <div className="ui focus input">  
                <input 
                type="text"
                value={username}
                error={{ content: 'Please enter user name', pointing: 'below' }}
                name='Username'
                placeholder='username'
                id='form-input-user-name'
                onChange={handleUsername}/>
                </div>
                </div>
           
               <div className="ui field">
               <label className="left floated">Enter Password</label>
               <div className="ui fluid focus input">
                
                <input 
                type="password"
                value={passwd}
                error={{ content: 'Please enter password', pointing: 'below' }}
                label='Password'
                placeholder='password'
                id='form-input-passwd'
                onChange={handlePassword}/>
                </div>
               </div>
                
               <div className="ui field">
               <Button type="submit" color="pink" className="ui center floated" onClick={(event)=>{
                  handleSubmit(event)
                  userLoginRequest()}} >SUBMIT</Button>
               </div>
                 
            </div>
            </div> 
            
            </div>
    )
}

export default connect(null,{userDetails})(UserLogin)