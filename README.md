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
