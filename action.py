from flask import Flask,request,jsonify

@app.route('action.py', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        value = request.form
        return jsonify({value.form})
with open('file.json', 'w') as f:
    json.dump(value.form, f)
if __name__=='__main__':
    app.run(debug=True)