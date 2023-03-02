import { Helmet } from 'react-helmet';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './app.module.scss';
import { RootLayout } from 'layouts';
import { HomePage, EarphonesPage, HeadphonesPage, SpeakersPage } from 'pages';

const cn = classNames.bind(styles);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/earphones/*' element={<EarphonesPage />} />
      <Route path='/headphones/*' element={<HeadphonesPage />} />
      <Route path='/speakers/*' element={<SpeakersPage />} />
      {/* <Route path='/checkout' element={<CheckoutPage />} /> */}
      {/* <Route path='*' element={<NotFoundPage />} /> */}
    </Route>,
  ),
);

export default function App() {
  return (
    <div className={cn('container')}>
      <Helmet>
        <title>Audiophile</title>
        <meta name='description' content='App Description' />
        <meta name='theme-color' content='#008f68' />
      </Helmet>
      <RouterProvider router={router} />
    </div>
  );
}
