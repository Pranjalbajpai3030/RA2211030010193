# 🚀 Social Media Analytics & Average Calculator Microservice  

This project consists of a **React-based Social Media Analytics Dashboard** and a **Node.js microservice for an Average Calculator**. It provides real-time insights into social media data while efficiently managing API costs and performance.  

---

## 🏆 **Features**  

### 📊 Social Media Analytics Dashboard (React)  
- 🔥 **Top Users:** Displays the top 5 users with the highest post count.  
- 🚀 **Trending Posts:** Shows the most commented posts in real-time.  
- 📡 **Live Feed:** Continuously updates the latest posts dynamically.  
- 🌍 **Responsive UI:** Styled using **Tailwind CSS** for a sleek and modern design.  
- ⚡ **Optimized API Calls:** Caches responses and minimizes unnecessary API requests.  

### 🧮 Average Calculator Microservice (Node.js)  
- ✅ Accepts requests for **Prime, Fibonacci, Even, and Random numbers**.  
- 📏 Maintains a **sliding window of size 10**, removing the oldest entry when full.  
- ⚡ Ignores API responses **exceeding 500ms** to maintain performance.  
- 📉 Calculates the **real-time average** of stored numbers.  

---

## 🛠️ **Tech Stack**  

### **Frontend (Social Media Analytics Dashboard)**  
- **⚛️ React** (with TypeScript)  
- **📦 Axios** (for API calls)  
- **🎨 Tailwind CSS** (for styling)  
- **💡 React Query** (for caching & efficient data fetching)  
- **🌍 React Router** (for navigation)  

### **Backend (Average Calculator Microservice)**  
- **⚡ Node.js + Express.js**  
- **🌍 REST API Implementation**  
- **📊 In-Memory Data Storage**  

---


🔗 API Endpoints
📊 Social Media API Endpoints
Method	Endpoint	Description
GET	/users	Get all users
GET	/users/:id/posts	Get posts of a user
GET	/posts/:id/comments	Get comments on a post
🧮 Average Calculator API
Method	Endpoint	Description
GET	/numbers/p	Fetch Prime numbers
GET	/numbers/f	Fetch Fibonacci numbers
GET	/numbers/e	Fetch Even numbers
GET	/numbers/r	Fetch Random numbers
⚠️ Important Notes
Make sure to register your company before making API calls.
Use your clientID & clientSecret for authentication.
Store your token in localStorage to persist authentication.
Be mindful of API call costs when optimizing requests.
![Screenshot 2025-03-20 192425](https://github.com/user-attachments/assets/13d91c7b-2401-44a4-bfee-9bd471b7810f)

![Screenshot 2025-03-20 192442](https://github.com/user-attachments/assets/404b2200-c1a5-4975-80e2-005ddae29fa3)

![Screens![Screenshot 2025-03-20 192419](https://github.com/user-attachments/assets/30e0f3af-1b27-4501-b6e3-f2b9933e9951)
hot 2025-03-20 192448](https://github.com/user-attachments/assets/7d32edb7-e087-425a-805e-592d99d1909a)
