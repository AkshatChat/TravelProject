function validate(){
    var email=document.getElementById("email").value;
    var standardEmail = /^(?!.+@(gmail|yahoo|hotmail|outlook|msn)\..+)(.+@.+\..+)$/;
    if(standardEmail.test(email)){
        window.location.href="correctsignup.html";
       }
    else{
        document.getElementById("result").style.display="block";
        document.getElementById("result").innerHTML="Personal emails aren't valid, please try again with your work email";
    }
}
        