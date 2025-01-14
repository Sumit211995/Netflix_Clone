
export const checkValidateData = (name, email, password, isSignup)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = isSignup ? /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name) : true;
    
    if(isSignup && !isNameValid) return "Full Name is not valid!";
    if(!isEmailValid) return "Email ID is not valid!";
    if(!isPasswordValid) return "Your Password is not valid!";

    return null;

}