# convert lunar data .csv file to .stl
import sys
import csv
import time
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt

x = []
y = []
z = []
slope = []
line_count = 0
print("python code")
fileName = sys.argv[1]
with open(fileName) as csv_file:
    startTime = time.time()
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        print(f'\t {line_count}: {row[0]},{row[1]},{row[2]} {row[3]}')
        x.append(float(row[0]))
        y.append(float(row[1]))
        z.append(float(row[2]))
        slope.append(float(row[3]))
        line_count += 1

newX = []
newY = []
newZ = []
print(line_count)
points = 0
for i in range(line_count):
    if i % 7200 == 0:
        print(i)
        points += 1
        newX.append(x[i])
        newZ.append(z[i])
        newY.append(y[i])

print(f'Processed {line_count} lines.')
print(f'points shown in graph {points}')
endtime = time.time()
print(f'elapsed time{ endtime-startTime}')

# ----makes graph (not in final version)
#fig = plt.figure()
#ax = fig.add_subplot(111, projection='3d')
#ax.scatter(newX, newY, newZ, c='r', marker='o')
#
#ax.set_xlabel('X Label')
#ax.set_ylabel('Y Label')
#ax.set_zlabel('Z Label')
#
# plt.show()
