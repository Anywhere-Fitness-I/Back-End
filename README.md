## Base URL
``` 
https://anywhere-fit.herokuapp.com/
```

## Endpoints
Register new User
Make a POST request to /api/auth/register
Required fields in the req.body:
```
firstName
lastName
email
password
role  => either instructor or client
```
