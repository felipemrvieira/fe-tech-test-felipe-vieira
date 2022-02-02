import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '.';

describe('<Home />', () => {
  it('renders Homepage correctly', async () => {
    render(<Home />);
    expect(screen.getByText('Movies')).toBeInTheDocument();
  });
});
