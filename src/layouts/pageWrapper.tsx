import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col flex-grow pt-2 px-4 pb-4">
      {children}
    </div>
  );
}