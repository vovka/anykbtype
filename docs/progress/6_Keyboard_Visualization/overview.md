# Step 6: Keyboard Visualization

## Purpose
To display a visual representation of the user's keyboard based on the loaded configuration files.

## Process
1.  **Created `Keyboard.tsx`**: A new React component was created at `src/components/Keyboard.tsx`.
2.  **Component Logic**:
    -   The component receives the parsed `infoJson` and `vilFile` data as props.
    -   It extracts the first layout from the `info.json` data.
    -   It renders an SVG element and maps over the keys in the layout.
    -   For each key, it renders a `rect` for the keycap and a `text` element for the label.
    -   The key's position and size are determined by the `x`, `y`, `w`, and `h` properties from the `info.json` layout.
    -   The key's label is determined by looking up the corresponding keycode in the `.vil` file's keymap.
3.  **Integrated into `App.tsx`**:
    -   The `Keyboard` component was imported and added to the `App.tsx` component.
    -   Conditional rendering was added to show the `Keyboard` component only when both the `info.json` and `.vil` files have been loaded. Otherwise, it displays a prompt to select the files.

## Result
The application can now render a basic visual representation of the user's keyboard. When the user selects their configuration files, the keyboard layout is displayed in the UI.
