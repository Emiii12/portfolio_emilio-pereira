import React, { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full px-6">
      <main className="w-full flex justify-center">
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;