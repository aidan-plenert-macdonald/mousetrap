import requests
import socket

result = 1
while result != 0:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex(('localhost', 8080))

default_entry = {"name": "Fourth Attempt", "age": -800, "weight": -5}


def test_mice_get():
    test_mice_post()
    res = requests.get("http://proxy/api/mice").json()
    assert default_entry in res


def test_mice_post():
    res = requests.post("http://proxy/api/mice", default_entry)
    assert res.json() == {
        "status": "complete",
        "body": "success"
    }, res.text


def test_event_form():
    entry = {'eventName': 'mouse', 'date': '2018-11-08', 'repeats': False}
    res = requests.post("http://proxy/api/events", json=entry)
    assert res.ok, res.text


def test_static_get_jquery():
    res = requests.get("http://proxy/api/static/jquery/jquery.js")
    assert res.ok, res.text


def test_static_get_pivottable():
    res = requests.get("http://proxy/api/static/pivottable/pivot.js")
    assert res.ok, res.text
