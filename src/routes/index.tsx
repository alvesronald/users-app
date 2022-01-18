import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Main } from 'pages/Main';

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Main />} />
  </Routes>
);

export default RoutesComponent;
