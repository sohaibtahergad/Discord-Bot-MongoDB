I see exactly what you mean, and I apologize for missing that requirement. I went ahead and removed all emojis from the previous summaries to make sure they are strictly professional and fit your preferences perfectly.

Here are the completely clean versions for your files:

---

# Simple Hospital System

A lightweight, desktop-based Hospital Management System built in Java using **Java Swing** for the graphical user interface and **SQLite** for relational database storage.

This project was developed as a 1st-year university assignment to practice core Object-Oriented Programming (OOP) principles, Swing layout management, and basic database connectivity (JDBC).

---

## Features

* **Multi-Tab Dashboard:** Easily navigate through modular views using a structured tabbed layout:
* **Patients:** Add, update, view, and track patient demographic profiles.
* **Doctors:** Manage medical staff records and specialized departments.
* **Appointments:** Book, organize, and view structured appointment logs.
* **Prescriptions & Medication:** Document specific patient prescriptions and store relevant medication details.


* **Interactive Data Grid:** Each tab integrates a dynamic data table to cleanly render records stored in the database.
* **Management Controls:** Uses dedicated input forms to submit new data, alongside built-in **"Remove"** and **"Show All"** functions to instantly control and refresh live data feeds.
* **Persistent Local Storage:** Integrated with SQLite to ensure all hospital inputs remain saved locally across separate runs without needing a heavy database setup.

---

## Core Technologies & Architecture

* **Language:** Java
* **UI Framework:** Java Swing (`JFrame`, `JTabbedPane`, `JTable`, `JPanel`)
* **Database Engine:** SQLite (Serverless file-based architecture)
* **Connectivity:** JDBC (Java Database Connectivity) API using the SQLite driver

---

## Prerequisites & Installation

To run this desktop application locally, you will need the Java Development Kit (JDK) installed on your system along with the SQLite JDBC library driver.

1. **Clone the repository:**
```bash
git clone https://github.com/sohaibtahergad/Simple-Hospital-System-Java.git
cd Simple-Hospital-System-Java

```


2. **Add the SQLite Library:**
* Download the SQLite JDBC driver `.jar` file (e.g., from Maven Central).
* Include the driver in your project's build path or classpath.


3. **Compile and Run (via Terminal):**
```bash
javac -cp ".;path/to/sqlite-jdbc.jar" src/*.java
java -cp ".;path/to/sqlite-jdbc.jar;src" Main

```


*(Note: Use `:` instead of `;` as the path separator if you are running on macOS or Linux).*

---

## Project Structure

```text
├── src/
│   ├── Database.class          # Handles JDBC connections and SQL query executions
│   ├── HospitalManagement.java # Holds the main graphical layout and UI logic
│   └── Main.java               # Application entry point
└── README.md                   # Documentation

```

---

# Discord Game and Utilities Bot

A multi-purpose Discord bot built in JavaScript using the **Discord.js (v13)** framework, **Node.js**, and **MongoDB**. The bot provides server moderation controls, role management pipelines, a customized multi-session Russian Roulette game engine, and an interactive tabletop dice roller.

---

## Features

* **Multi-Session Russian Roulette:** Implements isolated game instances tracked by dynamic server counters. Features active turn-state mechanics, barrel spinning limits, and persistence handling per player.
* **Tabletop Dice Roller Engine:** Parses custom roll expressions (e.g., `!roll 4d20 +5`) with full arithmetic adjustments, threshold boundary alerts, and visual feedback for critical hits or misses.
* **Dynamic D&D Role Assignments:** Lets server operators configure dynamic, non-overlapping class roles, mapping specific team structures directly into active Discord role arrays.
* **Administrative Moderation Tools:** Restricts administrative configurations (like changing global bot prefixes, assigning the server game channel, or executing kill/revive role hooks) to members possessing explicit `BAN_MEMBERS` permissions.
* **Persistent Settings Storage:** Leverages Mongoose to model and cache per-guild configurations, maintaining structural state continuity across restarts.

---

## Core Technologies

* **Runtime Environment:** Node.js
* **API Wrapper:** Discord.js (v13)
* **Database Management System:** MongoDB via Mongoose Object Modeling
* **Configuration Secure Storage:** Dotenv

---

## Prerequisites & Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME

```


2. **Install project dependencies:**
```bash
npm install discord.js mongoose dotenv

```


3. **Configure Environment Variables:**
Create a `.env` file in the root directory and append your application keys:
```env
TOKEN=YOUR_DISCORD_BOT_TOKEN
STRING=YOUR_MONGODB_CONNECTION_URI

```


4. **Verify Database Directory Structure:**
Ensure your local workspace includes a models folder defining your schema structures:
```text
└── models/
    └── vars.js

```


5. **Launch the bot application:**
```bash
node main.js

```



---

## Project Structure

```text
├── models/
│   └── vars.js      # Mongoose Schema blueprint tracking server prefixes, channels, and roles
├── .env             # Application secrets and storage connection strings (Hidden)
├── main.js          # Main entry point handling gateway connections and message command routines
└── README.md        # Documentation

```
