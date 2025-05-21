# 🎯 Project Overview: AI-Powered Interview Platform

It is an integrated solution designed to assist job seekers throughout the application process. It leverages advanced AI technologies to provide personalized services, enhancing the user's experience and improving their chances of success.

---

## 🧠 Core Features

### 1. **AI-Driven Interview Simulation**
- **Resume Parsing**: Users upload their resumes in PDF format. The system extracts and analyzes the content to tailor interview questions.
- **Dynamic Question Generation**: Utilizing OpenAI's GPT-4o model, the platform generates context-specific interview questions based on the user's resume, desired role, and target company.
- **Text-to-Speech Conversion**: Deepgram's TTS API converts generated questions into audio, providing a realistic interview experience.
- **Voice Response Analysis**: Users respond verbally; their answers are transcribed using Deepgram's ASR technology.
- **Feedback Loop**: The transcribed responses are analyzed by GPT-4o to generate follow-up questions or feedback, creating an interactive interview session.

### 2. **Automated Quiz Generation**
- **Customized Quizzes**: Based on the user's role, company, and experience, the platform generates a 10-question multiple-choice quiz using GPT-4o.
- **Structured Output**: The quiz is formatted in JSON, ensuring compatibility and ease of integration.
- **Database Integration**: Quizzes are stored in a MongoDB database for future reference or analysis.

### 3. **Resume Builder**
- **User-Friendly Interface**: A React and Tailwind CSS frontend allows users to input their information seamlessly.
- **Template Selection**: Users can choose from various templates to suit their preferences.
- **ATS-Friendly**: Resumes are generated using LaTeX, ensuring they are optimized for Applicant Tracking Systems (ATS).
- **PDF Generation**: The completed resume can be exported as a PDF, ready for job applications.

### 4. **Cover Letter Generator**
- **AI-Powered Writing**: By analyzing the user's resume and the job description, GPT-4o crafts personalized cover letters.
- **Customization Options**: Users can adjust the tone and content to match specific job requirements.
- **ATS-Friendly**: Cover letters are also generated using LaTeX, ensuring they are ATS-compatible.
- **Downloadable Output**: The generated cover letters can be downloaded in various formats.

---

## 🔐 Authentication & Security

- **User Management**: The `auth.js` module handles user registration, login, and authentication processes.
- **Secure Data Handling**: Sensitive information is managed securely, ensuring user privacy and data protection.

---

## 🛠️ Technology Stack

- **Frontend**: React.js with Tailwind CSS for responsive and modern UI/UX.
- **Backend**: Node.js with Express.js for server-side operations.
- **Database**: MongoDB for data storage and retrieval.
- **AI Services**:
  - **OpenAI GPT-4o**: For generating interview questions, quizzes, and cover letters.
  - **Deepgram API**: For speech-to-text and text-to-speech functionalities.
- **Document Generation**: LaTeX for generating ATS-friendly resumes and cover letters.

---

## 📁 Repository Structure

- **`BackEnd/`**: Contains server-side code, including API routes and business logic.
- **`FrontEnd/`**: Houses the React frontend application.
- **`models/`**: Defines Mongoose schemas for MongoDB collections.
- **`controllers/`**: Includes logic for handling requests and responses.
- **`routes/`**: Sets up API endpoints for various functionalities.

---

## 🚀 Getting Started

To set up the project locally:

1. **Clone the Repository**:
   ```
   git clone https://github.com/Panchalparth471/MINI_PR.git

2. **Install Dependencies**:

```
cd MINI_PR/BackEnd
npm install
cd ../FrontEnd
npm install
```
## Configure Environment Variables:
```
Create a .env file in the BackEnd directory with the following:


DEEPGRAM_API_KEY=your_deepgram_api_key
API_KEY=your_openai_api_key
BASE_URL=https://api.openai.com/v1
```
## Run the Application:

### Backend:
```
cd MINI_PR/BackEnd
npm start
```

### Frontend:

```
cd MINI_PR/FrontEnd
npm start
```
