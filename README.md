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

| Request Type | Endpoint      | Description      |
|:------------:|:-------------:|:----------------:|
| GET          | /api/users    | Return All Users |
| GET          | /api/users:id | Return User By ID|
| PUT          | /api/users:id | Update User Info |
| DELETE       | /api/users:id | Remove User By ID|

## Messages

| Request Type | Endpoint         | Description         |
|:------------:|:----------------:|:-------------------:|
| GET          | /api/messages    | Return All Messages |
| POST         | /api/messages    | Create New Message  |
| GET          | /api/messages:id | Return Message By ID|
| PUT          | /api/messages:id | Update Message Info |
| DELETE       | /api/messages:id | Remove Message By ID|