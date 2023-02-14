from sys import argv
import os


if __name__ == "__main__":
    os.chdir(os.getcwd() + '/python_engine')
    with open("{}.txt".format(argv[-2]), "w") as f:
        f.write(argv[-1])