# Insta clone Backend
## Document - User
<br>

### User
- [X] Create Account [▶️](####Create-Account)
- [X] Login [▶️](####Login)
- [X] See Profile [▶️](####See-Profile)
- [X] Edit Profile [▶️](####Edit-Profile)
- [X] Follow User [▶️](####Follow-User)
- [X] Unfollow User [▶️](####Unfollow-User)
- [x] See Followers [▶️](####See-Followers)
- [x] See Followings [▶️](####See-Followings)
- [x] Search User [▶️](####Search-User)
- [x] Computed Fields

<br>

#### Create Account

1️⃣ Parameter

| Name | Type | Required |
| :----: | ---- | :-------: |
| firstName | String | ✔️ |
| lastName | String | - |
| userName | String | ✔️ |
| email | String | ✔️ |
| password | String | ✔️ |

<br>

2️⃣ Response

| Name | Type | Description | Required |
| :----: | :-----: | :--------: | :----: |
| ok | Boolean | check success or fail | ✔️ |
| error | String | message in case of error | - |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "createAccount": {
            "ok": true
        }
    }
}
```

Fail
```
{
    "data": {
        "createAccount": {
            "ok": false,
            "error": "Can't create account."
        }
    }
}
```
<br>

#### Login

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| userName | String | ✔️ |
| password | String | ✔️ |

<br>

2️⃣ Response

| Name | Type | Description | Required |
| :----: | :-----: | :--------: | :-----: |
| ok | Boolean | check success or fail | ✔️ |
| error | String | message in case of error | - |
| token | String | token to identify user | - |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "login": {
            "ok": true,
            "token": "xxxxxxxyyyyyzzzzz"
        }
    }
}
```

Fail
```
{
    "data": {
        "login" : {
            "ok": false,
            "error": "User not found." 
                // or "Incorrect password."
        }
        
    }
}
```
<br>

#### See Profile

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| userName | String | ✔️ |

<br>

2️⃣ Response

| Name | Type | Description | Required |
| :----: | :-----: | :--------: | :-------: |
| ok | Boolean | check success or fail | ✔️ |
| error | String | message in case of error | - |
| user | User | User account info | - |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seeProfile" : {
            "ok": true,
            "user": {
                "id" : 1,
                "firstName": "ivy",
                "lastName": null,
                "email": "ivy@gmail.com",
                "createdAt": "1622430688334",
                ....
            }
        }
    }
}
```

Fail
```
{
    "data": {
        "seeProfile" : {
            "ok": false,
            "error": "User not found."
        }
    }
}
```
<br>

#### Edit Profile

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| firstName | String | - |
| lastName | String | - |
| userName | String | - |
| email | String | - |
| bio | String | - |
| avatar | Upload | - |
| password | String | - |

<br>

2️⃣ Response

| Name | Type | Description | Required |
| :----: | :-----: | :--------: | :-------: |
| ok | Boolean | check success or fail | ✔️ |
| error | String | message in case of error | - |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "editProfile" : {
            "ok": true
        }
    }
}
```

Fail
```
{
    "data": {
        "seeProfile" : {
            "ok": false,
            "error": "Could not update profile."
        }
    }
}
```
<br>

#### Follow User

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| userName | String | ✔️ |

<br>

2️⃣ Response

| Name | Type | Description | Required |
| :----: | :-----: | :--------: | :-------: |
| ok | Boolean | check success or fail | ✔️ |
| error | String | message in case of error | - |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "followUser" : {
            "ok": true
        }
    }
}
```

Fail
```
{
    "data": {
        "followUser" : {
            "ok": false,
            "error": "That user does not exist."
        }
    }
}
```
<br>

#### Unfollow User

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| userName | String | ✔️ |

<br>

2️⃣ Response

| Name | Type | Description | Required |
| :----: | :-----: | :--------: | :-------: |
| ok | Boolean | check success or fail | ✔️ |
| error | String | message in case of error | - |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "unFollowUser" : {
            "ok": true
        }
    }
}
```

Fail
```
{
    "data": {
        "unFollowUser" : {
            "ok": false,
            "error": "That user does not exist."
        }
    }
}
```
<br>

#### See Followers

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| userName | String | ✔️ |
| page | Int | ✔️ |

<br>

2️⃣ Response

| Name | Type | Description | Required |
| :----: | :-----: | :--------: | :-------: |
| ok | Boolean | check success or fail | ✔️ |
| error | String | message in case of error | - |
| followers | [User] | That user's follower list | - |
| totalPages | Int | page count of followers  | - |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seeFollowers" : {
            "ok": true,
            "followers": [
                {
                    "username": "bro",
                    "email": "bro@gmail.com",
                    ...
                },
                ...
            ],
            "totalPage": 2
        }
    }
}
```

Fail
```
{
    "data": {
        "seeFollowers" : {
            "ok": false,
            "error": "User not found."
        }
    }
}
```
<br>

#### See Followings

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| userName | String | ✔️ |
| lastId | Int | - |

<br>

2️⃣ Response

| Name | Type | Description | Required |
| :----: | :-----: | :--------: | :-------: |
| ok | Boolean | check success or fail | ✔️ |
| error | String | message in case of error | - |
| followings | [User] | That user's following list | - |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seeFollowings" : {
            "ok": true,
            "followers": [
                {
                    "username": "bro",
                    "email": "bro@gmail.com",
                    ...
                },
                ...
            ]
        }
    }
}
```

Fail
```
{
    "data": {
        "seeFollowings" : {
            "ok": false,
            "error": "User not found."
        }
    }
}
```
<br>

#### Search User

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| keyword | String | ✔️ |

<br>

2️⃣ Response

| Name | Type | Description | Required |
| :----: | :-----: | :--------: | :-------: |
| ok | Boolean | check success or fail | ✔️ |
| error | String | message in case of error | - |
| matchUser | [User] | matched user search result | - |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "searchUser" : {
            "ok": true,
            "matchUser": [
                { "username": "bro" },
                { "username": "bear" }
                ...
            ]
        }
    }
}
```

Fail
```
{
    "data": {
        "seeFollowings" : {
            "ok": false,
            "error": "No results were found for your search."
        }
    }
}
```
<br>
