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

export interface InfoJson {
  keyboard_name: string;
  layouts: {
    [layoutName: string]: QmkLayout;
  };
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
