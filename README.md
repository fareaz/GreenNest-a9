# 🍃 GreenNest – Indoor Plant Care & Store  
### 🌐 **Live Website:** https://green-nest-fc2b6.web.app/  

---

## 🌱 Project Overview  
**GreenNest** is a modern, responsive, and visually calm indoor plant care and store platform.  
Built as a **Single Page Application**, it helps plant lovers explore plant categories, learn care tips, purchase plants, and book expert consultations — all within a smooth, minimal interface.

---

## 🎯 Project Goals  
- Build a nature-inspired SPA with a clean UI  
- Implement **Firebase Authentication** (Email/Password + Google)  
- Display plant listings from dynamic JSON data  
- Add **protected routes** (details page, profile)  
- Support profile editing with real-time updates  
- Create a calm, minimal UI consistent with plant aesthetics  

---

## 🧩 Core Features  

### 🟢 **1. Layout Structure**

#### **Navbar**
- Logo: **GreenNest**  
- Navigation: Home | Plants | My Profile  
- Conditional UI:  
  - Logged in → Avatar + Dropdown (Name, Logout)  
  - Logged out → Login, Register buttons  
- Fully responsive  

#### **Footer**
- About | Contact | Privacy Policy  
- Social icons: Instagram, Facebook, Pinterest  
- Copyright  
- Always visible on all routes  

---

### 🟢 **2. Home Page Sections**

#### 🌿 **Hero Section**
- Smooth animated banner using Swiper.js / Framer Motion  

#### ⭐ **Top Rated Plants**  
- Cards fetched from JSON  
- Image, name, price, rating  
- “View Details” button  

#### 🌞 **Plant Care Tips**  
- Tips for watering, sunlight, fertilizing  

#### 👨‍🌾 **Meet Our Green Experts**  
- Images, names, specialization  

#### 🌱 **Additional Creative Section**  
- Plant of the Week / Eco Decor Ideas  

---

### 🟢 **3. Plant Details Page (Protected Route)**  
Accessible **only when logged in**.  
If not logged in → Redirect to Login → Return back after login.

Details Page Shows:
- Large plant image  
- Full description  
- Price, rating, stock, provider  
- **Book Consultation Form**  
  - Name  
  - Email  
  - “Book Now” → success toast  

---

## 🔐 Authentication (Firebase)

### **Login**
- Email & Password  
- Google Login (Social)  
- Forgot Password (Gmail link reset)  
- Redirect to desired route after login  
- Error messages with toast  

### **Signup**
Fields:
- Name  
- Email  
- Photo URL  
- Password  
- Register button  

Password Rules:
- ≥ 6 characters  
- 1 uppercase  
- 1 lowercase  

Post Signup → Auto login + redirect to Home  
Google signup → Auto redirect  

⚠ Email verification skipped as instructed.

---

## 🙋‍♂️ My Profile Page  
Shows:
- Name  
- Email  
- Photo  

Includes:
- **Update Profile Button**  
- Updates displayName + photoURL using `updateProfile()`  
- Immediate UI refresh  

---

## 🧪 Challenges Solved  
- Real-time profile update using Firebase  
- Working forgot password  
- Password show/hide toggle  
- Private Route with redirect back  
- Smooth SPA without reload  
- Fully responsive layout  

---

## 🛠️ Tech Stack  
- **React + Vite**  
- **React Router**  
- **Firebase Authentication**  
- **TailwindCSS + DaisyUI**  
- **Swiper.js / Framer Motion**  
- **ESLint + Environment Variables**  

---

## 🚀 Running The Project Locally  

```bash
git clone https://github.com/fareaz/GreenNest-a9.git
cd GreenNest
npm install
npm run dev
