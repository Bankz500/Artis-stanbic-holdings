import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        loans: './loans.html',
        account: './sign-up.html',
        contact: './contact.html',
        cards: './cards.html', // corrected the spelling
        about: './about-us.html',
        deposit: './deposit.html',
        dashboard: './dashboard.html',
        password: './forgot-password.html',
        profile: './profile.html',
        withdraw: './withdraw.html',
        support: './support.html',
        personal: './personal.html',
        business: './business.html',
        current: './current.html',
        savings: './savings.html',
        transfer: './transfer.html',
        manifest: './manifest.json',
        statement: './statement.html',
        profile2: './profile-2.html',
        login: './login.html',
      },
    },
  },
});