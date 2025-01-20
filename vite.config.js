import { defineConfig } from 'vite';

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
        profile: './profile.html',
        withdraw: './withdraw.html',
        support: './support.html',
        personal: './personal.html',
        business: './business.html',
        transfer: './transfer.html',
        manifest: './manifest.json',
        statement: './statement.html',
        profile2: './profile-2.html',
        login: './login.html',
        otp: './otp.html',
        action: './action.html',
        pin: './pin.html',
      },
    },
  },
});