#convert lunar data .csv file to .stl
import sys

print("python code")
fileName = sys.argv[1]
file = open("uploads/"+fileName,"rt")
print(fileName)
print(file.read(99999999))
