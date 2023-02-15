const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require('path')
var { PythonShell } = require('python-shell');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 960,
    height: 600,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname+'/webpages/', 'preload.js')
    }

  })

  // Below is the IPC design patterns to help connect the frontend with backend

  ipcMain.handle('Check_if_details_is_given', async (event) =>{
    let results1 = " "
    let options = {
      mode: 'text',
      args: [],
      scriptPath: './python_engine/'
    }

    PythonShell.run('checker_if_email_and_password_is_there.py', options, function (err, results) {

      if (err) throw err;
      results1 =  results


    });

    console.time("Promise");
    await new Promise(done => setTimeout(() => done(), 2000))
    console.timeEnd("Promise");



    return results1

  })

  ipcMain.handle('get_quick_response_files', async (event) =>{
    console.log("GET QR HANDLER CALLED")
    let results1 = " "
    let options = {
      mode: 'text',
      args: ["print"],
      scriptPath: './python_engine/'
    }

    PythonShell.run('all_qr_files.py', options, function (err, results) {

      if (err) throw err;

      results1 =  results

    });

    console.time("Promise");
    await new Promise(done => setTimeout(() => done(), 3000))
    console.timeEnd("Promise");



    return results1

  })

    ipcMain.handle('get_quick_response_files_del', async (event) =>{
     
        await new Promise(done => setTimeout(() => done(), 2000))
        console.timeEnd("Promise");

        console.log("GET QR HANDLER CALLED")
        let results1 = " "
        let options = {
            mode: 'text',
            args: ["del"],
            scriptPath: './python_engine/'
        }

        PythonShell.run('all_qr_files.py', options, function (err, results) {

            if (err) throw err;
            results1 =  results
            
        });

        console.time("Promise");
        await new Promise(done => setTimeout(() => done(), 2000))
        console.timeEnd("Promise");



        return results1

    })

  ipcMain.handle('get_current_keywords', async (event) =>{
    console.log("GET CURRENT KEYWORDS CALLED")
    let results1 = " "
    let options = {
      mode: 'text',
      args: ["get"],
      scriptPath: './python_engine/'
    }

    PythonShell.run('get_current_keywords.py', options, function (err, results) {

      if (err) throw err;

      results1 =  results

    });

    console.time("Promise");
    await new Promise(done => setTimeout(() => done(), 2000))
    console.timeEnd("Promise");


    console.log(results1)
    return results1

  })

  ipcMain.on('add_keywords_to_file', (event, keyword) => {

    let results1 = " "
    let options = {
      mode: 'text',
      args: [keyword,"add"],
      scriptPath: './python_engine/'
    }
    PythonShell.run('get_current_keywords.py', options, function (err, results) {

      if (err) throw err;
      results1 =  results


    });
  })



  ipcMain.on('put_emails_in_respective_file', (event) => {

    let results1 = " "
    let options = {
      mode: 'text',
      args: ["grab_emails"],
      scriptPath: './python_engine/'
    }
    PythonShell.run('email_grabber.py', options, function (err, results) {

      if (err) throw err;
      results1 =  results

    });
  })

  ipcMain.on('exclude_email', (event, emails_to_exclude, val) => {
    console.log("exclude emails called")
    let results1 = " "
    let options = {
      mode: 'text',
      args: [emails_to_exclude, val],
      scriptPath: './python_engine/'
    }
    PythonShell.run('emails_exclude.py', options, function (err, results) {

      if (err) throw err;
      results1 =  results

    });


  })

  ipcMain.on('add_password_to_file', (event, pwd, command) => {
    console.log("add password to file called")
    let results1 = " "
    let options = {
      mode: 'text',
      args: [pwd, command],
      scriptPath: './python_engine/'
    }
    PythonShell.run('add_email_password_to_file.py', options, function (err, results) {

      if (err) throw err;
     
      results1 =  results



    });
  })

  ipcMain.on('open_files_on_system', () => {
    console.log("OPENING FILES")

    let results1 = " "
    let options = {
      mode: 'text',
      args: [],
      scriptPath: './python_engine/'
    }
    PythonShell.run('show_emails.py', options, function (err, results) {

      if (err) throw err;
      results1 =  results

    });
  })

  ipcMain.on('add_email_to_file', (event, email, command) => {
    console.log("add email to file")
    let results1 = " "
    let options = {
      mode: 'text',
      args: [email, command],
      scriptPath: './python_engine/'
    }
    PythonShell.run('add_email_password_to_file.py', options, function (err, results) {

      if (err) throw err;
     
      results1 =  results


      

    });
  })

  ipcMain.on('delete_keywords', (event) => {
    console.log("DElete keywords called")
    let options = {
      mode: 'text',
      args: ["del"],
      scriptPath: './python_engine/'
    }
    PythonShell.run('get_current_keywords.py', options, function (err, results) {

      if (err) throw err;
      results1 =  results


    });
  })

  ipcMain.on('send_email_to_someone', (event, reciever, file_name) => {
    let options = {
      mode: 'text',
      args: [reciever, file_name],
      scriptPath: './python_engine/'
    }
    PythonShell.run('send_emails.py', options, function (err, results) {

      if (err) throw err;
      // results is an array consisting of messages collected during execution
      //results1 = results
      //console.log("The results are " + results)
      results1 =  results


      //console.log('results: %j', results);

    });
  })

  ipcMain.on('create_new_file', (event, file_name, file_content) => {
    console.log("creating file")
    let options = {
      mode: 'text',
      args: [file_name, file_content],
      scriptPath: './python_engine/'
    }
    PythonShell.run('create_new_qr_file.py', options, function (err, results) {

      if (err) throw err;
      // results is an array consisting of messages collected during execution
      //results1 = results
      //console.log("The results are " + results)
      results1 =  results


      //console.log('results: %j', results);

    });
  })



  mainWindow.loadFile('./webpages/index.html')


  // Below line is to open the DevTools for debugging.
  // mainWindow.webContents.openDevTools()

   function showNotification () {
    new Notification({ title: "INVALID ENTRY", body: "Please enter a valid entry" }).show()
  }

}


// Below code is for closing the app and reaction of the app to closing it(Differs on windows and mac)

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

