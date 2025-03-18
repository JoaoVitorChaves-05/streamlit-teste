from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder="public")

dados = {"contador": 0}

# Rota GET - Retorna os dados
@app.route("/contador", methods=["GET"])
def get_contador():
    return jsonify(dados) # JSON - JavaScript Object Notation

# Rota POST - Atualiza os dados
@app.route("/contador", methods=["POST"])
def update_contador():
    novo_valor = request.json.get("contador")  # Recebe JSON
    if novo_valor is not None:
        dados["contador"] = novo_valor
        return jsonify({"mensagem": "Contador atualizado!", "novo_valor": novo_valor})
    return jsonify({"erro": "Nenhum valor enviado"}), 400

# Rota para servir o React
@app.route("/<path:filename>")
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)


if __name__ == "__main__":
    app.run(port=8502, debug=True)
