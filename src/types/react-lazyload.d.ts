declare module 'react-lazyload' {
    import { ComponentType, ReactNode } from 'react';
  
    interface LazyLoadProps {
      height?: number | string;
      once?: boolean;
      offset?: number | number[];
      overflow?: boolean;
      resize?: boolean;
      scroll?: boolean;
      unmountIfInvisible?: boolean;
      children: ReactNode;
    }
  
    const LazyLoad: ComponentType<LazyLoadProps>;
    export default LazyLoad;
  }