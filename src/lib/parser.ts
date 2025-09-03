import type { InfoJson, VilFile } from '../types/keyboard';

export const parseInfoJson = async (file: File): Promise<InfoJson> => {
  const content = await file.text();
  return JSON.parse(content);
};

export const parseVilFile = async (file: File): Promise<VilFile> => {
  const content = await file.text();
  return JSON.parse(content);
};
