import dynamic from 'next/dynamic';
import React from 'react';

const DynamicWoundPanel = dynamic(() => import('components/admin/WoundPanel'));

const WoundPage: React.FC = () => {
  return <DynamicWoundPanel />;
};

export default WoundPage;