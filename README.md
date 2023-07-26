# Installation

clone repository

### API
- run `npm install` to installing package
- run `npm run start` to run with normal nodejs
- run `npm run dev` to run with nodemon!

# DB Structure
![mongoDB-backend-GIGIH](https://github.com/aqdamzh/GIGI-3.0-midterm-backend-app/assets/34984085/67ba667f-bd33-478e-b6b3-d9aad06f3a33)


# API Documentation
<!-- TABLE OF CONTENTS -->
## API Table of Contents
* [GET /api/videos](#get-apivideos)
* [POST /api/videos](#post-apivideos)
* [GET /api/videos/:videoId](#get-apivideosvideoid)
* [PUT /api/videos/:videoId](#put-apivideosvideoid)
* [DELETE /api/videos/:videoId](#delete-apivideosvideoid)
* [GET /api/videos/products](#get-apivideosproducts)
* [POST /api/videos/products](#post-apivideosproducts)
* [GET /api/videos/products/:productId](#get-apivideosproductsproductid)
* [PUT /api/videos/products/:productId](#put-apivideosproductsproductid)
* [DELETE /api/videos/products/:productId](#delete-apivideosproductsproductid)
* [GET /api/videos/comments](#get-apivideoscomments)
* [POST /api/videos/comments](#post-apivideoscomments)
* [GET /api/videos/comments/:commentId](#get-apivideoscommentscommentid)
* [PUT /api/videos/comments/:commentId](#put-apivideoscommentscommentid)
* [DELETE /api/videos/comments/:commentId](#delete-apivideoscommentscommentid)

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

## GET ***/api/videos/products***

## POST ***/api/videos/products***

## GET ***/api/videos/products/:productId***

## PUT ***/api/videos/products/:productId***

## DELETE ***/api/videos/products/:productId***

## GET ***/api/videos/comments***

## POST ***/api/videos/comments***

## GET ***/api/videos/comments/:commentId***

## PUT ***/api/videos/comments/:commentId***

## DELETE /api/videos/comments/:commentId
