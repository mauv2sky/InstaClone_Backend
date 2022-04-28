# Insta Clone Backend

> -   NodeJs, Express
> -   GraphQL, Apollo, Prisma
> -   http, webSocket

<br>

## Function

### User

-   [x] Create Account
-   [x] See Profile
-   [x] Login
-   [x] Edit Profile
-   [x] Change Avatar
-   [x] Follow User
-   [x] Unfollow User
-   [x] See Followers
-   [x] See Following
-   [x] Computed Fields
-   [x] Search Users

<br>

### Photos

-   [x] Upload Photo (S3)
-   [x] See Photo
-   [x] Search Photos
-   [x] Edit Photo
-   [x] Delete Photo
-   [x] Like / Unlike Photo
-   [x] See Photo Likes
-   [x] See Feed
-   [x] Write Comments
-   [x] Edit Comments
-   [x] Delete Comments
-   [x] See Photo Comments
-   [x] See Hashtag

 <br>

### Message

-   [x] Send Message
-   [x] See Rooms
-   [x] See Room
-   [x] Room Update
-   [x] Read Message
-   [x] Delete Message

<br>

## Folder Tree

```
📦INSTACLONE_BACKEND
 ┣ 📂gql                    // 기능별 typeDefs, resolver
 ┣ 📂prisma                 // 스키마 생성 및 마이그래이션 관리
 ┣ 📜client.js              // apollo client 생성
 ┣ 📜constants.js           // 상수 관리
 ┣ 📜pubSub.js              // apollo-server-express의 pubSub 생성
 ┣ 📜schema.js              // 흩어진 typeDefs, resolvers 파일 통합
 ┗ 📜server.js
```
