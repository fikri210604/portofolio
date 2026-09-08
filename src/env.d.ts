/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="../node_modules/gsap/types/index.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_MAIL_ADDRESS?: string;
  readonly [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.webp" {
  const metadata: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
  export default metadata;
}

declare module "*.png" {
  const metadata: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
  export default metadata;
}

declare module "*.jpg" {
  const metadata: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
  export default metadata;
}

declare module "*.jpeg" {
  const metadata: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
  export default metadata;
}

declare module "*.svg" {
  const metadata: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
  export default metadata;
}
