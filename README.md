# 🐶 Pet Adoption System – Backend API

Backend API for the Pet Adoption System built using Java, Spring Boot, and MySQL. This project provides REST APIs for user authentication, pet management, and adoption request handling.

---

# 🚀 Features

- User Registration & Login
- Add Pet Listings
- View Available Pets
- Update Adoption Status
- Delete Pet Listings
- Send Adoption Requests
- Update Request Status
- RESTful API Architecture
- MySQL Database Integration

---

# 🛠️ Tech Stack

## Backend
- Java
- Spring Boot
- Spring Data JPA
- Maven

## Database
- MySQL

## Tools
- Postman
- Git & GitHub
- IntelliJ IDEA / VS Code

---

# 📂 Project Structure

```plaintext
backend/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── controller/
│   │   │   ├── entity/
│   │   │   ├── repository/
│   │   │   ├── service/
│   │   │   └── PetAdoptionApplication.java
│   │   │
│   │   └── resources/
│   │
│   └── test/
│
├── pom.xml
└── mvnw
```

---

# 🔗 REST APIs

# 👤 User APIs

## Register User

```http
POST /users/register
```

Request Body:

```json
{
  "name": "Alex",
  "email": "alex@gmail.com",
  "password": "alex123",
  "phoneNumber": "9876543210",
  "city": "Berlin"
}
```

---

## Login User

```http
POST /users/login
```

Request Body:

```json
{
  "email": "alex@gmail.com",
  "password": "alex123"
}
```

---

# 🐾 Pet APIs

## Get All Pets

```http
GET /pets/all
```

---

## Add Pet

```http
POST /pets/add
```

Request Body:

```json
{
  "petName": "Tommy",
  "breed": "Pug",
  "age": 3,
  "description": "Friendly dog",
  "ownerId": 105
}
```

---

## Delete Pet

```http
DELETE /pets/delete/{id}
```

Example:

```http
DELETE /pets/delete/7001
```

---

## Update Adoption Status

```http
PUT /pets/update-status/{id}
```

Request Body:

```json
{
  "adoptionStatus": "Adopted"
}
```

---

# 📩 Adoption Request APIs

## Get All Requests

```http
GET /requests/all
```

---

## Send Adoption Request

```http
POST /requests/send
```

Request Body:

```json
{
  "petId": 1,
  "requesterId": 2,
  "status": "Pending"
}
```

---

## Update Request Status

```http
PUT /requests/update-status/{id}
```

Request Body:

```json
{
  "status": "Approved"
}
```

---

# 🗂️ Database Tables

# Users Table

| Column        | Type    |
|---------------|---------|
| id            | INT     |
| name          | VARCHAR |
| email         | VARCHAR |
| password      | VARCHAR |
| phone_number  | VARCHAR |
| city          | VARCHAR |

---

# Pets Table

| Column            | Type    |
|-------------------|---------|
| id                | INT     |
| pet_name          | VARCHAR |
| breed             | VARCHAR |
| age               | INT     |
| description       | TEXT    |
| owner_id          | INT     |
| adoption_status   | VARCHAR |

---

# Requests Table

| Column        | Type    |
|---------------|---------|
| id            | INT     |
| pet_id        | INT     |
| requester_id  | INT     |
| status        | VARCHAR |

---

# ▶️ Run Locally

## Clone Repository

```bash
git clone https://github.com/prachu25/pet-adoption.git
```

---

## Navigate to Backend Folder

```bash
cd backend
```

---

## Run Application

```bash
mvn spring-boot:run
```

---

# ⚙️ Configuration

Create an `application.properties` file inside:

```plaintext
src/main/resources/
```

Add your MySQL configuration:

```properties
spring.datasource.url=YOUR_DATABASE_URL
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

---

# 🧪 API Testing

You can test APIs using:

- Postman
- Thunder Client

---

# ✨ Future Improvements

- JWT Authentication
- Image Upload
- Search & Filters
- Email Notifications
- Role-Based Access

---

# 📌 Author

Prachi Gorde

Java Developer | Spring Boot | MySQL
