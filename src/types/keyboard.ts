export interface QmkLayoutKey {
  matrix: [number, number];
  x: number;
  y: number;
  w?: number;
  h?: number;
  label?: string;
}

export interface QmkLayout {
  layout: QmkLayoutKey[];
}

// This represents the structure of the `layouts` object in the provided vial.json
export interface KeymapLayout {
  keymap: (string | { [key: string]: number | undefined })[][];
}

export interface InfoJson {
  keyboard_name: string;
  layouts: KeymapLayout; // Updated to use the correct layout type
  matrix: {
    rows: number;
    cols: number;
  };
  // Add other properties from info.json as needed
  [key: string]: any;
}

export interface VilFile {
  version: number;
  uid: number;
  layout: (string | number)[][][];
  encoder_layout: unknown[];
  layout_options: number;
  macro: unknown[];
  vial_protocol: number;
  via_protocol: number;
  tap_dance: unknown[];
  combo: unknown[];
  key_override: unknown[];
  alt_repeat_key: unknown[];
  settings: { [key: string]: number };
}
