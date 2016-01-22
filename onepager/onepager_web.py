import os

import logbook
from flask import Flask, send_from_directory, render_template

from . import config

PROJECT_DIRECTORY = os.path.dirname(__file__)

app = Flask(__name__)

logger = logbook.Logger('OnePager')


@app.route('/<path:path>')
@app.route('/')
def index(path=None):
    return render_template('index.html', config=config)


@app.route('/media/<path:filename>')
def send_media(filename):
    return send_from_directory(os.path.join(PROJECT_DIRECTORY, 'frontend'), filename)


app.debug = config.DEBUG
app.template_folder = os.path.join(PROJECT_DIRECTORY, 'frontend', 'build', 'templates')

if __name__ == '__main__':
    app.run(host=config.IP, port=config.PORT)
