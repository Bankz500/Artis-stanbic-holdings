import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        account: './sign-up.html',
        contact: './contact.html',
        about: './about-us.html',
        deposit: './deposit.html',
        dashboard: './dashboard.html',
        password: './forgot-password.html',
        transaction: './transaction-success.html',
        profile: './profile.html',
        withdraw: './withdraw.html',
        support: './support.html',
        personal: './personal.html',
        business: './business.html',
        transfer: './transfer.html',
        statement: './statement.html',
        profile2: './profile-2.html',
        login: './login.html',
        otp: './otp.html',
        action: './action.html',
        pin: './pin.html',
      },
    },
  },
  // Copy service-worker.js and manifest.json to dist/
  plugins: [
    {
      name: 'copy-files',
      writeBundle() {
        // // Copy service-worker.js
        // fs.copyFileSync(resolve(__dirname, 'service-worker.js'), resolve(__dirname, 'dist', 'service-worker.js'));
        // Copy manifest.json
        fs.copyFileSync(resolve(__dirname, 'manifest.json'), resolve(__dirname, 'dist', 'manifest.json'));
      },
    },
  ],
});