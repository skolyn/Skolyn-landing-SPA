/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import ReactDOM from 'react-dom/client';
import './index.css';
import PageRouter from './src/components/pages/PageRouter';

function App() {
  return <PageRouter />;
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
