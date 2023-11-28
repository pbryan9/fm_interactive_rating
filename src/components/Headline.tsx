import type { ReactNode } from 'react';
import styled from 'styled-components';

type HeadlineProps = {
  children: ReactNode;
};

export default function Headline({ children }: HeadlineProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.h1`
  font-size: var(--fs-headline);
`;
