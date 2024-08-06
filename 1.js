function checkPassword(){
    var password = document.getElementById("password").value
    var confrimpassword = document.getElementById("confrimPassword").value
    
    if(password.length != 0){
        if(password==confrimpassword){
            alert('password match')
    
        }
        else{
            alert('password do not match,Please Try Again')
        }
    }
    
}
checkPassword()