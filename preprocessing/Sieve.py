#shamelessly stolen from my where_in_the_world project

import csv

# Pre work
fn = ["page_title", "gt_lat", "gt_lon", "gt_type", "cl_to"]

# open files
fin = open("geo_data_raw.csv", 'rb')
csvIN = csv.DictReader(fin, fieldnames= fn)
fout  = open("Route66.csv", 'wb')
csvOUT = csv.DictWriter(fout, fieldnames= fn)
csv.field_size_limit(900000)

# strip out the dupes (I can't seem to do this in sql)
titles = []
baz = True
foo = 1

for row in csvIN:
  if int(len(titles)) == 0:
    csvOUT.writerow(row)
    titles.append(row['page_title'])
    baz = False
  else:
    for i in range(len(titles)):
      if titles[i] == row['page_title']:
        baz = False
        break
  if baz:
    titles.append(row['page_title'])
    csvOUT.writerow(row)
        
  baz = True
  foo += 1
  
print foo
