import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './app.module.scss';
import { RootLayout } from 'layouts';
import { HomePage } from 'pages';

// import {
//   HomePage,
//   HeadphonesPage,
//   SpeakersPage,
//   EarphonesPage,
//   CheckoutPage,
//   NotFoundPage,
// } from '~/pages';

const cn = classNames.bind(styles);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      {/* <Route path='/headphones' element={<HeadphonesPage />} /> */}
      {/* <Route path='/speakers' element={<SpeakersPage />} /> */}
      {/* <Route path='/earphones' element={<EarphonesPage />} /> */}
      {/* <Route path='/checkout' element={<CheckoutPage />} /> */}
      {/* <Route path='*' element={<NotFoundPage />} /> */}
    </Route>,
  ),
);

export default function App() {
  return (
    <div className={cn('container')}>
      <RouterProvider router={router} />
    </div>
  );
}
