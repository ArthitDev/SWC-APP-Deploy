import dynamic from 'next/dynamic';
import React from 'react';

const DynamicTrickPanel = dynamic(
  () => import('components/admin/Trick/TrickPanel')
);

const TrickPage: React.FC = () => {
  return <DynamicTrickPanel />;
};

export default TrickPage;
