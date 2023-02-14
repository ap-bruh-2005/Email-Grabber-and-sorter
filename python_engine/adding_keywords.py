
class more_file_funcs():

    def __init__(self, text: str, fname: str):
        self.text=text
        self.fname = fname

    def quick_response_file_creation(self):
        ''' creates files for quick response and also overrides previous information on files'''
        try:
            with open(self.fname, "w") as f:
                f.write(self.text)
        except:
            print("error occured")

   

      