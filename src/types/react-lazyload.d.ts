declare module 'react-lazyload' {
  import * as React from 'react';

  interface LazyLoadProps {
    height: number | string;
    offset?: number | number[];
    once?: boolean;
    placeholder?: React.ReactNode;
    children?: React.ReactNode;
  }

  const LazyLoad: React.FC<LazyLoadProps>;
  export default LazyLoad;
}