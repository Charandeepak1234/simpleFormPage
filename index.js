const nameErrorMsg=document.getElementById("nameErrorMsg")
const mailErrorMsg=document.getElementById("mailErrorMsg")
const msgErrorMsg=document.getElementById("msgErrorMsg")
const successMsg=document.getElementById("successMsg")

const form=document.getElementById("formId")

form.addEventListener("submit",function(event){
    event.preventDefault()
    if(document.getElementById("name").value===""){
        nameErrorMsg.style.display="block"
    }else{
        nameErrorMsg.style.display="none"
    }

    if(document.getElementById("email").value===""){
        mailErrorMsg.style.display="block"
    } else{
        mailErrorMsg.style.display="none"
    }

    if(document.getElementById("message").value===""){
        msgErrorMsg.style.display="block"
    } else{
        msgErrorMsg.style.display="none"
    }

    if((document.getElementById("message").value.length>=1) && (document.getElementById("email").value.length>=1) && (document.getElementById("name").value.length>=1)){
        successMsg.style.display="block"
    }else{
        successMsg.style.display="none"
    }
})