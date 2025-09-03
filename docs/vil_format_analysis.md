# Analysis of the `.vil` Keyboard Layout File

## 1. Overview

The `.vil` file is a JSON-formatted configuration file used by the Vial application to store custom keyboard layouts, macros, and other settings. It provides a detailed, layer-by-layer definition of the key mappings for a specific keyboard. This document analyzes the structure of the `(4+4)x3.vil` example file to explain how it defines the keyboard's behavior.

## 2. Top-Level Structure

The file is a single JSON object with several key properties:

-   `"version"`: Specifies the version of the `.vil` file format.
-   `"uid"`: A unique identifier for the keyboard hardware.
-   `"layout"`: The core property containing the keycode assignments for each layer.
-   `"encoder_layout"`: Defines behavior for rotary encoders.
-   `"macro"`, `"tap_dance"`, `"combo"`: Arrays that define advanced features like macros, tap-dance sequences, and key combos.
-   `"settings"`: Contains various configuration options for the firmware.

## 3. The `layout` Property

The `"layout"` property is the most critical for understanding the keyboard's typing behavior. It is a multi-dimensional array that maps directly to the keyboard's physical and logical structure.

The structure can be broken down as follows: `layers[groups][keys]`

### 3.1 Layers

The top-level array within `"layout"` represents the keyboard's layers. In the example file, this array has four elements, corresponding to Layers 0, 1, 2, and 3.

```json
"layout": [
  [ /* Layer 0 */ ],
  [ /* Layer 1 */ ],
  [ /* Layer 2 */ ],
  [ /* Layer 3 */ ]
]
```

### 3.2 Key Groups (Matrix Structure)

Each layer array contains a series of nested arrays. These correspond to the physical key matrix of the keyboard, which is split into logical groups. For the Dilemma keyboard, there are 8 groups per layer.

```json
/* Layer 0 */
[
  [ /* Group 0: Left hand, top-left cluster */ ],
  [ /* Group 1: Left hand, home row cluster */ ],
  [ /* ...and so on for all 8 groups */ ]
]
```

### 3.3 Keycodes

The innermost arrays contain the actual keycode strings that are assigned to each key in a group. These strings follow the QMK keycode conventions (e.g., `"KC_A"`, `"KC_LSHIFT"`, `"KC_ESCAPE"`).

```json
/* Group 0 of Layer 0 */
[
  "KC_ESCAPE",
  "KC_LBRACKET",
  "KC_COMMA",
  "KC_QUOTE",
  "KC_Z"
]
```

### 3.4 Special Values

Two special values are commonly found in the keycode arrays:

-   `"KC_TRNS"`: Stands for "transparent." This means the key will inherit its behavior from the layer below it. For example, if a key on Layer 1 is `"KC_TRNS"`, pressing it will produce the keycode defined for that same key on Layer 0.
-   `-1`: This value represents a disabled or non-existent key position in the matrix. It is used as a placeholder where no physical key is present.

By parsing this nested structure, an application can reconstruct the entire keymap for all layers of the keyboard, allowing it to visualize the layout and validate user input during typing practice.
