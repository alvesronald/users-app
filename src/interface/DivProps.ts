import React from 'react';

export interface DivProps {
  display?: string;
  children: React.ReactNode;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
}
