import os
from sys import argv


if __name__ == "__main__":
    os.chdir(os.getcwd()+'/python_engine')
    if argv[-1] == "get":
        with open("keywords.txt", "r") as file2:
            list1 = file2.readlines()
        for i in list1:
            final_list = list1[0].split()
            for i in final_list:
                print(i)
    elif argv[-1] == "add":
        with open("keywords.txt", "a+") as file2:
            file2.write(" " + str(argv[-2]))
    elif argv[-1]== "del":
        open("keywords.txt", "w").close()




    
