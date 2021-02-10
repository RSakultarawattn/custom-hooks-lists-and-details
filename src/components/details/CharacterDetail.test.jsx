import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('display character details', () => {
  afterEach(() => cleanup());
  it('renders character details', () => {
    const { asFragment } = render(<CharacterDetail
      image=""
      name=""
      status=""
      species=""
    />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
