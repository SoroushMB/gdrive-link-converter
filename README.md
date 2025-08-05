# Google Drive Direct Link Converter

[![Chrome Web Store](https://img.shields.io/badge/Chrome_Web_Store-Available_Now-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID_HERE)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A lightweight and beautifully animated Chrome extension to instantly convert Google Drive shareable links into direct, embeddable URLs.

## About The Project

Google Drive is an excellent tool for storing files, but its standard sharing links (`.../view?usp=sharing`) are designed to open a preview page, not for direct embedding in websites, code, or other applications. This extension solves that problem with a single click.

It provides a simple, intuitive interface right in your browser to instantly transform those preview links into a direct-access URL (`.../uc?export=view&id=...`) perfect for `<img>` tags, CSS backgrounds, and other direct linking needs.

### Features

* **⚡ One-Click Conversion:** Instantly transforms links without needing to manually edit URLs.
* **🌙 Sleek Dark Mode:** A modern, dark theme that's easy on the eyes, built with the DM Sans font.
* **✨ Smooth Animations:** Subtle, animated transitions for a polished user experience.
* **📋 Copy to Clipboard:** A convenient button to immediately copy the newly generated link.
* **🛡️ Privacy-Focused:** No data is collected or stored. All conversions happen locally on your computer.
* **🚀 Lightweight & Fast:** Built with plain HTML, CSS, and JavaScript for maximum performance.

## Installation

### 1. For Developers (Manual Installation)

If you want to try the latest development version or modify the code:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/SoroushMB/gdrive-link-converter.git
    ```
2.  Open Google Chrome and navigate to `chrome://extensions`.
3.  Enable **"Developer mode"** using the toggle switch in the top-right corner.
4.  Click the **"Load unpacked"** button.
5.  Select the directory where you cloned the repository. The extension will now be loaded.

## How to Use

1.  Copy a standard shareable link for a file from Google Drive (ensure its sharing setting is "Anyone with the link").
2.  Click the extension's icon in your Chrome toolbar.
3.  Paste the link into the input box.
4.  Click the **"Convert"** button.
5.  The direct link will appear below. Click **"Copy"** to copy it to your clipboard.

## Technologies Used

* **HTML5**
* **CSS3**
* **Plain JavaScript (ES6+)**
* **Manifest V3** for the Chrome Extension API

## How to Contribute

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
