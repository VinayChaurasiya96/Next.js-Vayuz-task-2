

/**
 * desc user login validation 
 * @param {*} values {email,password}
 * @returns 
 */
export default function Login_validate(values) {
    const errors = {};
 
    //validation for email
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    // validation for password
    if(!values.password){
        errors.password = "Required";
    }else if(values.password.length < 8 || values.password.length > 20 ){
        errors.password = "Must be greater than 8 and less than 20 characters long"
    }else if(values.password.includes(" ")){
        errors.password =  "Invalid Password"
    }

    return errors;

  
    
  
}

/**
 * desc User signup validation
 * @param {*} values {username,email,password,cpassword}
 * @returns 
 */
export function Signup_validate(values){
  const errors = {};
     // validation for username
     if(!values.username){
      errors.username = 'Required';

     }
 
    //validation for email
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    // validation for password
    if(!values.password){
        errors.password = "Required";
    }else if(values.password.length < 8 || values.password.length > 20 ){
        errors.password = "Must be greater than 8 and less than 20 characters long"
    }else if(values.password.includes(" ")){
        errors.password =  "Invalid Password"
    }
    
    // validation for confirm password
     if(!values.cpassword){
          errors.cpassword = "Required";
      }else if(values.cpassword.length < 8 || values.cpassword.length > 20 ){
          errors.cpassword = "Must be greater than 8 and less than 20 characters long"
      }else if(values.cpassword.includes(" ")){
          errors.cpassword =  "Invalid Password"
      }else if(values.password != values.cpassword){
        errors.cpassword = "Password not match"
      }


    return errors;

  
}
