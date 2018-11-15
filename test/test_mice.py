import requests

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


def test_mice_form_post():
    entry = {'eventName': 'mouse', 'date': '2018-11-08', 'repeats': False}
    res = requests.post("http://proxy/api/mice", json=entry)
    assert res.ok, res.text


def test_static_get_jquery():
    res = requests.get("http://proxy/api/static/jquery/jquery.js")
    assert int(res.status_code/100) == 2


def test_static_get_pivottable():
    res = requests.get("http://proxy/api/static/pivottable/pivot.js")
    assert int(res.status_code/100) == 2
