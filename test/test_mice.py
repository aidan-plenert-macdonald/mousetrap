import requests, time

def test_mice_get():
    test_mice_post()
    res = requests.get("http://webapp:8080/mice").json()
    assert {
            "name": "Flying Pasta",
            "age": -10,
            "weight": -95
        } in res

def test_static_get():
    res = requests.get("http://webapp:8080/public/text.txt")
    assert res.text == "sample text\n"

def test_mice_post():
    res = requests.post("http://webapp:8080/mice", {"name":"Flying Pasta","age":-10, "weight":-95})
    print(res.text)
    res.json()
    assert res.json() == {
        "status": "complete",
        "body": {"name":"Flying Pasta","age":-10, "weight":-95}
    }
