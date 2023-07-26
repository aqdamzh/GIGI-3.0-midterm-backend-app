# Installation

clone repository

### API
- run `npm install` to installing package
- run `npm run start` to run with normal nodejs
- run `npm run dev` to run with nodemon!

# DB Structure
![mongoDB-backend-GIGIH](https://github.com/aqdamzh/GIGI-3.0-midterm-backend-app/assets/34984085/61637ba0-673d-48eb-a103-841c3a239e86)



# API Documentation
<!-- TABLE OF CONTENTS -->
## API Table of Contents
* [GET /api/videos](#get-apivideos)
* [POST /api/videos](#post-apivideos)
* [GET /api/videos/:videoId](#get-apivideosvideoid)
* [PUT /api/videos/:videoId](#put-apivideosvideoid)
* [DELETE /api/videos/:videoId](#delete-apivideosvideoid)
* [GET /api/videos/:videoId/products](#get-apivideosvideoidproducts)
* [POST /api/videos/:videoId/products](#post-apivideosvideoidproducts)
* [GET /api/videos/:videoId/products/:productId](#get-apivideosvideoidproductsproductid)
* [PUT /api/videos/:videoId/products/:productId](#put-apivideosvideoidproductsproductid)
* [DELETE /api/videos/:videoId/products/:productId](#delete-apivideosvideoidproductsproductid)
* [GET /api/videos/:videoId/comments](#get-apivideosvideoidcomments)
* [POST /api/videos/:videoId/comments](#post-apivideosvideoidcomments)
* [GET /api/videos/:videoId/comments/:commentId](#get-apivideosvideoidcommentscommentid)
* [PUT /api/videos/:videoId/comments/:commentId](#put-apivideosvideoidcommentscommentid)
* [DELETE /api/videos/:videoId/comments/:commentId](#delete-apivideosvideoidcommentscommentid)

## GET /api/videos
  Returns all videos.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
[
  {
    "_id": "<ObjectId>",
    "title": "<VideoTitle>",
    "src": "<VideoLink>",
    "thumbnail": "<ImageLink>"
  },
  {
    "_id": "<ObjectId>",
    "title": "<VideoTitle>",
    "src": "<VideoLink>",
    "thumbnail": "<ImageLink>"
  },
  ...
]
```

## POST ***/api/videos***
  Create a new video.
* **URL Params**  
  None
* **Data Params**  
```json
{
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 201 CREATED
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
```

## GET ***/api/videos/:videoId***
  Return an existing video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params** 
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
```

## PUT ***/api/videos/:videoId***
  Update an existing video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params** 
```json
{
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
```

## DELETE ***/api/videos/:videoId***
  Delete an existing video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params** 
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
"status" : "deleted",
"video": {
  "_id": "<ObjectId>",
  "title": "<VideoTitle>",
  "src": "<VideoLink>",
  "thumbnail": "<ImageLink>"
}
```

## GET ***/api/videos/:videoId/products***
  Returns all products based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
[
  {
    "_id": "<ObjectId>",
    "name": "<ProductName>",
    "price": 1000,
    "thumbnail": "<ImageLink>",
    "link": "<ProductLink>",
    "videoId": "<VideoId>"
  },
  {
    "_id": "<ObjectId>",
    "name": "<ProductName>",
    "price": 1000,
    "thumbnail": "<ImageLink>",
    "link": "<ProductLink>",
    "videoId": "<VideoId>"
  },
  ...
]
```

## POST ***/api/videos/:videoId/products***
  Add a new product based on video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
```json
{
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 201 CREATED
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>",
  "videoId": "<VideoId>"
}
```

## GET ***/api/videos/:videoId/products/:productId***
  Returns an existing product based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
   `productId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>",
  "videoId": "<VideoId>"
}
```

## PUT ***/api/videos/:videoId/products/:productId***
  Update an existing product based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
   `productId=[String]`
* **Data Params** 
```json
{
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
{
  "_id": "<ObjectId>",
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>",
  "videoId": "<VideoId>"
}
```

## DELETE ***/api/videos/:videoId/products/:productId***
  Delete an existing product based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
   `productId=[String]`
* **Data Params** 
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
"status" : "deleted",
"video": {
  "_id": "<ObjectId>",
  "name": "<ProductName>",
  "price": 1000,
  "thumbnail": "<ImageLink>",
  "link": "<ProductLink>",
  "videoId": "<VideoId>"
}
```

## GET ***/api/videos/:videoId/comments***
  Returns all comments based on the video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
  None
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 200 OK
Content-Type: application/json
```
  Content: 
```json
[
  {
    "_id": "<ObjectId>",
    "username": <Username>,
    "content": "<CommentContent>",
    "timestamp": "<Timestamp>",
    "videoId": "<VideoId>"
  },
  {
    "_id": "<ObjectId>",
    "username": <Username>,
    "content": "<CommentContent>",
    "timestamp": "<Timestamp>",
    "videoId": "<VideoId>"
  },
  ...
]
```

## POST ***/api/videos/:videoId/comments***
  Add a new comment based on video.
* **URL Params**  
  *Required:* `videoId=[String]`
* **Data Params**  
```json
{
  "username": <Username>,
  "content": "<CommentContent>",
  "timestamp": "<Timestamp>"
}
``` 
* **Headers**  
```
Accept: application/json
Content-Type: application/json
``` 
* **Success Response:**  
```
HTTP/1.1 201 CREATED
Content-Type: application/json
```
  Content: 
```json
  {
    "_id": "<ObjectId>",
    "username": <Username>,
    "content": "<CommentContent>",
    "timestamp": "<Timestamp>",
    "videoId": "<VideoId>"
  }
```

## GET ***/api/videos/comments/:commentId***

## PUT ***/api/videos/comments/:commentId***

## DELETE /api/videos/comments/:commentId
