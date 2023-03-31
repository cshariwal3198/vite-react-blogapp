import React ,{ useState}from 'react'
import LoginForm from '../../admin-files/verification/loginForm';
// import '../../'

function UpdateBlog() {
    
    function verifyUserCreadentials(details:any){
        console.log(details)
    }

  return (
    <div>
        <LoginForm account='User' varifyCredentials={verifyUserCreadentials}/>
    </div>
  )
}

export default UpdateBlog