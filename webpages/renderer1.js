
async function waiting_to_check_if_details_are_entered(){
    const checker  = window.electronAPI1.check_if_details()
    checker.then(value => {
        console.log(value)
        if(value[0] == 0 || value[1] == 0){
            var init_div = document.getElementById("div1")
            var basic_info = document.createElement("p")
            basic_info.innerHTML = '<b>Please add your email and password before you use this product. You can do this by adding it in the details section. <a href="add_details.html"><u>Take me there</u></href></b>'
            basic_info.classList.add("text_style")
            basic_info.style.marginTop = "15px"
            init_div.appendChild(basic_info)
            init_div.style.marginTop = "10px"
        
        }else{
            window.electronAPI1.put_emails_in_respective_file()
        }
    })
}

waiting_to_check_if_details_are_entered()






