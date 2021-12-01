

import React from 'react';

import { saveLocale } from './i18nInit';
import './i18n.scss';

const setLocale = (locale) => (ev) => {
  ev.preventDefault();
  saveLocale(locale);
  window.location.reload();
};

const LangSwitcher = () => (
  <div className="lang-switch">
    <a href="/" onClick={setLocale('en')}>en</a>
    <a href="/" onClick={setLocale('te')}>te</a>
    <a href="/" onClick={setLocale('hn')}>hn</a>
  </div>
);

const Language = () => (
  <div className="app">
    <header className="app-header">
      <LangSwitcher />
      <p>Welcome to Multi language app.</p>
    </header>
  </div>
);

export default Language;
