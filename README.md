# Accredian Frontend Task - Refer Now UI

This is the **frontend** of the Refer Now project, built using **React.js** with a production-level folder structure. It provides a user-friendly interface for referring people to courses.

## 🚀 Features

- ✅ **Clean & responsive UI**
- ✅ **Form to refer a person for a course**
- ✅ **API integration with backend**
- ✅ **Error handling & success messages**
- ✅ **Deployed on Vercel**

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## 💂️ Project Structure

```
/src
🗂 /assets            # Images, icons, and static assets
🗂 /components        # Reusable UI components
🗂 /pages             # Main pages (Home, Refer, etc.)
🗂 /helper             # Helper functions
🗂 App.js             # Main component
🗂 main.jsx           # Entry point
```

## 🛆 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/accredian-frontend-task.git
cd accredian-frontend-task
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a **.env** file and add:

```sh
VITE_BACKEND_URL=https://accredian-backend-task-b7sp.onrender.com
```

### 4️⃣ Start the Development Server

```sh
npm run dev
```

## 🔗 API Integration

The frontend communicates with the backend API at:

🔗 **Backend URL:** [https://accredian-backend-task.onrender.com](https://accredian-backend-task.onrender.com)

### **Refer a Person API Call (Example)**

```js
import axios from "axios";

const referPerson = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/refer-now`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error referring person:", error);
  }
};
```

## 🌍 Deployment

The frontend is deployed on Vercel:

🔗 **Live URL:** [https://accredian-frontend-task-one-pink.vercel.app](https://accredian-frontend-task-one-pink.vercel.app)

