# Student Registration System

A modern, responsive web application for student registration with QR code generation functionality.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 🔒 Secure form validation and data handling
- 📱 Mobile-friendly design
- 💫 Smooth animations using Framer Motion
- 📧 Email notifications
- 🔍 QR code generation for registered users

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Nodemailer
- QR Code Generator

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB account

### Installation

1. Clone the repository
```bash
git clone https://github.com/Komalrawatt/Auth_Us-backend.git
cd registration
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

### Environment Variables

Create a `.env` file in the backend directory with:
```env
DATABASE_URL=your_mongodb_connection_string
PORT=5000
```

### Running the Application

1. Start the Backend Server
```bash
cd backend
npm run dev
```

2. Start the Frontend Development Server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Project Structure

```
registration/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Validate.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── backend/
    ├── api/
    │   └── index.js
    ├── models/
    │   └── User.js
    ├── utils/
    │   └── db.js
    └── package.json
```

## Features in Detail

### Registration Form
- Full name validation
- Roll number uniqueness check
- Course selection
- Email validation
- Phone number format validation
- Real-time form validation
- Success/Error notifications

### Backend API
- RESTful API endpoints
- MongoDB data persistence
- Error handling
- Input sanitization
- Email notifications
- QR code generation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
