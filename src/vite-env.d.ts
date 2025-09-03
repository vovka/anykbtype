/// <reference types="vite/client" />

declare module '*.vil' {
  const content: any;
  export default content;
}

declare module '*?url' {
  const content: string;
  export default content;
}
