import versioneer
from setuptools import setup, find_packages

setup(
    name='another-best-cut',
    version=versioneer.get_version(),
    cmdclass=versioneer.get_cmdclass(),
    description='Another Best Cut is a Flask+React web app',
    author='Rishap Sharma',
    packages=find_packages(),
    include_package_data=True,
    license='MIT'
)
