import { Button } from '@smartive-education/design-system-component-library-musketeers';
import { render, screen } from '@testing-library/react';
import PageHome from '../pages/index';
import { useSession } from 'next-auth/react';
import { setupIntersectionObserverMock } from './intersectionObserverMock';

jest.mock('next-auth/react');

beforeEach(() => {
  setupIntersectionObserverMock();
});

describe('Button', () => {
  it('renders a button', () => {
    render(<Button onClick={() => console.log('button clicked')} />);

    screen.debug();
  });
});

describe('Page', () => {
  it('renders a button', () => {
    (useSession as jest.Mock).mockReturnValue([false, false]);
    render(<PageHome posts={[]} />);

    screen.debug();
  });
});
