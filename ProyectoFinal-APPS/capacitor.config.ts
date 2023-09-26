import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.demo.dev',
  appName: 'demo',
  webDir: 'dist/demo',
  server: {
    androidScheme: 'https'
  }
};

export default config;
