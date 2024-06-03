import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// backend/
// ├── app/
// │   ├── __init__.py
// │   ├── models.py
// │   ├── routes.py
// │   ├── auth.py
// │   └── ...
// ├── migrations/
// ├── config.py
// ├── run.py
// └── ...
