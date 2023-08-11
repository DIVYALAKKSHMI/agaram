"""Number_1 = int(input("Enter_Number_1"))
Number_2 = int(input("Enter_Number_2"))
Mathematical_operation = input("Enter_operationname")
if Mathematical_operation == "Add" :
    print(Number_1+Number_2,"Have added both numbers")
elif Mathematical_operation == "Subtract" :
    print(Number_1 - Number_2,"Have subtractd both numbers")
elif Mathematical_operation == "Multiply" :
    print(Number_1*Number_2,"Have multiplied both numbers")
elif Mathematical_operation == "Division" :
    print(Number_1/Number_2,"Have divided the numbers")"""


"""Salary = int(input("Enter_Salaryamount"))
if Salary <= 10000 :
    HRA = (Salary) *0.20
    DA = (Salary) * 0.05
    Total_salary = (Salary+HRA+DA)
    print(Total_salary) 
if Salary > 10000 and Salary <= 20000 :
    HRA = (Salary) * 0.25
    DA = (Salary) * 0.07
    Total_salary = (Salary+HRA+DA)
    print(Total_salary)
if Salary > 20000 :
    HRA = (Salary) * 0.30
    DA = (Salary) * 0.08
    Total_salary = (Salary+HRA+DA)
    print(Total_salary)"""

"""Maths = int(input("Enter_Maths_mark"))
Physics = int(input("Enter_Physics_mark"))
Chemistry = int(input("Enter_Chemistry_mark"))
if Maths >= 65 and Physics >= 55 and Chemistry >= 50:
    Total_1= (Maths+Physics+Chemistry) 
    Total_2 = (Maths+Physics)
    (Total_1) >= 190 or (Total_2) >= 140 
    print("You are eligible")
else:
    print("Not eligible")"""

Electricity_unit = int(input("Enter_Electricity_unit"))
Cost_per_unit = int(input("Enter_costperunit"))
Electricity_cost = Electricity_unit*Cost_per_unit
GST = Electricity_cost * 0.18
if Electricity_unit > 100 :
    Total = Electricity_cost+ 50 + GST
    print(Total)
elif Electricity_unit > 500 and Electricity_unit < 1000 :
    Total_1 = (Electricity_cost*0.05)+GST
    print(Total_1) 
elif Electricity_unit < 100 :
    Total_2 = Electricity_cost + GST
    print(Total_2)
    
