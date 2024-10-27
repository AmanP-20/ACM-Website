# ACM Website

## Introduction
The ACM Website project is a simple, static website that serves as an online presence for an ACM (Association for Computing Machinery) chapter or a similar organization. It features multiple pages styled with CSS, animated text effects, and structured HTML content to showcase the organization's information. The site is designed with a clean, modern aesthetic and uses a custom Google Font, "Josefin Sans," for a cohesive look.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributors](#contributors)
- [License](#license)

## Features
- **Responsive Design**: Uses CSS styling to adapt to different screen sizes.
- **Animated Text Effects**: A JavaScript function animates text in a typing effect on the main page.
- **Custom Fonts and Icons**: Includes Google Fonts and Font Awesome icons for visual appeal.
- **Image Assets**: Backgrounds and other images for a branded look.

## Installation
1. **Download the Project**: Clone the repository or download the ZIP file.
   ```bash
   git clone https://github.com/yourusername/ACM-Website.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd ACM-Website
   ```
3. **Open the Main Page**: Simply open `main.html` in any modern web browser.

## Usage
Once the project files are in place, open `main.html` in your web browser to view the website. The JavaScript animations and CSS styling should load automatically, and no server setup is required, as this is a static website.

## File Structure
```
ACM-Website/
├── main.html               # Main HTML file
├── login.html              # Login page HTML file
├── team.html               # Team page HTML file
├── style.css               # Main CSS stylesheet
├── login.css               # Stylesheet for login page
├── team.css                # Stylesheet for team page
├── main.js                 # JavaScript file for animations
└── IMAGES/                 # Folder containing image assets
    ├── BG_ACM.jpg
    └── BG_ACM-Photoroom.png
```

## Dependencies
This project requires no additional installations. However, it relies on:
- **Google Fonts**: "Josefin Sans" is imported in `main.html`.
- **Font Awesome**: For icons used throughout the pages.

## Configuration
To modify text animations, edit the `speed` variable or other JavaScript logic in `main.js`. The CSS files allow customization of layouts, colors, and images. Replace images in the `IMAGES` folder to change backgrounds and visual elements.
