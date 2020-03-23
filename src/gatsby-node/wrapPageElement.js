import React from 'react';
import Helmet from 'react-helmet';
import { detectLanguage } from '../i18n'
import { LanguageProvider } from '../i18n/languageContext'
import Layout from '../components/Layout';

export default function wrapPageElement({ element, props }) {
  const { language: pageContextLanguage } = props.pageContext;
  const language = pageContextLanguage || detectLanguage();

  return (
    <>
      <LanguageProvider language={language}>
        <Layout>
          {element}
        </Layout>
      </LanguageProvider>
    </>
  )
}
