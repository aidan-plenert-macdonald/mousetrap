import requests, time

def test_mice_get():
    res = requests.get("http://webapp:8080/mice").json()
    assert res == [
        {
            "name": "Henry",
            "age": "1"
        }
    ]

def test_mice_post():
    res = requests.post("http://webapp:8080/mice", {"test":"results"})
    print(res.text)
    res.json()
    assert res.json() == {
        "status": "complete",
        "body": {"test":"results"}
    }
