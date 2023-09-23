var my_resume = {name : "P.Divyalakkshmi",
            e_mail: "divyalakkshmi2003@gmail.com",
            mobile_no :"+917598833659",
            objective: "To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction",
            soft_skills :["Adaptability","Curiosity","Self confidence"],
            hard_skills :["English Typewriting","MS Ecxel"],
            education_qualification :[{level :"Degree_B.A.English",institute_name :"S.T.Hindu college",percentage :77,passedout_year :2023},
                                      {level :"HSC",institute_name :"St.Joseph Convent",percentage : 51,passedout_year :2020},
                                      {level :"SSLC",institute_name :"K.D.V.P Govt.Girls.Hr.Sec.School",percentage :89.9, passedout_year:2018}],
            projects : [],          
            experience : [],
            hobbies : ["Watering plants","Scrolling internet","Movies"],
            personal_details :{fathers_name : "T.Parama chandran",
                               fathers_occupation : "Business",
                               languages_known :["Tamil","English"],
                               date_of_birth : "06/06/2003",
                               gender: "Female",
                               marital_status: "Unmarried",
                               address : {door_no :"36/18-A", street_name :"East street", place :"Vadalivillai", pincode : 629002}},
            declaration : "I hereby declare the above information is true to my knowledge"} 

// function qualification(a){
//     for (let i = 0; i<a.length ; i++)
//     console.log(i+1 , a[i].level)     
// }
// qualification(my_resume.education_qualification) 

// function qualification(a){
//     for (let i = a.length-1; i>=0 ; i--)
//     console.log(a[i].level)     
// }
// qualification(my_resume.education_qualification) 


// localStorage.setItem("name" , "agaram") 
// // sessionStorage.setItem("place" , "ngl") 


//  var x =localStorage.getItem("name") 
//     console.log(x) 

// var y = localStorage.getItem("check")  

var list = ["a", "b", "c", "d"]
 var stringlst = JSON.stringify(list)
 localStorage.setItem("alpha" , stringlst)  
    var h = localStorage.getItem("alpha") 
    console.log(h)
    var clist = JSON.parse(h)
    console.log(clist[1])    

//  sessionStorage.setItem("f" , 2)
// var g = sessionStorage.getItem("f") 
//    console.log(typeof(g)) 