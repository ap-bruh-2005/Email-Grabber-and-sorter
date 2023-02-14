import os
import sys
import subprocess


class open_file:

    path = os.getcwd()

    def __init__(self, file_name : str):
        self.file_name = file_name


    def opening_file(self):

        ''' Opens file with default application used to open the file. Checks if the device has windows or another os and then runs the respective code'''

        try:
            if sys.platform == "win32":
                os.startfile(filename)
            else:
                opener = "open" if sys.platform == "darwin" else "xdg-open"
                subprocess.call([opener, self.file_name])
        except Exception as e :
            print("Something went wrong, please make sure the file of emails created exists. This is the exception {}".format(e))


if __name__ == "__main__":
    if(os.getcwd()[-14:] != "/python_engine"):
        os.chdir(os.getcwd()+"/python_engine")

    obj1 = open_file("non_urgent_mail.csv")
    obj2 = open_file("urgent_mail.csv")
    obj1.opening_file()
    obj2.opening_file()