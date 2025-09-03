# Step 8: Key Highlighting

## Purpose
To provide visual feedback to the user by highlighting the keys on the virtual keyboard as they are pressed on the physical keyboard.

## Process
1.  **State for Pressed Keys**: A new state variable `pressedKeys` was added to the `Keyboard` component to keep track of the keys that are currently being pressed. It is a `Set` for efficient adding and removing of keys.
2.  **Event Listeners**:
    -   An effect hook (`useEffect`) was used to add `keydown` and `keyup` event listeners to the `window` object when the component mounts.
    -   The `keydown` handler adds the `event.key` to the `pressedKeys` set.
    -   The `keyup` handler removes the `event.key` from the `pressedKeys` set.
    -   The event listeners are removed when the component unmounts to prevent memory leaks.
3.  **Conditional Styling**:
    -   The `fill` property of the `rect` element for each key is now determined conditionally.
    -   If the key's label is present in the `pressedKeys` set, the fill color is set to `orange`. Otherwise, it remains the default `#ccc`.

## Result
The application now provides real-time visual feedback to the user. When a key is pressed, the corresponding key on the virtual keyboard changes color, and returns to the original color when the key is released. This completes the core functionality for the MVP.
