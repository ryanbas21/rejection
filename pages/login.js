import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../src/store';
import Login from '../src/Login/Login';
import Head from '../src/head/head';
import Nav from '../src/navbar/navbar';

const Index = () => (
  <div>
    <Head />
    <Nav />
    <Login />
  </div>
);

export default withRedux(store)(Index);
