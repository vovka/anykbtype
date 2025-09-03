# Step 5: Configuration Parser

## Purpose
To read and parse the user-provided `.vil` and `info.json` files into structured data that the application can use.

## Process
1.  **Created Type Definitions**: A new file `src/types/keyboard.ts` was created to define the TypeScript interfaces for the `info.json` and `.vil` file structures. This ensures type safety and provides clear data contracts for the rest of the application.
2.  **Created Parser Module**: A new module `src/lib/parser.ts` was created to encapsulate the file parsing logic. It contains two functions:
    -   `parseInfoJson`: Reads an `info.json` file and parses it into an `InfoJson` object.
    -   `parseVilFile`: Reads a `.vil` file and parses it into a `VilFile` object.
3.  **Integrated into `App.tsx`**:
    -   The `App` component's state was updated to store the parsed `infoJson` and `vilFile` data.
    -   The `handleFilesSelected` function was updated to be asynchronous. It now calls the parser functions and updates the component's state with the parsed data.

## Result
The application can now process the user's keyboard configuration files and hold the resulting data in its state. This is a critical step that enables the dynamic rendering of the keyboard visualization in the next phase.
