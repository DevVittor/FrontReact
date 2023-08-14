import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  server: {
    proxy: {
      '/products': 'http://localhost:3000/', // Altere para o URL do seu servidor backend
      '/products/save': 'http://localhost:3000/',
    },
  },
};
