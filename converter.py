#convert lunar data .csv file to .stl
import sys
import csv
import time

print("python code")
fileName = sys.argv[1]
with open(fileName) as csv_file:
    startTime= time.time()
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        print(f'\t {line_count}: {row[0]},{row[1]},{row[2]} {row[3]}')
        line_count += 1
    print(f'Processed {line_count} lines.')
    endtime = time.time()
    print(f'elapsed time{ endtime-startTime}')
