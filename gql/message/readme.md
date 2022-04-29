# Insta clone Backend

## Document

### Message

-   [x] Send Message [▶️](#Send-Message)
-   [x] See Rooms [▶️](#See-Rooms)
-   [x] See Room [▶️](#See-Room)
-   [x] Room Update [▶️](#Room-Update)
-   [x] Read Message [▶️](#Read-Message)
-   [x] Delete Message [▶️](#Delete-Message)

<br>

#### Send Message

1️⃣ Parameter

|  Name   | Type   | Required |
| :-----: | ------ | :------: |
| payload | String |    ✔️    |
| userId  | Int    |    -     |
| roomId  | Int    |    -     |

<br>

2️⃣ Response

| Name  |  Type   |       Description        | Required |
| :---: | :-----: | :----------------------: | :------: |
|  ok   | Boolean |  check success or fail   |    ✔️    |
| error | String  | message in case of error |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "sendMessage": {
            "ok": true
        }
    }
}
```

Fail

```
{
    "data": {
        "sendMessage": {
            "ok": false,
            "error": "User does not exist."
                // or "Room not exist."
        }
    }
}
```

<br>

#### See Rooms

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| - | - | - |

<br>

2️⃣ Response

| Name  | Type  |      Description      | Required |
| :---: | :---: | :-------------------: | :------: |
| rooms | Array | user's chat room list |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seeRooms": {
            "rooms": [
                {
                    "id": 1
                },
                {
                    "id": 2
                }
            ]
        }
    }
}
```

Fail

```
{
    "data": {
        "seeRooms" : {
            "rooms": []
        }

    }
}
```

<br>

#### See Room

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| id | Int | ✔️ |

<br>

2️⃣ Response

| Name  |  Type   |       Description        | Required |
| :---: | :-----: | :----------------------: | :------: |
|  ok   | Boolean |  check success or fail   |    ✔️    |
| error | String  | message in case of error |    -     |
| room  |  Room   |        room info         |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seeRoom" : {
            "ok": true,
            "users": [
                {
                    "userName": "ivy"
                },
                {
                    "userName": "apple"
                }
            ],
            "messages": [
                {
                    "payload": "HELLO!",
                    "createdAt": "1624002854225"
                }
            ]
        }
    }
}
```

Fail

```
{
    "data": {
        "seeRoom" : {
            "ok": false,
            "error": "Room not exist."
        }
    }
}
```

<br>

#### Room Update

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| id | Int | ✔️ |

<br>

2️⃣ Response

|  Name   |  Type   |  Description   | Required |
| :-----: | :-----: | :------------: | :------: |
| message | Message | resent message |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "roomUpdate" : {
            "id": 12
        }
    }
}
```

<br>

#### Read Message

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| id | Int | ✔️ |

<br>

2️⃣ Response

| Name  |  Type   |       Description        | Required |
| :---: | :-----: | :----------------------: | :------: |
|  ok   | Boolean |  check success or fail   |    ✔️    |
| error | String  | message in case of error |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "readMessage" : {
            "ok": true
        }
    }
}
```

Fail

```
{
    "data": {
        "readMessage" : {
            "ok": false,
            "error": "message not found."
        }
    }
}
```

<br>

#### Delete Message

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| id | Int | ✔️ |

<br>

2️⃣ Response

| Name  |  Type   |       Description        | Required |
| :---: | :-----: | :----------------------: | :------: |
|  ok   | Boolean |  check success or fail   |    ✔️    |
| error | String  | message in case of error |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "deleteRoom" : {
            "ok": true
        }
    }
}
```

Fail

```
{
    "data": {
        "deleteRoom" : {
            "ok": false,
            "error": "message not found."
                // or "Not authorized."
        }
    }
}
```
