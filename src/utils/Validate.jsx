export const checkValidate = (name,email,password) => {
    if(name.current !== null){
        const validName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name.current.value);
        if(!validName) return "Name should have atleast firstname and lastname";
    }
    const validEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validEmail) return "Invalid Email Id";
    if(!validPassword) return "Password should be 8 characters, Contains a capital letter, lowercase, a number, an special charcter";
    return null;
}