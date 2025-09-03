# Analysis of `info.json` and Keyboard Layout Relationship

## Overview
This document analyzes the relationship between the `info.json` file, specifically the `layouts.keymap` section, and the visual representation of the keyboard. The goal is to understand how the data in the JSON file translates to the physical layout of the keys.

## `layouts.keymap` Structure
The `layouts.keymap` property in the `info.json` file is an array of arrays. Each inner array represents a row of keys on the keyboard. The items in the row array can be either a string or an object.

-   **String**: A string in the format `"row,col"` represents a key. The `row` and `col` values correspond to the key's position in the keyboard's matrix.
-   **Object**: An object represents a positional adjustment or a property change for the subsequent keys in the row. These objects can contain the following keys:
    -   `x`: A horizontal offset to be applied to the next key.
    -   `y`: A vertical offset to be applied to the next key.
    -   `w`: The width of the next key.
    -   `h`: The height of the next key.
    -   `r`: The rotation of the next key.
    -   `rx`: The x-coordinate of the rotation's origin.
    -   `ry`: The y-coordinate of the rotation's origin.

## Rendering Logic
To render the keyboard layout from the `layouts.keymap` data, we need to iterate through the array and process each item. We can maintain a "cursor" with `x` and `y` coordinates to keep track of the current position on the rendering surface.

Here's a breakdown of the logic:

1.  Initialize `x` and `y` coordinates to `0`.
2.  Iterate through each `row` in the `layouts.keymap` array.
3.  At the beginning of each row, reset `x` to `0` and increment `y`.
4.  Iterate through each `item` in the `row` array.
5.  If the `item` is an **object**, update the current cursor position or the properties for the next key. For example, if the object is `{ "x": 1 }`, we would increment the `x` cursor by `1`.
6.  If the `item` is a **string**, it represents a key. We can then render the key at the current `x` and `y` coordinates, using the current key properties (width, height, rotation, etc.). After rendering the key, we increment the `x` cursor by the width of the key.

## Example
Let's consider a simple example:

```json
"keymap": [
  [ "0,0", { "x": 0.5 }, "0,1" ],
  [ "1,0", "1,1" ]
]
```

1.  **Row 1**:
    -   `y` is `0`.
    -   `x` is `0`.
    -   `"0,0"`: Render key `0,0` at `(0, 0)`. `x` becomes `1`.
    -   `{ "x": 0.5 }`: Add `0.5` to `x`. `x` becomes `1.5`.
    -   `"0,1"`: Render key `0,1` at `(1.5, 0)`. `x` becomes `2.5`.
2.  **Row 2**:
    -   `y` becomes `1`.
    -   `x` is reset to `0`.
    -   `"1,0"`: Render key `1,0` at `(0, 1)`. `x` becomes `1`.
    -   `"1,1"`: Render key `1,1` at `(1, 1)`. `x` becomes `2`.

By following this logic, we can accurately translate the `layouts.keymap` data into a visual representation of the keyboard.
