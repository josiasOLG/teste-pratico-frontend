import './globals.css';
import { EmployeeProvider } from '@/infrastructure/providers/EmployeeProvider';
import { ReactNode } from 'react';

export const metadata = {
  title: 'BeTalent',
  description: 'Visualização de funcionários',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-white text-white p-4">
          <h1 className="text-2xl font-bold text-black">BeTalent</h1>
        </header>
        <EmployeeProvider>{children}</EmployeeProvider>
      </body>
    </html>
  );
}
