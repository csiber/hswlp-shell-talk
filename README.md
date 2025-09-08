# HSWLP:Talk – Cloudflare-Powered Video Conferencing Platform

**HSWLP:Talk** is a video conferencing application built on top of the  
**HSWLP ecosystem**, combining a **Next.js frontend** with a **self-hosted Jitsi backend**.  

It provides a **credit-based SaaS model** for secure, flexible, and customizable online meetings.  
The system is designed to be reliable yet lightweight, making it suitable for personal, community,  
or business use cases without the complexity of enterprise-scale tools.

---

## ✨ Key Features (Planned & Implemented)

- 🎥 **Video & Audio Conferencing** – powered by Jitsi  
- 🔐 **Authentication** – login required before starting or joining calls  
- 💳 **Credit System** – usage-based credits or subscription plans (via Stripe)  
- 🗂️ **Call Logging** – all calls tracked in D1 database  
- ☁️ **Cloudflare Frontend** – built with Next.js and deployed on Cloudflare Pages  
- 🏷️ **White-Label Option** – companies can brand the platform for internal use  

---

## 🛠️ Architecture

- **Frontend:** Next.js (React, Tailwind)  
- **Backend:** Self-hosted Jitsi server (Docker on Unraid)  
- **Database:** Cloudflare D1 for call logs & credits  
- **Storage:** Cloudflare R2 (optional for recordings)  
- **Payments:** Stripe integration  
- **Hosting:** Cloudflare Pages + Cloudflare Tunnel for backend access  

---

## 📅 Current Status

🚧 **In development** – core conferencing and credit system under active work.  
The platform is functional but still in prototyping phase.  

---

## 📌 Roadmap

- [ ] User authentication & profiles  
- [ ] Credit-based call management  
- [ ] Call logging & statistics dashboard  
- [ ] Optional recording to R2  
- [ ] White-label customization module  
- [ ] Stripe-based subscription plans  

---

## 🌍 Part of the HSWLP Ecosystem

HSWLP:Talk is one of the applications in the  
**HSWLP (Hybrid Service Workflow Launch Platform)** initiative.  

It connects with other projects such as:  
- **Otokai** – music streaming & jukebox system  
- **Blogocska** – blogging demo shell  
- **HSWLP:NAS** – local Docker stack manager  
- **HSWLP:Cloud** – static site deployments  

Together, these projects showcase how **Cloudflare-native technology**  
can power modern SaaS platforms and community-driven applications.  

---

## 📜 License

Released under the **MIT License**.  

---

**HSWLP:Talk** brings together **secure video calls, flexible billing,  
and Cloudflare’s global infrastructure** into one modern communication tool.
