#Flask Server and Routing
from flask import Flask, send_from_directory, request
from flask_mobility import Mobility
from flask_talisman import Talisman

#File management
import codecs, os

#Threading
from threading import Thread

#WSGIServer
from gevent.pywsgi import WSGIServer

#Disable Warnings
import warnings
warnings.filterwarnings('ignore')

#Logging
import logging

from datetime import datetime

#Logging configuration set to debug on debug.log file
logging.basicConfig(filename='debug.log',level=logging.DEBUG)
logging.basicConfig(format='%(asctime)s %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p')

#Disable unneeded dependencies logging
werkzeugLog = logging.getLogger('werkzeug')
werkzeugLog.disabled = True
requestsLog = logging.getLogger('urllib3.connectionpool')
requestsLog.disabled = True

def run():
	#WSGIServer
	WSGIServer(('', 8081), app).serve_forever()

#Thread
def keep_alive():
	t = Thread(target=run)
	t.start()

#Flask App initialization
app = Flask(__name__)
#Serverside Mobile Differentiation
Mobility(app)
#SSL
Talisman(app, content_security_policy=None)

#Main Endpoint
@app.route('/')
def main():
	#index.html
	date = datetime.today().strftime('%Y-%m-%d-%H-%M-%S')
	return codecs.open('web/index.html', 'r', 'utf-8').read().replace("REPLACE", date)

#Favicon
@app.route('/favicon.ico')
def favicon():
	return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico', mimetype='image/vnd.microsoft.icon')

#Service Worker
@app.route('/service-worker.js')
def service_worker():
    return send_from_directory(
        os.path.join(app.root_path, 'static'),
        'service-worker.js',
        mimetype='application/javascript')

#PWA Manifest
@app.route('/manifest.json')
def manifest():
    return send_from_directory(
        os.path.join(app.root_path, 'static'),
        'manifest.json',
        mimetype='application/json')

if __name__ == '__main__':
	#Run server forever
	keep_alive()
