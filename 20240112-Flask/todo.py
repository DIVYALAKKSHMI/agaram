from flask import Flask
from flask import render_template
from flask import request

items = ["Medicine","Bedsheet","Powerbank","Charger"]

app = Flask(__name__)


@app.route('/todo',methods=["GET","POST"])
def todos() :

    if request.method == "POST" and request.form['item_name'] != "" :
        items.append(request.form['item_name'])
    return render_template('todo.html',items=items)


@app.route('/delete/<item>',methods=["GET","POST"])
def dele(item) :
    # return item
    if item in items :
        items.remove(item)
        return render_template('/todo.html',items=items)
    

@app.route('/update/<key>',methods=["GET","POST"])
def update(key) :   

    if request.method == "POST" :
        items[int(key)] = request.form['updated_value']
        return render_template('/todo.html',items=items)        
    else :
        return render_template('/update.html',key=key,item = items[int(key)])




if __name__ == "__main__" :
    app.run(debug=True) 


    