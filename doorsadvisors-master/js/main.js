// doors advisor js
listingSubmit = (e) =>{ 
    e.preventDefault();
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    var txtEmail = document.getElementById("txtEmail");
    var e = document.getElementById("CustomSelect");
    var strUser = e.options[e.selectedIndex];  
    var txtNumber = document.getElementById("txtNumber"); 
    var txtQurery = document.getElementById("txtQurery"); 
    var errEmail= document.getElementById("errEmail");
    var errNum= document.getElementById("errNum");
    var errQuery= document.getElementById("errQuery"); 
    // var sucess= document.getElementById("sucess"); 
    var errDropDown= document.getElementById("errDropDown"); 
    var sucess = document.getElementById("sucess");
    sucess.style.display="none";    
    if(txtEmail.value ==="" ){
        errEmail.innerHTML = "Please enter the email";
        errEmail.style.display="block";
    }
    if(txtEmail.value !== ""){  
        if(pattern.test(txtEmail.value)== true){ 
        errEmail.style.display="none"; 
        }
        if(pattern.test(txtEmail.value)== false){
            errEmail.innerHTML = "Please enter the valid email";
            errEmail.style.display="block";            
        }
    } 
     if(strUser.value ==0){
        errDropDown.innerHTML = "Please select the drop down";
        errDropDown.style.display="block";
    }
    if(strUser.value !=0){ 
        errDropDown.style.display="none"; 
    }
     if(txtQurery.value===""){
        errQuery.innerHTML = "Please enter the message";
        errQuery.style.display="block";
    }
    
    if(txtQurery.value !== ""){  
        if(txtQurery.value.length <5){
        errQuery.innerHTML="Please enter the valid message";
        errQuery.style.display=" block"; 
        }
        else{
        errQuery.style.display="none"; 
        }
    }
   
    if(txtNumber.value !== "") { 
        if(isNaN(txtNumber.value))
        {
            errNum.innerHTML = "Please enter only numbers";
            errNum.style.display ="block";
        return false;
        }
       else if((txtNumber.value.length != 10))
        {
            errNum.innerHTML = "Please enter the 10 digit mobile number";
            errNum.style.display ="block"; 
        return false;
        }
        else{ 
            errNum.style.display ="none";
            }
    }
   
    if((pattern.test(txtEmail.value)== true) && txtQurery.value.length >= 5 && txtEmail.value !== "" &&  txtQurery.value !=="" && strUser.value !=0){
         
        txtEmail.value="";
        txtNumber.value="";
        txtQurery.value=""; 
        sucess.style.display="block";
        console.log("kwjehjhgefjhr");
        return false;
    }
    else{
        return false;
    }
    return false;
}

$(document).ready(function(){
    $('#clients').slick({
        infinite: true,
        slidesToShow: 3.3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('#listing').slick({
        infinite: true,
        appendArrows: $('#appendArrowsDots'),
        appendDots: $('#appendArrowsDots'),
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});