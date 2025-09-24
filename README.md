# Kalvium Student API
Run locally
1.	Clone the repository
2.	Run npm install
3.	Run npm start
4.	Visit http://localhost:3000
Deployed API URL
https://deploying-your-first-api-kkab.onrender.com/
API Endpoints
•	GET /api/students → returns all students
•	POST /api/students → add a student
o	Body JSON: { name, age, course, year, status? }
Challenges faced
•	Handled corrupted students.json by backing it up and creating a new empty array.
•	Configured CORS to allow frontend integration.
•	Ensured server listens on process.env.PORT for Render deployment.
