/// <reference types="vite/client" />

// Deklarasi untuk file .vue
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Deklarasi untuk modul three
declare module 'three';
