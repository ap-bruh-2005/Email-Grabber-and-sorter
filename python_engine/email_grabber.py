import email
import imaplib
from logging import raiseExceptions
import os
import csv
from sys import argv
import pandas as pd
from bs4 import BeautifulSoup
from os.path import exists


keywords = []
class grab_emails:
    
  

    def __init__(self, imap_obj, account_email: str, password: str):
        self.imap_obj = imap_obj
        self.account_email = account_email
        self.password = password

    def login(self):
        '''Logs in the email'''
        self.imap_obj.login(self.account_email, self.password)

    def whole_process(self):
        global keywords

        non_incl=[]
        ''' Gets the most recent emails and puts them in urgent and non urgent csv files.'''
        try : 
            with open("keywords.txt", "r") as f:
                keywords= f.readlines()
            print("Keywords : " + str(keywords))
        except:
            raise Exception("Unable to open Keywords file")

        
        status, messages = self.imap_obj.select("INBOX")
        message = int(messages[0])
        if(os.path.getsize("most_recent.txt") != 0):
            with open("most_recent.txt") as f:
                most_recent_message = int(f.readline())
        else:
            most_recent_message = message-10                   

        for i in range(most_recent_message, message-1):

            result, data  = self.imap_obj.fetch(str(i), '(RFC822)')
            email_message = email.message_from_bytes(data[0][1])
            with open("most_recent.txt", "w") as f:
                f.write(str(message))

            if(exists(os.getcwd()+"/non_included.txt")):
                with open("non_included.txt", "r") as f:
                    non_incl = " ".join(f.readlines()).split(" ")

            if(email_message['From'] not in non_incl):
                for part in email_message.walk() :
                    for i in keywords:
                        print("[+] keywords there")
                        i = i.replace("\n", "").strip()
                        if(part.get_content_type()[:4] == "text"):
                            body_ = part.as_string() 
                            body_lines = BeautifulSoup(body_, "lxml").text.lower()  
                            print("The body is : " + str(body_lines.lower().split()))               
                            if(i.lower() in email_message['Subject'].lower().split() or i.lower() in body_lines.split()):
                                db = pd.read_csv(os.getcwd() + '/urgent_mail.csv')
                                with open('urgent_mail.csv', 'a') as f:
                                    init_db = csv.DictWriter(f, ['index','email_from', 'subject', 'body', 'date_time'])
                                    init_db.writerow({'index': db.shape[0],'email_from': email_message['From'],'subject': str(email_message['Subject']),'body': str(body_lines), 'date_time': email_message['Date']})
                            else:
                                db = pd.read_csv( os.getcwd() +'/non_urgent_mail.csv')
                                with open('non_urgent_mail.csv', 'a') as f:
                                    init_db = csv.DictWriter(f, ['index','email_from', 'subject', 'body', 'date_time'])
                                    init_db.writerow({'index': db.shape[0],'email_from': email_message['From'],'subject': str(email_message['Subject']),'body': str(body_lines), 'date_time': email_message['Date']})


if __name__ == "__main__":

    if(os.getcwd()[-14:] != "/python_engine"):
        os.chdir(os.getcwd()+"/python_engine")

    if(os.path.isfile('./urgent_mail.csv') == False):
       d = pd.DataFrame(columns = ['email_from', 'subject', 'body', 'date_time'])
       d.to_csv('urgent_mail.csv')

    if(os.path.isfile('./non_urgent_mail.csv') == False):
       d = pd.DataFrame(columns = ['email_from', 'subject', 'body', 'date_time'])
       d.to_csv('non_urgent_mail.csv')
    

       
    with open("passwd.txt", "r") as f:
        password = f.readline()
        
    with open("email.txt", "r") as f:
        email_id = f.readline()

    imap = imaplib.IMAP4_SSL("imap-mail.outlook.com")


    grab_emails_object = grab_emails(imap, account_email=email_id, password=password)
    grab_emails_object.login()
    grab_emails_object.whole_process()

    if(argv[-1] == "grab_emails"):
        with open("passwd.txt", "r") as f:
            password = f.readline()
        
        with open("email.txt", "r") as f:
            email_id = f.readline()

        imap = imaplib.IMAP4_SSL("imap-mail.outlook.com")


        grab_emails_object = grab_emails(imap, account_email=email_id, password=password)
        grab_emails_object.login()
        grab_emails_object.whole_process()



        
            
            