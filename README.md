# Computer Science Internal Assessment Product

This is my computer Science IA product. Essentially, it is a desktop application built using Electron, to help increase my client's productivity by optimising his email system. It is important to remember that without inputting an outlook account and password this application wont work.
 
## Prerequisites required to run the application

Due to the usage of certain dependencies, to run the application we need to have the following packages and technologies installed - 
Electron and the python-shell package. The python-shell package can be download using NPM. 

```bash
#Example installation 
npm install python-shell
```
Furthermore, we also need to install certain python packages such as pandas, imaplib, smtplib, BeautifulSoup. This can be done using pip and then the package name

```bash
#Example installation 
pip install pandas
```

## How to run the electron application 

Running the application involves going to the directory the code is present in and then running the following command. Note : If this doesn't work you can edit the package.json file to change the start command. It may also not work due to an incorrect installation of electron 

```bash
electron . 
```
