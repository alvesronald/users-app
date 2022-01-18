import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'pages/Main';

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
