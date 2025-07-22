//Here we are using external Javascript "script.js" which links html page adding dynamic change to the content.
 
// Function to display product onclicking 
var mainImg = document.getElementById("mainImg");   //returns the element with id mainImg
var smallimg = document.getElementsByClassName("small-img");  //returns the element  with id small-img


smallimg[0].onclick =function(){            //onclicking the small image 

    mainImg.src = smallimg[0].src;          //sets small image with index 0 to single  main img

}
smallimg[1].onclick =function(){

    mainImg.src = smallimg[1].src;         //sets small image with index 1 to single  main img

}
smallimg[2].onclick =function(){

    mainImg.src = smallimg[2].src;         //sets small image with index 2  to single  main img

}



// Function to validate login form

function validationform(){            //get the email and password value from the form

    var email = document.forms["loginform"]["email"].value;  
    var password = document.forms["loginform"]["password"].value;
    
    if (email == "" || password == "" ) {     //Check if either email or password is empty

        alert("Empty fields found. Please fill up the login form.");   //alert user  to fill all section of form 
    }
    else{
        
        alert("Great to see you again!. You are now logged in to Printerworld!!!" )  
        
    }
}


//Function to validate signup form
function validateform(){

    var email = document.forms["Signupform"]["email"].value;
    var username = document.forms["Signupform"]["user"].value;
    var password = document.forms["Signupform"]["pswd"].value;
    var passwordrepeat = document.forms["Signupform"]["pswd-repeat"].value;
    
    if (email == "" || username == "" || password == "" || passwordrepeat == "") {
        alert("Empty fields found. Please fill up the Signup form.");
    }
    else{
        alert("Thank you for subscibing!! . Welcome to  Printerworld!!!" )  // alert message dispalys when user successfully sign up the form
        
    }

}

