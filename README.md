# build-week-pt-1-safe-space-BE

# Overview

This API is used as part of the application __Safe Space__ and allows for CRUD operations to
be performed on both on the application's __users__ and __messages__.

This documentation will cover all of the data models and endpoints which can be access via
> <https://safe-space-backend.herokuapp.com/>


# Endpoints

## Authentication

| Request Type | Endpoint      | Description   |
|:------------:|:-------------:|:-------------:|
| POST         | /api/register | Creates User  |
| POST         | /api/login    | Creates JWT*  |

* JSON Web Tokens Used to Verify Users

## Users

| Request Type | Endpoint       | Description           |
|:------------:|:--------------:|:---------------------:|
| GET          | /api/users     | Return All Users      |
| GET          | /api/users/:id | Return User By ID     |
| PUT          | /api/users/:id | Update User Info By ID|
| DELETE       | /api/users/:id | Remove User By ID     |

## Messages

| Request Type | Endpoint          | Description                   |
|:------------:|:-----------------:|:-----------------------------:|
| GET          | /api/messages     | Return All Messages           |
| POST         | /api/messages     | Create New Message            |
| GET          | /api/messages/:id | Return All Messages By User ID|
| PUT          | /api/messages/:id | Update Message Info By ID     |
| DELETE       | /api/messages/:id | Remove Message By ID          |

# Data Models

## Authentication

### Register

A __POST__ request to the `/api/register` endpoint expects to recieve an object as follows: 

```javascript
{
    "email": "email@address.com",
    "first_name": "Bob",
    "last_name": "Ross",
    "password": "happytree",
    "phone": "15555555555",
    "profile_pic": "link/to/image.here",
    "gender": "Male"
}
```

| Field        | Type      | Required   | Unique     |
|:------------:|:---------:|:----------:|:----------:|
| email        | String    |  true      | true       |
| first_name   | String    |  true      | false      |
| last_name    | String    |  true      | false      |
| password     | String    |  true      | false      |
| phone        | String    |  true      | false      |
| profile_pic  | String    |  false     | false      |
| gender       | String    |  false     | false      |

### Login

A __POST__ request to the `api/login` endpoint expects to recieve an object as follows:

```javascript
{
    "email": "email@adress.com",
    "password": "happytree"
}
```

| Field        | Type      | Required   | Unique     |
|:------------:|:---------:|:----------:|:----------:|
| email        | String    |  true      | N/A        |
| first_name   | String    |  true      | N/A        |

__NOTE:__ If successful, a JSON Web Token will be returned. This must be stored and used as authentication for API calls to _users_ or _messages_ endpoints.

## Users

* A __GET__ request to the `api/users` endpoint will return an object as follows: 

```javascript
[
    {
        "id": 1,
        "email": "email@address.com",
        "first_name": "Bob",
        "last_name": "Ross",
        "password": "happytree",
        "phone": "15555555555",
        "profile_pic": "link/to/image.here",
        "gender": "Male"
    },
    {
        "id": 2,
        "email": "email@address.com",
        "first_name": "Pablo",
        "last_name": "Picasso",
        "password": "AbStRaCt",
        "phone": "15555555555",
        "profile_pic": "link/to/image.here",
        "gender": "Male"
    }
]
```

* A __GET__ request to the `api/users/:id` endpoint will return an object as follows: 

```javascript
[
    {
        "id": 2,
        "email": "email@address.com",
        "first_name": "Pablo",
        "last_name": "Picasso",
        "password": "AbStRaCt",
        "phone": "15555555555",
        "profile_pic": "link/to/image.here",
        "gender": "Male"
    }
]
```

* A __PUT__ request to the `api/users/:id` endpoint expects to recieve an object as follows: 

```javascript
{
    "email": "Newemail@address.com",
    "first_name": "Pablo",
    "last_name": "Picasso",
    "password": "normal",
    "phone": "13333333333",
    "profile_pic": "link/to/image.here",
    "gender": "Male"
}
```

__NOTE:__ An object only containing the changed field is required, if the field is to remain the same it is not needed.

* A __PUT__ request to the `api/users/:id` endpoint will return an object as follows:

```javascript
[
    {
        "id": 2,
        "email": "Newemail@address.com",
        "first_name": "Pablo",
        "last_name": "Picasso",
        "password": "normal",
        "phone": "13333333333",
        "profile_pic": "link/to/image.here",
        "gender": "Male"
    }
]
```
* A __DELETE__ request to the `api/users/:id` endpoint will return an object as follows:

```javascript
[
    {
        "id": 2,
        "email": "Newemail@address.com",
        "first_name": "Pablo",
        "last_name": "Picasso",
        "password": "normal",
        "phone": "13333333333",
        "profile_pic": "link/to/image.here",
        "gender": "Male"
    }
]
```

## Messages

* A __GET__ request to the `api/messages` endpoint will return an object containing all messages in database as follows:

```javascript
[
    {
        "id": 1,
        "user_id": 3
        "body": "Message to be sent via SMS",
        "created_at": "3pm",
        "send_time": "6pm"
    },
    {
        "id": 2,
        "user_id": 2
        "body": "Message to be sent via SMS",
        "created_at": "12pm",
        "send_time": "9pm"
    }
]
```
* A __POST__ request to the `api/messages` endpoint will expect to recieve an object as follows:

```javascript
{
    "user_id": 5
    "body": "Message to be sent via SMS",
    "created_at": "3pm",
    "send_time": "6pm"
}
```
* A __GET__ request to the `api/messages/:id` endpoint will return an object containing all messages to the user specified by id as follows: 

```javascript
[
    {
        "id": 1,
        "user_id": 5
        "body": "Message to be sent via SMS",
        "created_at": "3pm",
        "send_time": "6pm"
    },
    {
        "id": 2,
        "user_id": 5
        "body": "Message to be sent via SMS",
        "created_at": "12pm",
        "send_time": "9pm"
    }
]
```

* A __PUT__ request to the `api/messages/:id` will expect to recieve an object as follows:

```javascript
[
    {
        "user_id": 5
        "body": "New Message to Send",
        "created_at": "1am",
        "send_time": "10pm"
    }
]
```

__NOTE:__ An object only containing the changed field is required, if the field is to remain the same it is not needed.

* A __DELETE__ request to the `api/messages/:id` will return an object as follows:

```javascript
[
    {
        "id": 2,
        "user_id": 5
        "body": "Message to be sent via SMS",
        "created_at": "12pm",
        "send_time": "9pm"
    }
]
```

# Troubleshooting

## Error Codes

| Code | Request | Endpoint      | Message                 | Fix                                      |
|:----:|:-------:|:-------------:|:-----------------------:|:----------------------------------------:|
| 400  | CRUD    | /api/users/:id| No ID Found             | req.params did not contain id field      |
| 401  | POST    | /api/login    | Invalid Credentials     | Email Not Found or Password Did Not Match|
| 406  | POST    | /api/register | Missing Field           | Ensure Password and email are sent       |
| 409  | POST    | /api/register | Acount Exists For Email | Use New Email                            |
| 500  | POST    | /api/register | Registration Failed     | Check Server Sent Error for Info         |
| 500  | POST    | /api/login    | Could Not Login         | Check Server Sent Error for Info         |