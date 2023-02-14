from sys import argv


if __name__ == "__main__":
   if(argv[-1] == "ADD"):
        with open("non_included.txt", "a") as f:
            f.write(argv[-2])
   elif(argv[-1] == "del"):
        pass

   raise Exception("Called")
