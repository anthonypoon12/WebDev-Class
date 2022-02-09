myList = [1,2,3,4]
myList2=[]
for i in range(1,len(myList)):
    myList2.append(myList[i])
myList2.append("appendeditem")
myList2.pop(2)
myList3 = myList2

#count(sub,[start,[end]]) shows the number of times the substring sub appears in the range [start,end]
# endswith(suffix,[start,[end]]) returns True if the string ends with suffix from the indicies [start,end]
# find/index(sub,[start,[end]]) if the substring exists inside the string, finds the lowest index where the substring is found from indicies [start,end]
# join() takes all elements in paramters and joins them in one string
# replace(old,new[,count]) returns a copy of the string with the "old" portion of the string replafce with "new". If count is included, replace only happens count times maximum
# split([sep[,maxsplit]])
# splitlines([keepends])
# startswith(prefix[,start[,end]])
# strip([chars]) returns a copy of the string by removing both the leadig and the trailing characters

def PartC(num):
    if num < 2:
        return False
    if num==2:
        return True
    else:
        for i in range (2,num):
            if num % i == 0:
                return False
    return True
def disStuInfo(schoolID, *firstName, **lastEmail):
    fn = []
    counter=0
    for i in firstName:
        fn.append(i)
    if (len(lastEmail)>len(firstName)):
        for i in range(len(firstName),len(lastEmail)):
            fn.append("unmatched")
    print(fn)
    for i, j in lastEmail.items():
        print(schoolID)
        print(fn[counter])
        counter=counter+1
        print(i)
        print(j)
        print()
    if len(firstName)>len(lastEmail):
        for i in range(len(lastEmail),len(firstName)):
            fn.append("unmatched")
            print(schoolID)
            print(fn[counter])
            counter=counter+1
            print("unmatched")
            print()

# disStuInfo( 1000, "Anthony","hi","hhhh",HOla="hey",Hello = "Hey", Poon = "anthoyn@Poons")