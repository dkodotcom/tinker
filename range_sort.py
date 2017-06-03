# partial functions
from functools import partial
def func(u,v,w,x):
    return u*4 + v*3 + w*2 + x

p = partial(func,5,6,7)
print(p(8))
# (5*4)+(6*3)+(7*2)+8 = 60




#range() function
my_list = ['one', 'two', 'three', 'four', 'five']
my_list_len = len(my_list)
for i in range(0, my_list_len):
    print(my_list[i])
# will print up to the given range, being the length, 5

drill_one = [0,1,2,3,]
for i in range(4):
    print(drill_one[i])

# first index is start, second stop, and third the increments 
for i in range(3,-1,-1):
    print(i)

for i in range(8,0,-2):
    print(i)
    



# insertion sort
def insertionSort(array):
   for i in range(1,len(array)):

     thisvalue = array[i]
     position = i

     while position>0 and array[position-1]>thisvalue:
         array[position]=array[position-1]
         position = position-1

     array[position]=thisvalue

array = [67, 45, 2, 13, 1, 998]
insertionSort(array)
print(array)
