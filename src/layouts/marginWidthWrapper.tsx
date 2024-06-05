
import { ReactNode } from 'react';

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col md:ml-20 lg:ml-60 min-h-screen">
      {children}
    </div>
  );
}