##Still in progress
Endpoints
##POST Register
/auth/register

{
	"username": "new_user",
	"password": "pass",
	"instructor": true
}
##POST Login
/auth/login

{
	"username": "new_user",
	"password": "pass"
}
On Login and Register You Will Receive a Token (lasts a day)
{
  "id": 3,
  "instructor": "false"
  "token": "eyJhbGciOiJ3ODQ0MX0.6es5Q9hZJw5U8a5EyWucbMM60xRoGX5_U3kQQ5BVPH0"
}
##GET Classes
/classes

[
    {
        "id": 1,
        "name": "CrossFit",
        "type": "general",
        "intensity": "medium",
        "duration": "1 month",
        "start_time": "06/30/2020",
        "schedule": "Thursday & Saturday 11:00 AM",
        "location": "123 Main Street",
        "currently_registered": 3,
        "class_size": 20,
        "image": null,
        "instructor_id": 1
    },
    {
        "id": 2,
        "name": "Tai-Chi",
        "type": "martial-art",
        "intensity": "hard",
        "duration": "3 months",
        "start_time": "06/20/2020",
        "schedule": "Saturday 11:00 AM",
        "location": "456 Parker Ave",
        "currently_registered": 5,
        "class_size": 15,
        "image": null,
        "instructor_id": 3
    },
    {
        "id": 3,
        "name": "Yoga",
        "type": "Yoga",
        "intensity": "easy",
        "duration": "1 month",
        "start_time": "06/28/2020",
        "schedule": "Sunday 9:00 AM",
        "location": "1600 Fox Drive",
        "currently_registered": 10,
        "class_size": 30,
        "image": null,
        "instructor_id": 1
    },
    {
        "id": 4,
        "name": "Pilates",
        "type": "general",
        "intensity": "easy",
        "duration": "1 month",
        "start_time": "06/15/2020",
        "schedule": "MWF 11:00 AM",
        "location": "123 Main Street",
        "currently_registered": 4,
        "class_size": 20,
        "image": null,
        "instructor_id": 3
    }
]
##GET Classes by ID
/classes/:id

##GET Clients by Class ID
/classes/:id/list

On Success Returns Array of Users

[
  {
    "id": 2,
    "username": "workout_warrior_1",
   
  }
]
##GET Classes by Instructor
/classes/instructor/:id

[
   {
        "id": 1,
        "name": "CrossFit",
        "type": "general",
        "intensity": "medium",
        "duration": "1 month",
        "start_time": "06/30/2020",
        "schedule": "Thursday & Saturday 11:00 AM",
        "location": "123 Main Street",
        "currently_registered": 3,
        "class_size": 20,
        "image": null,
        "instructor_id": 1
    },
{
        "id": 3,
        "name": "Yoga",
        "type": "Yoga",
        "intensity": "easy",
        "duration": "1 month",
        "start_time": "06/28/2020",
        "schedule": "Sunday 9:00 AM",
        "location": "1600 Fox Drive",
        "currently_registered": 10,
        "class_size": 30,
        "image": null,
        "instructor_id": 1
    }
]
##GET Classes by Client
/classes/client/:id

##POST Class (required fields to post a class are: name, start time, schedule, location)
/classes


{
	"name" : "KickBoxing",
  	"start_time":"1/2/2020"
	"schedule" : "Tues & Thurs 3PM",
	"location": "201 Baker St"
}
##DELETE Class
/classes/:id

Returns an Array of All Classes Remaining

On Success

{
  "message": "class deleted"
}
On Failure

{
  "message": "error removing class either not authorized or class does not exist"
}
##DELETE Class By Instructor ID
/:id/remove

Send the Class You Want to Delete in the Body of the Request

{
	"id": 4
}
Returns an Array of All Classes By Instructor

[
 {
        "id": 1,
        "name": "CrossFit",
        "type": "general",
        "intensity": "medium",
        "duration": "1 month",
        "start_time": "06/30/2020",
        "schedule": "Thursday & Saturday 11:00 AM",
        "location": "123 Main Street",
        "currently_registered": 3,
        "class_size": 20,
        "image": null,
        "instructor_id": 1
    },
]
