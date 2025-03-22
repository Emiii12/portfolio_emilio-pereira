import React, { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full ">
      <main className="max-w-6xl mx-auto flex justify-center px-6 lg:px-10">
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;