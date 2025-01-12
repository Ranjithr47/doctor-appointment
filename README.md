# Doctor Appointment Full Stack Project
Live Preview: https://doc-appointment-frontend.onrender.com/
This project is a **full-stack web application** built to facilitate appointment booking for patients with doctors. The application supports multiple doctor categories, allowing users to book appointments for specific days and times within the next week. Users can log in to manage their profile, book appointments, and interact with a variety of doctors based on their specialty. The admin panel provides functionalities for managing doctors, viewing all appointments, and generating useful statistics, while doctors can view their scheduled appointments and track their total earnings and patient count.

## Features

### **User Panel**:
- **Login and Register**: 
  - Users can create an account or log in to access their personalized dashboard and book appointments.
- **Book Appointments**: 
  - Users can browse available doctors based on different categories (e.g., General Medicine, Pediatrics, Dermatology) and schedule appointments at specific times within the next week.
- **Update Profile**: 
  - Users can edit their personal details, such as name, contact information to keep their profile up to date.

### **Admin Panel**:
- **Add New Doctors**: 
  - Admins can add new doctors to the system by providing their details such as name, specialty, availability, etc.
- **View All Appointments**: 
  - Admins have access to a comprehensive list of all booked appointments, along with the ability to cancel appointments as needed.
- **Dashboard with Appointment Stats**: 
  - The admin dashboard provides insights into the number of appointments booked and other key metrics.

### **Doctor Panel**:
- **View Appointments for the Day**: 
  - Doctors can see their appointments for the day, including the patient's name, appointment time, and any additional details.
- **Dashboard with Patient Count and Earnings**: 
  - Doctors can view a dashboard that shows the number of patients they've seen and their total earnings, providing insights into their workload and income.

## Tech Stack

### **Frontend**:
- **React**: 
  - The user interface is built using React, providing a responsive and dynamic user experience.
  - React Router is used for handling navigation between pages (e.g., user login, dashboard, booking, etc.).
  - Tailwind is used to enhance the design and improve UI components.

### **Backend**:
- **Node.js**: 
  - The backend is built using Node.js, a JavaScript runtime environment, to handle server-side logic.
- **Express.js**: 
  - Express is used as the web application framework to simplify routing, handling requests, and managing middleware.
- **bcryptjs**: 
  - Used for password hashing and secure user authentication.
- **jsonwebtoken (JWT)**: 
  - JWT is used for user authentication and managing user sessions via tokens.

### **Database**:
- **MongoDB**: 
  - MongoDB is used as the database for storing user information, doctor details, appointments, and other application data. MongoDB's NoSQL structure allows for easy scaling and flexible data storage.
  - **Mongoose** is used for object data modeling (ODM) to interact with the MongoDB database.

### **Other Technologies**:
- **Cloudinary**: 
  - Cloudinary is used for uploading and managing images (e.g., doctor profile pictures, user avatars).
- **Nodemon**: 
  - Nodemon is used during development to automatically restart the server whenever changes are made to the code.
- **Multer**: 
  - Multer is used for handling file uploads, such as profile pictures or documents.

