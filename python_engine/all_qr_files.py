from mimetypes import init
import os
from sys import argv

init_path = str(os.getcwd())+'/python_engine'


if __name__ == "__main__":

    if(argv[-1] == "print"):
        for file in os.scandir(init_path):
            if(file.name[-3:] == "txt" and file.name!="email.txt" and file.name!="passwd.txt" and file.name!="keywords.txt" and file.name!="most_recent.txt" and file.name!="excluded_emails.txt" and file.name!="non_included.txt"):
                print(file.name)
    elif(argv[-1] == "del"):
        for file in os.scandir(init_path):
            if(file.name[-3:] == "txt" and file.name!="email.txt" and file.name!="passwd.txt" and file.name!="keywords.txt" and file.name!="most_recent.txt" and file.name!="excluded_emails.txt"):
                os.remove(file)


