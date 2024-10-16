test = [1,4,25,6,35,7,134,63,6,5,8,2,732,232,465,1]
start = 0
end = len(test) - 1
minimum = 1000000000
while(start < end):
    innerMin = min(test[start], test[end])
    if minimum > innerMin:
        minimum = innerMin
    start += 1
    end -=1
print(minimum)