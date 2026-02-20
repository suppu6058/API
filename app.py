from flask import Flask, jsonify,request
app = Flask(__name__)
students = [
    {"id":1,"name": "Ravi"},
    {"id":2,"name":"Anil"}
]

#GET all student
@app.route('/students',methods=['GET'])
def get_students():
    return jsonify(students)

#GET single student
@app.route('/students/<int:id>',methods=['GET'])
def get_student(id):
    for student in students:
        if student["id"]==id:
            return jsonify(student)
    return jsonify({"error":"student not found"}) 

#POST create student
@app.route('/students',methods=['POST'])   
def add_students():
    new_student= request.json
    students.append(new_student)
    return jsonify({"Message":"student added","student":new_student})

#PUT update student
@app.route('/students/<int:id>',methods=['PUT'])
def update_students(id):
    for student in students:
        if student["id"]== id:
            student["name"]= request.json["name"]
            return jsonify({"Message":"student updated"})
    return jsonify({"error":"student not found"}) 
    
#DELETE student
@app.route('/students/<int:id>',methods=['DELETE'])
def delete_students(id):
    for student in students:
        if student["id"]==id:
            students.remove(student)
            return jsonify({"Message":"student deleted"})
    return jsonify({"error":"student not found"})
if __name__== '__main__':
    app.run(debug=True)






    
        
