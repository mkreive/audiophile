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
import {
  HomePage,
  EarphonesPage,
  HeadphonesPage,
  SpeakersPage,
  ProductPage,
  NotFoundPage,
} from 'pages';

const cn = classNames.bind(styles);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/headphones'>
        <Route index element={<HeadphonesPage />} />
        <Route path=':id' element={<ProductPage />} />
      </Route>
      <Route path='/earphones'>
        <Route index element={<EarphonesPage />} />
        <Route path=':id' element={<ProductPage />} />
      </Route>
      <Route path='/speakers'>
        <Route index element={<SpeakersPage />} />
        <Route path=':id' element={<ProductPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
      {/* <Route path='/checkout' element={<CheckoutPage />} /> */}
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
