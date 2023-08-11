"""list = [3,15,30,10,26,5,8]
for li in list :
    if li%3 == 0 and li%5 == 0:
        print("fizzbuzz")
    elif li%3 == 0 :
        print("fizz")
    elif li%5 == 0 :
        print("buzz")
    else :
        print("invalid")
 
mixed_list = [1,2.0,"@","hai",5,6,"&",8,9]
String_count = 0
for mix in mixed_list :
    if type(mix) == str :
        String_count += 1
print("string count = ", String_count)"""

"""Goldrate_asper_month = [{"month" : "January",
                        "goldrate" : 2599,
                        "jewel_list" : [{"jewel" : "chain",
                                         "MC" : 12,
                                         "jewel" : "ring",
                                         "MC" : 10}]},
                        {"month" : "February",
                         "goldrate" : 3552,
                         "jewel_list" : [{"jewel" : "bangle",
                                          "MC" : 8,
                                          "jewel" : "ring",
                                          "MC" : 0.10}]},
                        {"month" : "March",
                         "goldrate" : 3000,
                         "jewel_list" : [{ "jewel" :"ring",
                                          "MC" : 0.10,
                                          "jewel" : "anklet",
                                          "MC" : 0.11}]},
                        {"month" : "April",
                         "goldrate" : 2490,
                         "jewel_list" : [{"jewel" : "chain",
                                         "MC" : 0.12,
                                         "jewel" : "ring",
                                         "MC" : 0.1}]},
                        {"month" : "May",
                         "goldrate" : 2111,
                         "jewel_list" : [{"jewel" : "chain" ,
                                         "MC" : 0.12,
                                         "jewel" : "ring",
                                         "MC" : 0.10}]}]"""

"""Maximum_value = Goldrate_asper_month[0]["goldrate"]
Minimum_value = Goldrate_asper_month[0]["goldrate"]
Max_month = None
Min_month = None
for i in Goldrate_asper_month :
    if i["goldrate"] >= Maximum_value :
        Maximum_value = i["goldrate"]
        Max_month = i["month"]
    elif i["goldrate"] <= Minimum_value :
        Minimum_value = i["goldrate"]
        Min_month = i["month"]
print(Maximum_value, "goldrate is higgher in", Max_month) 
print(Minimum_value, "goldrate is lower in", Min_month) """

"""for item in  Goldrate_asper_month:
    
    print( "Gold rate is " + str(item["goldrate"]))
    jewel_list = item["jewel_list"]
    
    for j in jewel_list:
                        # 2000 * 13 /100
        cal_mak_charge = item["goldrate"] * j['MC'] / 100
        final_charge = item["goldrate"] + cal_mak_charge
        print( j['jewel'] + "rate is "+ str(final_charge))"""

user_details = [
                
                {
                    "name" : "ajay",
                    "marks" : [80,90,70,40,60]
                },
                {
                    "name" : "manimala",
                    "marks" : [100,80,40,90,70]
                },
                {
                    "name" : "abarna",
                    "marks" : [72,65,68,89,86]
                }
        ]
        
        
        
for student in user_details:
    print(student['marks'])
    total = 0
    for x in student['marks']: 
        total = total + x
    print(total)
    
       

