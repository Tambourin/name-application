from flask import Flask, render_template
import json
#from flask_cors import CORS

app = Flask(
    __name__,
    template_folder="build", 
    static_url_path='', 
    static_folder='build')
#cors = CORS(app)

names_list_file = "names.json"

def load_names_as_json():
    with open(names_list_file) as file:
        return json.load(file)["names"]

#List names and amounts
@app.route("/names")
def get_names():  
    names = load_names_as_json()
    return {
        "count": len(names),
        "names": names         
    }

#Return the amount of the name given as a parameter
@app.route("/names/<name>")
def get_name(name):         
    names = load_names_as_json()
    try:
        element = list(
            filter(lambda n: n["name"].lower() == name.lower(), names))[0]
        return element
    except:
        return {
            "name": name, 
            "amount": 0
        }

#Serve React app
@app.route("/")
def hello():
    return render_template("index.html")

@app.errorhandler(FileNotFoundError)
def file_error(err):    
    app.logger.exception(err)
    return "Names could not be found", 500