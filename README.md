# Dilemma Typing Practice

This is a web-based typing practice application specifically designed for Dilemma-style split keyboards. It allows users to load their own QMK `info.json` and Vial `.vil` configuration files to practice with their custom keyboard layouts.

## Features

-   **Custom Keyboard Layouts**: Load your own `info.json` and `.vil` files to practice with your exact keyboard layout.
-   **Accurate Visualization**: Renders a visual representation of your keyboard, including layers and custom keycodes.
-   **Real-time Feedback**: Provides instant feedback on your typing accuracy.
-   **Next Key Highlighting**: Highlights the next key you need to press, helping you learn your layout faster.

## Getting Started

### Prerequisites

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/)

### Running Locally

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/anykbtype.git
    cd anykbtype
    ```

2.  **Start the development server:**

    ```bash
    docker compose up dev
    ```

3.  Open your browser and navigate to `http://localhost:5173`.

## Deployment

This application is automatically deployed to GitHub Pages on every push to the `main` branch.

**Live Application**: [https://your-username.github.io/anykbtype/](https://your-username.github.io/anykbtype/)
