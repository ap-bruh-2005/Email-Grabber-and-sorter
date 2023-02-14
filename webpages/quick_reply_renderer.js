

var create_new_file = document.getElementById('create_new_file_button')
var delete_file = document.getElementById('delete_new_file_button')

async function waiting_to_check_if_details_are_entered(){
    const qr_file_names  = window.electronAPI1.get_quick_response_files()
    qr_file_names.then(value => {
        console.log("Promise in action")
        var to_be_displayed=""
        for(i=0; i<value.length; i++){
            to_be_displayed = to_be_displayed + " " + value[i]
        }

        var display_keywords = document.getElementById("current_keywords")
        display_keywords.innerHTML = to_be_displayed


    })
}

waiting_to_check_if_details_are_entered()

delete_file.addEventListener('click', ()=>{
    window.electronAPI1.get_quick_response_files_del()
    document.getElementById("current_keywords").innerHTML = " "

})


create_new_file.addEventListener('click' , () => {
    var create_div = document.createElement('div')
    create_div.classList.add("div-row")
    var val1 = document.createElement('h1')
    val1.classList.add("current_key")
    val1.classList.add("text_style")
    val1.classList.add("padding-current_keywords")
    val1.classList.add("margin-push")
    val1.innerHTML = "File Name :  "
    create_div.appendChild(val1)
    var val2 = document.createElement('input')
    val2.setAttribute("type", "text");
    val2.id = "file_name"
    create_div.appendChild(val2)

    var create_div2 = document.createElement('div')
    create_div2.classList.add("div-row")
    var val3 = document.createElement('h1')
    val3.classList.add("current_key")
    val3.classList.add("text_style")
    val3.classList.add("padding-current_keywords")
    val3.classList.add("margin-push")
    val3.innerHTML = "File contents :  "
    create_div2.appendChild(val3)
    var val4 = document.createElement('input')
    val4.setAttribute("type", "text");
    val4.id = "file_contents"
    create_div2.appendChild(val4)

    var line_break = document.createElement('p')
    line_break.innerHTML = "<br>"

    var button1 = document.createElement('button')
    button1.id = "create-new-file-buttons"
    button1.classList.add("remove_all_keys")
    button1.classList.add("button-left")
    button1.innerHTML = "Create File"


    var cont_div = document.getElementById('new_file')
    cont_div.appendChild(create_div)

    cont_div.appendChild(create_div2)

    cont_div.appendChild(button1)

    var create_file_button = document.getElementById('create-new-file-buttons')
    create_file_button.addEventListener("click", () => {
    console.log("button clicked")
    var file_name = document.getElementById('file_name').value
    var file_contents = document.getElementById('file_contents').value

    window.electronAPI1.create_new_file(file_name, file_contents)
    document.getElementById('file_name').value = ""
    document.getElementById('file_contents').value = ""
}

)

})


var button_to_send_email = document.getElementById('send_email')
button_to_send_email.addEventListener("click", () => {
    var reciever_email = document.getElementById('reciever_email').value
    var file_name = document.getElementById('file_name2').value
    window.electronAPI1.send_email_to_someone(reciever_email, file_name)
    document.getElementById('reciever_email').value = ""
    document.getElementById('file_name2').value = ""
})


