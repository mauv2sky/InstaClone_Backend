# Insta clone Backend

## Document

### Photo

-   [x] Upload Photo (S3) [▶️](#Upload-Photo)
-   [x] See Photo [▶️](#See-Photo)
-   [x] Search Photos [▶️](#Search-Photos)
-   [x] Edit Photo [▶️](#Edit-Photo)
-   [x] Delete Photo [▶️](#Delete-Photo)
-   [x] Like / Unlike Photo [▶️](#Like/Unlike-Photo)
-   [x] See Photo Likes [▶️](#See-Photo-Likes)
-   [x] See Feed [▶️](#See-Feed)
-   [x] Create Comment [▶️](#Create-Comment)
-   [x] Edit Comment [▶️](#Edit-Comment)
-   [x] Delete Comment [▶️](#Delete-Comment)
-   [x] See Photo Comments [▶️](#See-Photo-Comments)
-   [x] See Hashtag [▶️](#See-Hashtag)

<br>

#### Upload Photo

1️⃣ Parameter

|  Name   | Type   | Required |
| :-----: | ------ | :------: |
|  file   | Upload |    ✔️    |
| caption | String |    -     |

<br>

2️⃣ Response

| Name  |  Type   |       Description        | Required |
| :---: | :-----: | :----------------------: | :------: |
|  ok   | Boolean |  check success or fail   |    ✔️    |
| error | String  | message in case of error |    -     |
| photo |  Photo  |   uploaded photo info    |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "uploadPhoto": {
            "ok": true
            "photo": {
                "id": 1,
                "user": {
                    "userName": "ivy",
                    "avatar" : "xxxxxxxxxxxxxx"
                },
                "file": "https://xxxx.s3.amazonaws.com/uploads",
                "caption": "Happy day",
                "createdAt": "1624002854225"
            }
        }
    }
}
```

Fail

```
{
    "data": {
        "uploadPhoto": {
            "ok": false,
            "error": "Photo couldn't upload."
        }
    }
}
```

<br>

#### See Photo

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
| photo |  Photo  |       photo's info       |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seePhoto": {
            "ok": true,
            "photo": {
                "id": 1,
                "user": {
                    "userName": "ivy",
                    "avatar" : "https://aaaa.s3.amazonaws.com/avatars"
                },
                "file": "https://xxxx.s3.amazonaws.com/uploads",
                "caption": "Happy day",
                "createdAt": "1624002854225"
                "likes": 82
                "comments": 15
            }
        }
    }
}
```

Fail

```
{
    "data": {
        "seePhoto" : {
            "ok": false,
            "error": "Photo not found."
        }

    }
}
```

<br>

#### Search Photos

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| keyword | String | ✔️ |

<br>

2️⃣ Response

|  Name  |  Type   |       Description        | Required |
| :----: | :-----: | :----------------------: | :------: |
|   ok   | Boolean |  check success or fail   |    ✔️    |
| error  | String  | message in case of error |    -     |
| photos | [Photo] | photos matching keyword  |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "searchPhotos" : {
            "ok": true,
            "photos": [
                {
                    "id": 1,
                    "file": "https://xxxx.s3.amazonaws.com/uploads"
                },
                {
                    "id": 5,
                    "file": "https://yyyy.s3.amazonaws.com/uploads"
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
        "searchPhotos" : {
            "ok": false,
            "error": "No search results found."
        }
    }
}
```

<br>

#### Edit Photo

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| id | Int | ✔️ |
| caption | String | ✔️ |

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
        "editPhoto" : {
            "ok": true
        }
    }
}
```

Fail

```
{
    "data": {
        "editPhoto" : {
            "ok": false,
            "error": "Can't edit profile."
        }
    }
}
```

<br>

#### Delete Photo

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
        "deletePhoto" : {
            "ok": true
        }
    }
}
```

Fail

```
{
    "data": {
        "deletePhoto" : {
            "ok": false,
            "error": "photo not found."
                // or "Not authorized.'
        }
    }
}
```

<br>

#### Like/Unlike Photo

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
        "likePhoto" : {
            "ok": true
        }
    }
}
```

Fail

```
{
    "data": {
        "likePhoto" : {
            "ok": false,
            "error": "Can't like that photo."
        }
    }
}
```

<br>

#### See Photo Likes

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| id | Int | ✔️ |

<br>

2️⃣ Response

| Name  |  Type   |        Description        | Required |
| :---: | :-----: | :-----------------------: | :------: |
|  ok   | Boolean |   check success or fail   |    ✔️    |
| error | String  | message in case of error  |    -     |
| users | [User]  | That user's follower list |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seePhotoLikes" : {
            "ok": true,
            "users": [
                {
                    "userName": "ivy",
                    "avatar": "https://aaaa.s3.amazonaws.com/avatars"
                },
                {
                    "userName": "apple",
                    "avatar": "https://bbbb.s3.amazonaws.com/avatars"
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
        "seePhotoLikes" : {
            "ok": false,
            "error": 'likes not exist.'
        }
    }
}
```

<br>

#### See Feed

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| - | - | - |

<br>

2️⃣ Response

|  Name  |  Type   |         Description          | Required |
| :----: | :-----: | :--------------------------: | :------: |
|   ok   | Boolean |    check success or fail     |    ✔️    |
| error  | String  |   message in case of error   |    -     |
| photos | [Photo] | That user's following photos |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seeFeed" : {
            "ok": true,
            "photos": [
                {
                    "id":1,
                    "file": "https://aaaa.s3.amazonaws.com/uploads"
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
        "seeFeed" : {
            "ok": false,
            "error": "doesn't following someone."
        }
    }
}
```

<br>

#### Create Comment

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| photoId | Int | ✔️ |
| payload | String | ✔️ |

<br>

2️⃣ Response

|  Name   |   Type    |       Description        | Required |
| :-----: | :-------: | :----------------------: | :------: |
|   ok    |  Boolean  |  check success or fail   |    ✔️    |
|  error  |  String   | message in case of error |    -     |
| comment | [Comment] |  That photo's comments   |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "createComment" : {
            "ok": true,
            "comment": [
                {
                    "id":1,
                    "user": {
                        "userName": "ivy"
                    },
                    "payload": "long time no see,,",
                    "createdAt": "1624002854225"
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
        "createComment" : {
            "ok": false,
            "error": 'Photo not found.'
                // or "comment not exist."
        }
    }
}
```

<br>

#### Edit Comment

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| id | Int | ✔️ |
| payload | String | ✔️ |

<br>

2️⃣ Response

|  Name   |  Type   |       Description        | Required |
| :-----: | :-----: | :----------------------: | :------: |
|   ok    | Boolean |  check success or fail   |    ✔️    |
|  error  | String  | message in case of error |    -     |
| comment | Comment |   That comment's info    |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "editComment" : {
            "ok": true,
            "comment": {
                "id":1,
                "user": {
                    "userName": "ivy"
                },
                "payload": "miss you,,",
                "createdAt": "1624003954225"
            },
        }
    }
}
```

Fail

```
{
    "data": {
        "editComment" : {
            "ok": false,
            "error": 'comment not found.'
                // or "Not authorized."
        }
    }
}
```

<br>

#### Delete Comment

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
        "deleteComment" : {
            "ok": true
        }
    }
}
```

Fail

```
{
    "data": {
        "deleteComment" : {
            "ok": false,
            "error": 'comment not found.'
                // or "Not authorized."
        }
    }
}
```

<br>

#### See Photo Comments

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| photoId | Int | ✔️ |
| lastCmdId | Int | - |

<br>

2️⃣ Response

|   Name   |   Type    |        Description         | Required |
| :------: | :-------: | :------------------------: | :------: |
|    ok    |  Boolean  |   check success or fail    |    ✔️    |
|  error   |  String   |  message in case of error  |    -     |
| comments | [Comment] | matched user search result |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seePhotoComments" : {
            "ok": true,
            "comments": [
                {
                    "id":1,
                    "user": {
                        "userName": "ivy"
                    },
                    "payload": "miss you,,",
                    "createdAt": "1624003954225"
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
        "seePhotoComments" : {
            "ok": false,
            "error": 'comments not exist.'
        }
    }
}
```

<br>

#### See Hashtag

1️⃣ Parameter
| Name | Type | Required |
| :----: | ---- | :-------: |
| hashtag | String | ✔️ |

<br>

2️⃣ Response

|  Name   |  Type   |          Description          | Required |
| :-----: | :-----: | :---------------------------: | :------: |
|   ok    | Boolean |     check success or fail     |    ✔️    |
|  error  | String  |   message in case of error    |    -     |
| hashtag | Hashtag | matched hashtag search result |    -     |

<br>

3️⃣ Simulate

Success

```
{
    "data": {
        "seeHashtag" : {
            "ok": true,
            "hashtag": {
                "id": 15,
                "photos" : [
                    {
                        "id": 1,
                        "file": "https://aaaa.s3.amazonaws.com/uploads"
                    },
                    ...
                ]
            }
        }
    }
}
```

Fail

```
{
    "data": {
        "seeHashtag" : {
            "ok": false,
            "error": "No results were found for your search."
        }
    }
}
```

<br>
