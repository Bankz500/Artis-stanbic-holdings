import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        online: './online-banking.html',
        insurance: './personal-insurance.html',
        loans: './personal-loans.html',
        account: './open-account.html',
        contact: './contact.html',
        cards: './credit-cards.html', // corrected the spelling
        about: './about-us.html',
        deposit: './deposit.html',
        dashboard: './dashboard.html',
        password: './forgot-password.html',
        profile: './profile.html',
        withdraw: './withdraw.html',
        support: './support.html',
        mortgage: './mortgage.html',
        personal: './personal-banking.html',
        business: './business-banking.html',
        current: './current-account.html',
        savings: './savings-account.html',
        transfer: './transfer.html',
        manifest: './manifest.json',
        statement: './bank-statement.html',
        profile2: './profile-2.html',
      },
    },
  },
});