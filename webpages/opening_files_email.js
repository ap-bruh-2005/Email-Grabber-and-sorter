
var btn1 = document.getElementById("btn-for-opening")

btn1.addEventListener('click', () => {
    window.electronAPI1.open_files_on_system()
})


