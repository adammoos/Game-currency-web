# 💰 Game Currency Web - First Web Project

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://www.javascript.com/)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)](https://www.php.net/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Archive-inactive?style=flat-square)](/))

> 💎 A **full-stack web application** for managing game currency exchanges and player transactions. Built as a first web project, featuring user authentication, currency exchange system, and admin dashboard.

### 🌟 Key Features
- 👤 **User Authentication** - Secure login and registration
- 💳 **Currency Exchange** - Convert between game currencies
- 📊 **Transaction History** - Track all exchanges
- 🔐 **Security** - Password recovery and account management
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Clean, user-friendly interface
- ⚙️ **Admin Panel** - Manage users and rates

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features Guide](#features-guide)
- [Database](#database)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## 🎯 Overview

This is a beginner's full-stack web project demonstrating HTML, CSS, JavaScript, and PHP fundamentals. It provides a practical example of building a currency exchange platform with user authentication and transaction management.

### Learning Outcomes
- ✅ Frontend basics (HTML, CSS, JS)
- ✅ Backend basics (PHP)
- ✅ Database design (SQL)
- ✅ User authentication
- ✅ Form handling
- ✅ Session management

---

## ✨ Features

### 1. User Authentication
- User registration
- Secure login
- Password recovery
- Session management

### 2. Currency Exchange
- Real-time exchange rates
- Multiple currency support
- Transaction history
- Balance tracking

### 3. User Dashboard
- Account information
- Transaction history
- Balance overview
- Settings management

### 4. Admin Panel
- User management
- Exchange rate management
- Transaction monitoring
- System settings

---

## 💻 Installation

### Prerequisites
- PHP 7.0+
- MySQL/MariaDB
- Web server (Apache, Nginx)
- Modern web browser

### Step 1: Download Files
```bash
git clone https://github.com/adammoos/Game-currency-web.git
cd Game-currency-web
```

### Step 2: Database Setup
```bash
# Import database
mysql -u root -p < database.sql

# Or manually create database:
CREATE DATABASE game_currency;
USE game_currency;

# Create tables
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    balance DECIMAL(10,2),
    created_at TIMESTAMP
);

CREATE TABLE transactions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    currency_from VARCHAR(10),
    currency_to VARCHAR(10),
    amount DECIMAL(10,2),
    rate DECIMAL(8,4),
    created_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Step 3: Configure Database
```php
// php/config.php
<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'game_currency');

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if (!$conn) die("Connection failed: " . mysqli_connect_error());
?>
```

### Step 4: Run Application
```bash
# Using PHP built-in server
php -S localhost:8000

# Or use Apache/Nginx configuration
# Point web root to project directory
```

---

## 🚀 Getting Started

### Access the Application
- **User Site:** `http://localhost:8000/index.php`
- **Login:** `http://localhost:8000/log\ in/login.html`
- **Register:** `http://localhost:8000/sign\ in/signup.html`
- **Admin:** `http://localhost:8000/admin/`
- **Currency:** `http://localhost:8000/Currecies.html`

### Default Admin Credentials
```
Username: admin
Password: admin123
```

### Demo Account
```
Username: testuser
Password: test123
```

---

## 📁 Project Structure

```
Game-currency-web/
├── index.html                          # Home page
├── Currecies.html                      # Currency page
├── about.html                          # About page
├── contact.html                        # Contact page
├── contact_done.html                   # Contact confirmation
├── css/                                # Stylesheets
│   ├── styles.css
│   ├── responsive.css
│   └── animations.scss
├── js/                                 # JavaScript files
│   ├── main.js
│   ├── exchange.js
│   └── validation.js
├── php/                                # Backend logic
│   ├── config.php
│   ├── login.php
│   ├── register.php
│   └── exchange.php
├── Connected part/                     # Backend integration
│   └── (Connection files)
├── log in/                             # Login page
│   └── login.html
├── sign in/                            # Registration page
│   └── signup.html
├── Forget password/                    # Password recovery
│   └── forgot.html
├── Base sql/                           # Database files
│   └── game_currency.sql
├── image/                              # Image assets
└── images/                             # Additional images
```

---

## 📖 Features Guide

### 1. User Registration
```html
<!-- sign in/signup.html -->
<form method="POST" action="../php/register.php">
    <input type="text" name="username" placeholder="Username" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Password" required>
    <input type="password" name="confirm_password" placeholder="Confirm Password" required>
    <button type="submit">Sign Up</button>
</form>
```

### 2. Currency Exchange
```html
<!-- Currecies.html -->
<select id="from_currency">
    <option value="USD">US Dollar</option>
    <option value="EUR">Euro</option>
    <option value="GBP">British Pound</option>
</select>

<input type="number" id="amount" placeholder="Amount">

<select id="to_currency">
    <option value="EUR">Euro</option>
    <option value="GBP">British Pound</option>
    <option value="JPY">Japanese Yen</option>
</select>

<button onclick="exchangeCurrency()">Exchange</button>
```

### 3. Transaction Processing
```php
// php/exchange.php
<?php
session_start();
include 'config.php';

$user_id = $_SESSION['user_id'];
$from_currency = $_POST['from_currency'];
$to_currency = $_POST['to_currency'];
$amount = $_POST['amount'];

// Get exchange rate
$rate = getExchangeRate($from_currency, $to_currency);
$converted = $amount * $rate;

// Save transaction
$query = "INSERT INTO transactions (user_id, currency_from, currency_to, amount, rate) 
          VALUES ('$user_id', '$from_currency', '$to_currency', '$amount', '$rate')";
mysqli_query($conn, $query);

// Update balance
$update_query = "UPDATE users SET balance = balance + $converted WHERE id = '$user_id'";
mysqli_query($conn, $update_query);

echo "Exchange successful!";
?>
```

---

## 🎬 Demo & Output

### Homepage
```
┌─────────────────────────────────────┐
│     GAME CURRENCY EXCHANGE          │
├─────────────────────────────────────┤
│                                     │
│  Quick Exchange                     │
│  ┌──────────────┐   ┌──────────┐   │
│  │ USD ▼        │ → │ EUR ▼    │   │
│  │ 100          │   │ 85.50    │   │
│  └──────────────┘   └──────────┘   │
│                                     │
│        [EXCHANGE NOW]               │
│                                     │
│  Current Rates:                     │
│  • USD → EUR: 0.85                  │
│  • USD → GBP: 0.73                  │
│  • EUR → GBP: 0.86                  │
│                                     │
└─────────────────────────────────────┘
```

### User Dashboard
```
Welcome, testuser!

Your Account
├─ Username: testuser
├─ Email: test@example.com
├─ Total Balance: $5,250.00
└─ Member Since: January 15, 2024

Recent Transactions:
1. USD → EUR | $100 → €85.50 | Today at 2:30 PM
2. EUR → GBP | €200 → £172.00 | Yesterday at 10:15 AM
3. USD → JPY | $50 → ¥7,450 | 2 days ago

Transaction History [View All]
```

---

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    balance DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Transactions Table
```sql
CREATE TABLE transactions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    currency_from VARCHAR(10) NOT NULL,
    currency_to VARCHAR(10) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    rate DECIMAL(8,4) NOT NULL,
    result DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Exchange Rates Table
```sql
CREATE TABLE exchange_rates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    currency_from VARCHAR(10) NOT NULL,
    currency_to VARCHAR(10) NOT NULL,
    rate DECIMAL(8,4) NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## 🐛 Troubleshooting

### Problem: "Connection failed"
```php
// Check database credentials in php/config.php
// Verify MySQL is running
mysql -u root -p

// Create database if not exists
CREATE DATABASE game_currency;
```

### Problem: "Sessions not working"
```php
// Ensure session.save_path is writable
session_start();  // Call at beginning of file
```

### Problem: "Password reset not working"
```bash
# Check mail configuration in php.ini
# Configure SMTP settings if needed
```

---

## 🤝 Contributing

This is a learning project! Contributions welcome for:
- 🐛 Bug fixes
- ✨ Feature enhancements
- 📚 Documentation improvements
- 🎨 Design improvements
- ⚡ Performance optimization

---

## 📚 Learning Resources

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [PHP Documentation](https://www.php.net/docs.php)
- [MySQL Tutorial](https://dev.mysql.com/doc/)

### Next Steps
- Learn frameworks (Laravel, Django)
- Advanced database design
- API development
- Security best practices

---

## 📝 Notes

- ⚠️ This is a learning project - not production-ready
- 🔐 Passwords should be hashed with bcrypt
- 🛡️ Add CSRF protection for forms
- 📝 SQL queries should use prepared statements
- 🔒 Input validation is essential

---

## 📞 Support

**Author:** Mohammed Adam Mejri  
**GitHub:** [adammoos](https://github.com/adammoos)  
**LinkedIn:** [Mohammed Adam Mejri](https://www.linkedin.com/in/mohammed-adam-mejri-259124404/)

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details

---

<div align="center">

### ⭐ If this project helped you learn web development, consider giving it a star!

**Made with ❤️ as a first web project by [Mohammed Adam Mejri](https://github.com/adammoos)**

Note :This is my first website , not Fully finished but i did my best for it

[⬆ Back to Top](#-game-currency-web---first-web-project)

</div>




