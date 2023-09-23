// for (let i = 10; i>0; i--){
//     console.log(i)
// } 

// for(i=0; i<=6 ; i++) {
//     console.log(i)
// } 

var my_resume = {name : "P.Divyalakkshmi",
            e_mail: "divyalakkshmi2003@gmail.com",
            mobile_no :"+917598833659",
            objective: "To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction",
            soft_skills :["Adaptability","Curiosity","Self confidence"],
            hard_skills :["English Typewriting","MS Ecxel"],
            education_qualification :[{level :"Degree_B.A.English",institute_name :"S.T.Hindu college",percentage :77,passedout_year :2023},
                                      {level :"HSC",institute_name :"St.Joseph Convent",percentage : 51,passedout_year :2020},
                                      {level :"SSLC",institute_name :"K.D.V.P Govt.Girls.Hr.Sec.School",percentage :89.9, passedout_year:2018},
                                      {level : "diplomo", institute_name : "st.mary", percentage: 80, passedout_year : 2023}]}

function qualification(a) {
    for (var i = 0; i<a.length ; i++){
        console.log(i+1 , a[i].level) 
    }
}
qualification(my_resume.education_qualification) 