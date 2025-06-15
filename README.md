# 💼 Resume Analyzer & Blockchain Verifier

A powerful web-based tool built with *React, **AI, and **Blockchain* that extracts skills from resumes and verifies job-role matches securely using smart contracts on the *Polygon Amoy testnet*.

---

## 🚀 Features

- 📄 Upload *single or multiple PDF resumes*
- 🧠 AI-based *skill extraction*
- 🧩 Smart matching with predefined *job roles*
- ✅ *Blockchain verification* of resume-job match
- 🔐 MetaMask wallet connection
- 🌗 Light/Dark mode toggle

---
## 🛠️ Tech Stack

| Tech             | Purpose                     
|------------------|------------------------------|
| React.js         | Frontend                     |
| Tailwind CSS     | Styling                      |
| Axios            | API Calls                    |
| ethers.js        | Blockchain interaction       |
| Express.js       | Backend (PDF parser & AI)    |
| pdf-parse        | Extract text from resumes    |
| MetaMask         | Wallet connection            |
| Solidity         | Smart contract (Polygon)     |

---------------------------------------------------

## 🧠 How It Works

1. User uploads one or more PDF resumes.
2. Backend parses text from PDFs using pdf-parse.
3. Skills are extracted using a custom AI-powered matching algorithm.
4. Job role matching is performed using predefined jobRoles.json.
5. Verified results are stored on the blockchain using verifyResume() function.
6. Matched roles are displayed with verification status fetched from smart contract.

---

## 💻 Local Development Setup

### 🔃 Clone the repo

```bash
git clone https://github.com/AyushAnchal-Dev/resume-analyzer-frontend.git

Install Dependencies:
cd client
npm install

cd server
npm install

start Frontend  :
cd client
npm start

start Backend :
cd server
node index.js

---

🔐 Smart Contract Info

✅ Deployed on: Polygon Amoy Testnet

✅ Contract Address: 0x0aF2C6d6F3C41ef892A0b051F2D6e263bA2A6f1B

✅ Verified using MetaMask

------------------------

⚠️ Prerequisites

MetaMask installed and connected to Amoy Testnet

Test MATIC tokens for transaction fees (available via Amoy faucet)

Node.js & npm installed

"# resume-analyzer-frontend" 
