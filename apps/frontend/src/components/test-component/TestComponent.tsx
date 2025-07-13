import { PropsWithChildren } from 'react';
import { IUnique } from './TestComponent.types';

interface Props extends PropsWithChildren, IUnique {}

export const TestComponent: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
