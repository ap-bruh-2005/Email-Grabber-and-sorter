import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib as smtp
from sys import argv
from os.path import exists

class send_email:

    def __init__(self, email_id : str , password: str, email_reciever: str, file_name: str):
        self.email_id = email_id
        self.password = password
        self.email_reciever = email_reciever
        self.file_name = file_name



    def email_sender(self):
        s = smtp.SMTP('smtp.office365.com', 587)
        s.starttls()
        s.login(self.email_id, self.password)
    
        with open(self.file_name, "r") as f:
            lines=f.readlines()
            final_message = ' '.join(lines)
        msg = MIMEMultipart()
        msg['FROM'] = self.email_id
        msg['TO'] = self.email_reciever
        msg.attach(MIMEText(final_message, 'plain'))
        s.sendmail(self.email_id, self.email_reciever, str(msg))
        s.quit()
        


if __name__ == "__main__":
    if(os.getcwd()[-14:] != "/python_engine"):
        os.chdir(os.getcwd()+"/python_engine")
        
    with open("passwd.txt", "r") as f:
        passwd1 = f.readline()
    with open("email.txt", "r") as f:
        email1 = f.readline()


    reciever = argv[-2]
    file_name = argv[-1]
    send_email_obj = send_email(email1, passwd1, reciever,file_name )
    send_email_obj.email_sender()



