# Doctor App UI (Web + Mobile)

This repository contains the **UI-only implementation** of the Doctor App for both **Web** and **Mobile**, developed as per the shared Figma designs.

---

## 📱 Platforms Covered

### Web
- Framework: **Next.js (App Router)**
- Styling: **CSS / Tailwind (as per project setup)**

### Mobile
- Framework: **React Native**
- Tooling: **Expo**
- Preview: **Expo Go**

---

## 🎯 Scope of Work

- UI implementation only
- No backend integration
- No API / authentication logic
- Focused purely on layout, styling, and screen structure

---

## 🧭 Screens Implemented (Total: 10)

### Common Flow Screens
- Login
- Forgot Password
- OTP Confirmation
- Set Password
- Password Success
- Location Access
- Doctor Registration

### Post-Login (Dashboard – Temporary Navigation)
- Dashboard
- Appointments
- Profile Management

---

## 🔗 Temporary Navigation Note

Since this phase is **UI-only**, temporary navigation links and handlers have been added **only for preview and demonstration purposes**.

### Why temporary links were used:
- To allow smooth screen-to-screen navigation
- To help reviewers easily verify all UI screens
- To simulate user flow without backend logic

### Where they are used:
- Login → Dashboard
- Dashboard → Profile
- Dashboard → Appointments
- Forgot Password → OTP → Set Password flow

⚠️ These links are **not final logic** and will be replaced once backend integration starts.

---

## ▶️ How to Run the Project

### Web (Next.js)
```bash
cd doctor-web
npm install
npm run dev
