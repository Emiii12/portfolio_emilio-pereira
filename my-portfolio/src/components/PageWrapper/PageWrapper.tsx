import React, { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className='w-full'>
      <main className='max-w-6xl mx-auto flex flex-col justify-center gap-20 lg:gap-40 px-6 lg:px-10'>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;