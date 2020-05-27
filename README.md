## Base URL
``` 
https://anywhere-fit.herokuapp.com
```

## Endpoints
Register new User
Make a **POST** request to **/api/auth/register**
Required fields in the req.body:
```
firstName
lastName
email
password
role  => either instructor or client
```
Login existing User
Make a **POST** request to **/api/auth/login**
Required fields in the req.body:
```
email
password
```
On a succesfull login/register you'll get a response like this:
```
{
    "message": "Welcome testing!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo5LCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNTkwMzcwMTg5LCJleHAiOjE1OTI5NjIxODl9.xMwyt7HIcTplwnNbyNp_TKNECK-0OJ_TRHXEoON6e-g",
    "user": {
        "id": 9,
        "firstName": "testing",
        "lastName": "testing",
        "email": "client123@client.com",
        "role": "client"
    }
}
```
## Instructor 
This set of endpoints is only accessible to users with a valid token's role set to instructor
Get Instructor classes
Allows instructors view the classes they have created.
Make a **GET** request to **/api/instructor/class**
Must include a valid token
example respones:
(this will be an empty array if the instructor has not created a class!)
```
[
    {
        "id": 6,
        "name": "meee",
        "type": "alien",
        "date": "today",
        "startTime": "right now",
        "duration": "forever",
        "intensityLevel": "easy peasy",
        "location": "planet earth",
        "description": "best ever!",
        "registeredAttendees": 0,
        "maxClassSize": 50,
        "image": null,
        "instructorId": 4
    }
]
```

### Add a new Instructor class
Make a **POST** request to **/api/instructor/class**
Must include a valid token
Required fields in the req.body:
```
name
type
date
startTime
duration
description
intensityLevel
location
maxClassSize
(registeredAttendees is not required and should update when a client reserves a class)
(you have an option for image but its not required)
```
successful posting response example:
```
{
    "message": "New entry successfully created!",
    "newClass": {
        "id": 6,
        "name": "meee",
        "type": "alien",
        "date": "today",
        "startTime": "right now",
        "duration": "forever",
        "intensityLevel": "easy peasy",
        "location": "planet earth",
        "description": "best class ever!",
        "registeredAttendees": 0,
        "maxClassSize": 50,
        "image": null,
        "instructorId": 4
    }
}
```
### Update Instructor class
Allows an instructor to update a specific part of a class
Make a **PUT** request to **/api/instructor/class/:id**
Must include a valid token
:id refers to the id created when you post a class or an existing class for that instructor.
Include the field(s) you wish to update ( just the ones you want to update )
```
name
type
date
startTime
duration
description
intensityLevel
location
maxClassSize
```
### Delete Instructor class
Allows an instructor to delete a class
Make a **DELETE** request to **/api/instructor/class/:id**
where :id is the id of the class to be deleted.
Must include a valid token

## Client 
This set of endpoints is only accessible to users with a valid token's role set to client.
Get all classes
Allows clients view all the classes available.
Make a **GET** request to **/api/client/class**
Must include a valid token
successful response will show an array of all available classes:
```
[
    {
        "id": 7,
        "name": "testClass",
        "type": "alien",
        "date": "today",
        "startTime": "right now",
        "duration": "forever",
        "intensityLevel": "easy peasy",
        "location": "mars",
        "registeredAttendees": 0,
        "maxClassSize": 50,
        "description": "best ever!",
        "image":"###",
        "instructorName": "danial hadavi"
    },
    {
        "id": 8,
        "name": "testClass",
        "type": "alien",
        "date": "today",
        "startTime": "right now",
        "duration": "forever",
        "intensityLevel": "easy peasy",
        "location": "mars",
        "registeredAttendees": 0,
        "maxClassSize": 50,
        "description": "best ever!",
        "image":"###",
        "instructorName": "danial hadavi"
    },
    {
        "id": 9,
        "name": "testClass",
        "type": "alien",
        "date": "today",
        "startTime": "right now",
        "duration": "forever",
        "intensityLevel": "easy peasy",
        "location": "mars",
        "registeredAttendees": 0,
        "maxClassSize": 50,
        "description": "best ever!",
        "image":"###",
        "instructorName": "danial hadavi"
    } 
]
```

### Get all reserved classes
Allows a client view all the classes they have reserved.
Make a **GET** request to **/api/client/reservations**
Must include a valid token
example of successful get request:
(this will be empty if user has no reseved classes)
```
[
    {
        "classId": 2,
        "name": "Tai-Chi",
        "type": "martial-art",
        "date": "Saturday 11:00 AM",
        "startTime": "06/20/2020",
        "duration": "3 months",
        "intensityLevel": "hard",
        "location": "456 Parker Ave",
        "registeredAttendees": 1,
        "maxClassSize": 20,
        "description": "Tai chi is an ancient Chinese tradition that, today, is practiced as a graceful form of exercise. It involves a series of movements performed in a slow, focused manner and accompanied by deep breathing.",
        "instructor": "instructor2 test"
        "image":"###"
    }
]
```

### Make a reservation
Make a **POST** request to **/api/client/reservations**
Must include a valid token and the id of the class to be reserved
Required fields in the req.body:
```
classId
```
### Delete a reservation
Allows a client to remove a reserved class from their list
Make a **DELETE** request to **/api/client/reservations/:id**
where :id is the id of the reserved class to be removed.
Must include a valid token

#### Let me know if you have any questions 🙂
