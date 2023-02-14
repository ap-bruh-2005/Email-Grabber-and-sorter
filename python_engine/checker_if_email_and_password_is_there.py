import os

if __name__ == "__main__":
    os.chdir(os.getcwd()+'/python_engine')
    print(str(os.stat("passwd.txt").st_size))
    print(str(os.stat("email.txt").st_size))
    
    

