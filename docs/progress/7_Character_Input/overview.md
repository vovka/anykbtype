# Step 7: Character Input Handling

## Purpose
To capture user keystrokes and provide real-time feedback in the practice area.

## Process
1.  **Created `PracticeArea.tsx`**: A new React component was created at `src/components/PracticeArea.tsx`.
2.  **Component Logic**:
    -   The component maintains two pieces of state: `text` (the text to be typed) and `typedText` (the text the user has typed so far).
    -   An effect hook (`useEffect`) is used to add a `keydown` event listener to the `window` object when the component mounts.
    -   The event listener handles key presses:
        -   If the `Backspace` key is pressed, the last character is removed from `typedText`.
        -   If any other character key is pressed, the character is appended to `typedText`.
    -   The event listener is removed when the component unmounts to prevent memory leaks.
3.  **Real-time Feedback**:
    -   The component maps over the `text` to be typed and renders each character in a `span`.
    -   The class of each `span` is determined by comparing the character to the corresponding character in `typedText`. This allows for styling correct, incorrect, and pending characters differently.
4.  **Integrated into `App.tsx`**: The `PracticeArea` component was imported and added to the `App.tsx` component.
5.  **Styled Component**: A new CSS file `src/components/PracticeArea.css` was created to style the component, including the different character states.

## Result
The application now has a functional practice area. Users can type, and the application will provide immediate feedback on their accuracy.
