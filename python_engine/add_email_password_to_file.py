import os
from sys import argv

if __name__ == "__main__":
    print("func called")
    os.chdir(os.getcwd()+'/python_engine')
    if(argv[-1] == "add_password_to_file"):
        with open("passwd.txt", "w") as f:
            f.write(argv[-2])
    elif(argv[-1] == "add_email_to_file"):
        with open("email.txt", "w") as f:
            f.write(argv[-2])