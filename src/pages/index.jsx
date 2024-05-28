import { render } from '@czechitas/render';
import { BookingSummary } from '../components/BookingSummary/BookingSummary';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <BookingSummary/>
  </div>
);