

var button1 = document.getElementById("add_email_passwd")
button1.addEventListener("click", () => {
    var re = /\S+@\S+\.\S+/;
    console.log("button clicked")
    var email_ = document.getElementById('get_email').value
    var password_ = document.getElementById('get_password').value
    console.log(re.test(email_))
    if(re.test(email_) == true){
        window.electronAPI1.add_email_to_file(email_, "add_email_to_file")
        window.electronAPI1.add_password_to_file(password_, "add_password_to_file")
        document.getElementById('get_email').innerHTML = ""
        document.getElementById('get_password').innerHTML = ""
    }else{
        new Notification("INVALID ENTRY" , { body: "PLease enter a valid entry" })
            
        document.getElementById('get_email').innerHTML = ""
        document.getElementById('get_password').innerHTML = ""

        }

})

var exclude_email_ids = document.getElementById('exclude_emails')
exclude_email_ids.addEventListener("click", () => {
    window.electronAPI1.exclude_email(document.getElementById('excluded_id').value, "ADD")
    document.getElementById('excluded_id').value = ""
})