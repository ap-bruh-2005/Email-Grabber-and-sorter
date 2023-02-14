const { contextBridge, ipcRenderer } = require('electron')
// This is to expose the APIs and also essentially help the index.js communicate with the frontend
contextBridge.exposeInMainWorld('electronAPI1', {

    put_emails_in_respective_file: () => ipcRenderer.send('put_emails_in_respective_file'),
    open_files_on_system: () => ipcRenderer.send('open_files_on_system'), 
    check_if_details: () => ipcRenderer.invoke('Check_if_details_is_given'), // Check if password is filled or not
    get_quick_response_files: () => ipcRenderer.invoke('get_quick_response_files'), // Check if password is filled or not
    get_quick_response_files_del: () => ipcRenderer.invoke('get_quick_response_files_del'), // Deletes quick response files 
    get_current_keywords: () => ipcRenderer.invoke('get_current_keywords'),
    add_keywords_to_file : (keyword) => ipcRenderer.send('add_keywords_to_file', keyword),
    delete_keywords : () => ipcRenderer.send('delete_keywords'),
    add_password_to_file: (pwd, command) => ipcRenderer.send('add_password_to_file', pwd, command),
    add_email_to_file: (email, command) => ipcRenderer.send('add_email_to_file', email, command),
    send_email_to_someone: (reciever, file_name) => ipcRenderer.send('send_email_to_someone', reciever, file_name),
    create_new_file: (file_name, file_content) => ipcRenderer.send('create_new_file', file_name, file_content),
    exclude_email : (emails_to_exclude, val) => ipcRenderer.send('exclude_email', emails_to_exclude, val)
   
    

})
