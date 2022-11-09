

from setuptools import setup, find_packages


install_requires = [
    "django ~= 4.1",
    "djangorestframework ~= 3.13.1",
    "django-cors-headers ~= 3.13.0",
    "psycopg2-binary ~= 2.9.3",
    "python-decouple ~= 3.6",
    "djangorestframework-simplejwt ~= 5.2.1",
    "django-extensions ~= 3.2.1",
    "requests ~= 2.28.1",
    "Pillow ~= 8.2.0",
    "psycopg2-binary ~= 2.9.3"
]

tests_require = [
    "pytest",
    "pytest-django"
]

setup(
    name="zach",
    version="0.1.0",
    description="Zach Cook personal website",
    author="Zach Cook",
    author_email="zach@web3technologies.io",
    install_requires=install_requires,
    include_package_data=True,
    packages=find_packages("src"),
    test_suite="tests",
    tests_require=tests_require,
    extras_require={
        "test": tests_require,
    },
    package_dir={"":"src"},
    )