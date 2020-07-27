from flask import Flask, render_template 

app = Flask(__name__)
app.secret_key = "key"

@app.route("/")
def inicio():
    return render_template("inicio.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/nuevaCuenta")
def nuevaCuenta():
    return render_template("nuevaCuenta.html")


app.run(debug=True,port=80)