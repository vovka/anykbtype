# Step 4: File Loader Component

## Purpose
To create a user interface component that allows users to select their Vial keymap (`.vil`) and QMK layout (`info.json`) files.

## Process
1.  **Created `FileLoader.tsx`**: A new React component was created at `src/components/FileLoader.tsx`.
2.  **Component Logic**:
    -   The component uses `useRef` to get references to two file input elements.
    -   An `onChange` event handler is attached to both inputs. When a file is selected in either input, the handler checks if both files have been selected.
    -   If both files are present, it calls the `onFilesSelected` prop with the two `File` objects.
3.  **Integrated into `App.tsx`**: The `FileLoader` component was imported and added to the `App.tsx` component. A handler function `handleFilesSelected` was created to receive the selected files.
4.  **Styled Component**: A new CSS file `src/components/FileLoader.css` was created to style the component.

## Result
The application now has a functional file loader. Users can select their keyboard configuration files, and the application is ready to receive them for parsing in the next step.
