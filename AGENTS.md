# Project Requirements: Dilemma Typing Practice Application

This document outlines the requirements for the Dilemma Typing Practice Application, as gathered from the development conversation.

## 1. Core Objective
Create a web-based typing practice application specifically designed for Dilemma-style split keyboards.

## 2. Functional Requirements

### 2.1. Keyboard Configuration & Parsing
- The application must parse a QMK `info.json` file to extract the keyboard's physical layout information.
- The primary focus for the layout is the "keymap" structure within the `layouts` object, as seen in the example `docs/examples/vial.json`.
- The parser must correctly interpret positional adjustments (x, y), dimensions (w, h), and rotations (r, rx, ry) for each key.

### 2.2. Keyboard Visualization
- The application must render an accurate visual representation of the keyboard based on the parsed `info.json` file.
- The visualization should correctly place all keys, including those with complex positional and rotational properties.
- The application must provide real-time visual feedback by highlighting a key on the virtual keyboard when the corresponding physical key is pressed.

### 2.3. Typing Practice
- The application must include a practice area where a sample text is displayed.
- It must capture user keystrokes from the physical keyboard.
- It must provide real-time feedback on typing accuracy (e.g., highlighting correct/incorrect characters).

## 3. Technical Requirements

### 3.1. Technology Stack
- **Frontend Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript

### 3.2. Development Environment
- The entire application must be containerized using Docker.
- A `docker-compose.yml` file must be provided to manage development and production environments.
- All development, including project scaffolding and running the dev server, must be performed inside the container.

### 3.3. Deployment
- The application must be configured for automated deployment to GitHub Pages.
- A GitHub Actions workflow should be set up to build and deploy the application on every push to the `main` branch.

## 4. Development Process
- Read the documentation in the .docs/ directory.
- After each major change, the agent should stop, start the server, and ask the user to verify the result.
- At the end of the development, run `docker compose run --rm dev npm run build` to ensure there are no build errors.

## 5. Documentation
- The development process must be documented. Each major step (e.g., Dockerization, UI Layout, Parsing) should have its own markdown file in the `docs/progress/` directory.
- A detailed analysis of the relationship between the `info.json` file's `layouts.keymap` structure and the visual keyboard layout must be documented.
