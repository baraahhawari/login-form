function LOGINFORM(){ 
    var email = document.forms["email"];                   
    var password = document.forms["password"]; 
    // var name = document.forms["Username"]; 
     
    // if (name.value == "")                                  
    // { 
    //     window.alert("Please enter your name."); 
    //     name.focus(); 
    //     return false; 
    // } 
   
     
    if (password.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    return true; 
}