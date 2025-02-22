# JobBoard - First React App

**JobBoard** is a web application enabling companies to publish job offers and users to apply. The project includes an administration interface for managing ads, as well as a dedicated user interface.

## Project overview

This **JobBoard** project enables :
- Companies can post and manage job offers (title, company, salary, location, etc.).
- Users can consult and apply for these offers, and even modify their account.
-It's up to the administrator to manage all ads, companies and users via a dedicated Admin interface.

## Features

- **Advertising**: Companies can publish and manage their job advertisements.
- **Online application**: Users can apply directly to an ad, with only one application per ad. You must be logged in to apply.
-**Ad management** : The administrator can perform CRUD actions on ads (create, read, update, delete).
- **No unsolicited applications** : Users cannot send unsolicited applications.
  
## Technologies

The project is based on the following technologies:
- **Frontend**: React with TypeScript
- **Backend** : PHP
- **Database**: MySQL
- **Local development server**: WAMP
- **Other tools**: Axios for API calls

## Installation

### Download the deposit
Unzip the file.

1. **Frontend installation:**
   - Go to the frontend folder :
   ```bash
   cd finejob/frontend
   ```
   - Install the :
   ```bash
   npm install
   ```

2. **Backend installation:**
   - Go to the backend folder :
   ```bash
   cd finejob/backend
   ```
   - Install the backend on a local server. And check that the routes are correct when you call the backend.
   - Install dependencies if necessary (PHP).

## Database configuration

1. Import the finejob.sql database.

## Usage

1. **Launching the development server:**

   - **Frontend :**
   ```bash
   npm run dev
   ```
   - Backend**: Start your WAMP (or other) server and make sure the backend is accessible.

2. **Application access:**
   - Open your browser and go to the corresponding URL (for example: `http://localhost:3000` for the frontend).
