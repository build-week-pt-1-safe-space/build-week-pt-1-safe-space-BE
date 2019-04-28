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

| Request Type | Endpoint      | Description           |
|:------------:|:-------------:|:---------------------:|
| GET          | /api/users    | Return All Users      |
| GET          | /api/users:id | Return User By ID     |
| PUT          | /api/users:id | Update User Info By ID|
| DELETE       | /api/users:id | Remove User By ID     |

## Messages

| Request Type | Endpoint         | Description              |
|:------------:|:----------------:|:------------------------:|
| GET          | /api/messages    | Return All Messages      |
| POST         | /api/messages    | Create New Message       |
| GET          | /api/messages:id | Return Message By ID     |
| PUT          | /api/messages:id | Update Message Info By ID|
| DELETE       | /api/messages:id | Remove Message By ID     |

# Data Models

## Authentication

#### Register

The `/api/register` endpoint expects to recieve an object as follows: 

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

#### Login

The `api/login` endpoint expects to recieve an object as follows:

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