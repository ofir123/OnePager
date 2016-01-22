from setuptools import setup, find_packages

REQUIRES = ['flask', 'tornado', 'logbook']

setup(
    name="onepager",
    version='1.0',
    packages=find_packages(),
    install_requires=REQUIRES
)
