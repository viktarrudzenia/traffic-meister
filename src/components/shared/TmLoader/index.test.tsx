import { render } from '@testing-library/react';

import TmLoader from './index';
import styles from './index.module.scss';

describe('TmLoader', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<TmLoader />);
    const loader = getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('has the correct wrapper class', () => {
    const { container } = render(<TmLoader />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass(styles.TmLoader__wrapper);
  });

  it('has the correct loader class', () => {
    const { container } = render(<TmLoader />);
    const loader = container?.firstChild?.firstChild;
    expect(loader).toHaveClass(styles.TmLoader__loader);
  });
});
