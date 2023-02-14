var keywords = document.getElementById('current_keywords1')
function get_keywords(){
    const get_keywords  = window.electronAPI1.get_current_keywords()
        get_keywords.then(value => {
            console.log(value)
            final_value=value[0]
            for (i=1; i<value.length; i++){
                final_value = final_value + " , " + value[i]
            }
            keywords.innerHTML = final_value
        })
    }

get_keywords()
var keyword_add = document.getElementById('keyword_add')
var delete_keywords = document.getElementById('remove_keywords')

keyword_add.addEventListener("click",() => {
    var keyword_add_value = document.getElementById('keyword_add_value').value
    window.electronAPI1.add_keywords_to_file(keyword_add_value)
    document.getElementById('keyword_add_value').value  = ""

    get_keywords()
})

delete_keywords.addEventListener("click",() => {
    console.log("delete_keywords clicked")
    window.electronAPI1.delete_keywords()
    get_keywords()
    keywords.innerHTML = ""
})