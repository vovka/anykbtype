import type { InfoJson, VilFile } from '../types/keyboard';

export const parseInfoJson = async (file: File): Promise<InfoJson> => {
  const content = await file.text();
  return JSON.parse(content);
};

export const parseVilFile = async (file: File): Promise<VilFile> => {
  const content = await file.text();
  return JSON.parse(content);
};

export const getLayout = (info: InfoJson) => {
  const keymap = info.layouts.keymap;
  let x = 0;
  let y = 0;
  let keyProps = { w: 1, h: 1, r: 0, rx: 0, ry: 0 };

  const positions: Record<
    string,
    { x: number; y: number; w: number; h: number; r: number; rx: number; ry: number }
  > = {};

  for (const row of keymap) {
    x = 0;
    y++;
    keyProps = { w: 1, h: 1, r: 0, rx: 0, ry: 0 };
    for (const item of row) {
      if (typeof item === 'string') {
        positions[item] = { x, y, ...keyProps };
        x += keyProps.w;
        keyProps = { w: 1, h: 1, r: 0, rx: 0, ry: 0 };
      } else {
        if (item.x) {
          x += item.x;
        }
        if (item.y) {
          y += item.y;
        }
        if (item.w) {
          keyProps.w = item.w;
        }
        if (item.h) {
          keyProps.h = item.h;
        }
        if (item.r) {
          keyProps.r = item.r;
        }
        if (item.rx) {
          keyProps.rx = item.rx;
        }
        if (item.ry) {
          keyProps.ry = item.ry;
        }
      }
    }
  }
  return positions;
};

export const getKeycodes = (vil: VilFile) => {
  return vil.layout.map((layer) => {
    return layer.flat();
  });
};

export const getKeyboard = (info: InfoJson, vil: VilFile) => {
  const positions = getLayout(info);
  const layers = getKeycodes(vil);

  const keyboard = Object.entries(positions).map(([key, pos]) => {
    const [row, col] = key.split(',').map(Number);
    return {
      ...pos,
      keycodes: layers.map((layer) => layer[row * info.matrix.cols + col]),
    };
  });
  return keyboard;
};
