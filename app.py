import os
import threading
import time
from flask import Flask, send_from_directory
from git import Repo

app = Flask(__name__)

# Configurazione
REPO_URL = "https://github.com/RaiCRITS/fakeradar_web.git"
LOCAL_DIR = os.path.join(os.getcwd(), "repository")  # Cartella locale per il repo
CHECK_INTERVAL = 60  # Intervallo di controllo (in secondi)

# Funzione per clonare o aggiornare il repository
def update_repo():
    if not os.path.exists(LOCAL_DIR):
        print(f"Clonazione del repository in {LOCAL_DIR}...")
        Repo.clone_from(REPO_URL, LOCAL_DIR)
    else:
        print("Controllo aggiornamenti...")
        repo = Repo(LOCAL_DIR)
        origin = repo.remotes.origin
        origin.pull()
        print("Repository aggiornato.")

# Thread per controllare periodicamente gli aggiornamenti
def periodic_check():
    while True:
        try:
            update_repo()
        except Exception as e:
            print(f"Errore durante l'aggiornamento: {e}")
        time.sleep(CHECK_INTERVAL)

# Endpoint Flask per servire index.html
@app.route("/")
def serve_index():
    return send_from_directory(LOCAL_DIR, "index.html")

# Endpoint per servire altri file statici (CSS, JS, ecc.)
@app.route("/<path:filename>")
def serve_file(filename):
    return send_from_directory(LOCAL_DIR, filename)

if __name__ == "__main__":
    # Avvia il thread di controllo aggiornamenti
    threading.Thread(target=periodic_check, daemon=True).start()

    # Avvia il server Flask
    app.run(debug=False,host='0.0.0.0',port=5000)
