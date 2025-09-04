# Next Key Highlighting

This document outlines the implementation of the "next key to type" highlighting feature.

## State Management

- The `text` and `typedText` states were lifted from the `PracticeArea` component to the `App` component to serve as a single source of truth.
- A `useMemo` hook was added to the `App` component to determine the `nextKey` to be typed, its corresponding `activeLayer`, and the `requiredLayerSwitchKey`.

## Components

### `App`

- The `App` component now manages all the application's state and passes it down to the child components as props.
- It identifies the specific layer switch key required to access the layer of the next character to be typed.

### `Keyboard`

- The `Keyboard` component now receives the `nextKey`, `activeLayer`, and `requiredLayerSwitchKey` props.
- It renders a layer switcher that highlights the active layer.
- It passes the necessary props down to the `Key` component.

### `Key`

- The `Key` component now receives the `isNextKey` and `isLayerSwitchKey` props.
- It uses these props to determine the fill color of the key, highlighting the next key to be typed and the required layer switch key.

## Data Flow

The data flows from the `App` component down to the `Keyboard` and `Key` components. User input from the `PracticeArea` component updates the state in the `App` component, which then triggers a re-render of the child components with the new data.
