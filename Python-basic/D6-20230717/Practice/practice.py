"""My_resume = {"Name" : "P.Divyalakkshmi",
            "E-mail": "divyalakkshmi2003@gmail.com",
            "Mobile-no" :"+917598833659",
            "Objective": "To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction",
            "Soft_skills" :["Adaptability","Curiosity","Self confidence"],
            "Hard_skills" :["English Typewriting","MS Ecxel"],
            "Education_qualification" :[{"Level" :"Degree_B.A.English","Institute_name" :"S.T.Hindu college","Percentage" :77,"Passedout_year" :2023},
                                        {"Level" :"HSC","Institute_name" :"St.Joseph Convent","Percentage" : 51,"Passedout_year" :2020},
                                        {"Level" :"SSLC","Institute_name" :"K.D.V.P Govt.Girls.Hr.Sec.School","Percentage" :89.9, "Passedout_year":2018}],
            "Projects" : [],          
            "Experience" : [],
            "Hobbies" : ["Watering plants","Scrolling internet","Movies"],
            "Personal_details" :{"Father's_name" : "T.Parama chandran",
                                "Father's_occupation" : "Business",
                                "Languages_known" :["Tamil","English"],
                                "Date_of_birth" : "06/06/2003",
                                "Gender": "Female",
                                "Marital_status": "Unmarried",
                                "Address" : {"Door_no" :"36/18-A",
                                             "Street_name" :"East street",
                                             "Place" :"Vadalivillai", 
                                             "Pincode" : 629002}},
            "Declaration" : "I hereby declare the above information is true to my knowledge"}
print(My_resume["Education_qualification"][1])
print(My_resume["Personal_details"]["Date_of_birth"])
print(My_resume["Personal_details"]["Languages_known"][0])"""

"""gender = "male"
if gender == "male" :
    print("Blue")"""

"""gender = "female"
if gender == "male" :
    print("Blue")
else:
    print("Pink") 

gender = input("Enter gender")
if gender == "male" :
    print("Blue")
elif gender == "female" :
    print("Pink")
elif gender == "transgender" :
    print("Lavender")
else:
    print("Invalid Input")"""

Total_marks = int(input("enter Total_marks : "))
if Total_marks > 92 :
    print("MBBS")
elif Total_marks > 85 and Total_marks<= 92:
    print("BDS")
elif Total_marks > 75 and Total_marks<= 85:
    print("Agri")
else :
    print("Go to Engineering")


