import React, { ReactNode } from 'react';
import MobileNavBar from './MobileNavBar';

const SiteLayout = ({ children }: any) => {
  return (
    <>
      {children}
      <MobileNavBar />
    </>
  );
};

export const getSiteLayout = ({ component }: any) => (
  <SiteLayout>{component}</SiteLayout>
);

export default SiteLayout;
