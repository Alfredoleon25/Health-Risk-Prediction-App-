# Disease Prediction System

A web application that predicts diseases based on a patient's condition using the **Delphi 2M model**. The project is structured with separate directories for the frontend, backend, and the predictive model.

---

## Project Structure
Health-Risk-Prediction-App/
│
├── backend/ # Node.js + Express + PostgreSQL backend
├── frontend/ # React frontend
└── delphi-model/ # Delphi 2M model for disease prediction


---

## Features

- Predict diseases based on patient input.
- Interactive frontend built with React.
- Robust backend with Node.js, Express, and PostgreSQL.
- Uses the Delphi 2M model for accurate predictions.

---

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **AI Model:** Delphi 2M

---

## Getting Started

### Prerequisites

- Node.js >= 14.x
- PostgreSQL >= 12.x
- npm or yarn

## Installation

1. **Clone the repository**
bash
git clone <your-repo-url>
cd project-root

2. **Setup Backend**
cd backend
npm install
# Create a .env file and add your database credentials
npm run dev

3. **Setup Frontend**
cd frontend
npm install
npm start

4. **Setup Delphi Model**
cd delphi-model
# Instructions to run the Delphi 2M model

###Usage
Open the frontend in your browser (usually at http://localhost:3000).
Enter patient details in the form.
Submit the form to get a predicted disease.
Backend communicates with the Delphi 2M model to provide the prediction.

###Contributing
Fork the repository.
Create a new branch: git checkout -b feature-name
Make your changes and commit: git commit -m "Description of changes"
Push to the branch: git push origin feature-name
Create a pull request.