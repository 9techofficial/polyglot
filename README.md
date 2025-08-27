# Polyglot Microservices Architecture

This repository demonstrates a **polyglot microservices** approach, leveraging multiple programming languages and frameworks to build a distributed application. Each service is independently deployable, communicating via APIs, and running on dedicated ports.

---

## 🛠 Tech Stack

### **Frontend**

* **Framework:** [Next.js](https://nextjs.org/)
* **Language:** TypeScript
* **Port:** `3000`
* **Purpose:** User-facing web interface for interacting with the application.

### **Backend**

#### 1. **APIs Layer**

* **Framework:** [Fastify](https://fastify.dev/) with Node.js & TypeScript
* **Port:** `4000`
* **Purpose:** Acts as the API gateway and main entry point for client requests. Routes requests to appropriate microservices.

#### 2. **Microservices**

The backend is composed of independently running services, each built with the language and framework best suited for its functionality.

| Service Name    | Language & Framework   | Port | Description                                                                   |
| --------------- | ---------------------- | ---- | ----------------------------------------------------------------------------- |
| Node.js Service | Node.js + Fastify (TS) | 4001 | Handles Node-specific processing tasks.                                       |
| PHP Service     | Laravel                | 4002 | Implements business logic suited for PHP/Laravel ecosystem.                   |
| Python Service  | FastAPI                | 4003 | Designed for high-performance async processing and Python-specific workloads. |

---

## 📂 Project Structure

```
/
├── frontend/          # Next.js application (port 3000)
├── backend/
│   ├── apis/          # Node.js Fastify API gateway (port 4000)
│   ├── services/
│   │   ├── node/      # Node.js Fastify microservice (port 4001)
│   │   ├── php/       # Laravel microservice (port 4002)
│   │   └── python/    # FastAPI microservice (port 4003)
└── README.md
```

---

## 🔌 Running the Application

### **Prerequisites**

* Node.js (>= 18.x)
* PHP (>= 8.x)
* Python (>= 3.10)
* Composer (for Laravel)
* pip (for Python dependencies)

### **1. Start Frontend**

```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

### **2. Start API Gateway**

```bash
cd backend/apis
npm install
npm run dev
# Runs on http://localhost:4000
```

### **3. Start Node.js Microservice**

```bash
cd backend/services/node
npm install
npm run dev
# Runs on http://localhost:4001
```

### **4. Start PHP/Laravel Microservice**

```bash
cd backend/services/php
composer install
php artisan serve --port=4002
# Runs on http://localhost:4002
```

### **5. Start Python/FastAPI Microservice**

```bash
cd backend/services/python
pip install -r requirements.txt
uvicorn src.main:app --host 0.0.0.0 --port 4003 --reload
# Runs on http://localhost:4003
```

---

## 🌐 Communication Flow

1. **Client (Frontend)** sends requests to **API Gateway** (`4000`).
2. **API Gateway** routes requests to the relevant microservice.
3. **Microservices** process requests and return responses to the API Gateway.
4. **API Gateway** sends the aggregated response back to the client.

---

## 🚀 Deployment

Each service can be containerized and deployed independently using **Docker** or **Kubernetes**, allowing:

* Independent scaling
* Technology flexibility
* Failure isolation