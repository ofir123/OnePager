import sys

import logbook
from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop

from onepager.config import PORT, IP
from onepager.onepager_web import app


def run_server():
    http_server = HTTPServer(WSGIContainer(app))
    http_server.listen(PORT, IP)

    IOLoop.instance().start()


if __name__ == '__main__':
    # No need for a file handler, since the service directs all output to a file anyway.
    logger_setup = logbook.NestedSetup(
        [logbook.NullHandler(),
         logbook.StreamHandler(sys.stdout, level=logbook.DEBUG, bubble=True)])
    with logger_setup.applicationbound():
        run_server()
