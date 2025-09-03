# Progress Report: Full Parsing and Visualization

## 1. Overview

This document outlines the development progress for the full parsing of keyboard layout files and the subsequent visualization of the keyboard, including keycodes and human-readable names.

## 2. Key Achievements

### 2.1. Dual-File Parsing Strategy

-   **`vial.json` Parsing**: Implemented logic to parse the `vial.json` file to extract the physical layout of the keyboard, including positional data (`x`, `y`), dimensions (`w`, `h`), and rotation (`r`, `rx`, `ry`).
-   **`.vil` File Parsing**: Implemented logic to parse the `.vil` file to extract the keycode assignments for each of the four layers.

### 2.2. Unified Data Structure

-   A new function, `getKeyboard`, was created to merge the data from both the `vial.json` and `.vil` files into a single, unified data structure. This structure maps the keycodes from each layer to their corresponding physical key positions.

### 2.3. Enhanced Keyboard Visualization

-   The `Keyboard` component was updated to consume the new unified data structure.
-   A layer switcher was added to allow users to toggle between the four layers, with the displayed keycodes updating dynamically.
-   The size of the keys was increased to prevent text overflow and improve readability.

### 2.4. Human-Readable Keycodes

-   A keycode mapping was created in `src/lib/keycodes.ts` to convert the raw QMK keycode constants into human-readable names (e.g., `KC_BSPACE` becomes "Backspace").
-   The `Key` component was updated to use this mapping, making the keyboard visualization more user-friendly.

## 3. Technical Implementation Details

-   **Parsing Logic**: The core parsing functions are located in `src/lib/parser.ts`.
-   **UI Components**: The `Keyboard` and `Key` components in `src/components/` handle the rendering of the keyboard.
-   **State Management**: The main `App.tsx` component manages the state for the loaded keyboard data and passes it down to the visualization components.

## 4. Outcome

The application is now capable of parsing both the physical layout and keycode data from the provided configuration files. The keyboard is rendered accurately, with larger keys and human-readable key names, and the user can switch between layers to see the different key assignments.
