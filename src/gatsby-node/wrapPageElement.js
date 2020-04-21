import React from 'react';
import Layout from '../components/Layout';
import { detectLanguage } from '../i18n';
import { LanguageProvider } from '../i18n/languageContext';
import { PageContextProvider } from './pageContext';
import CreateMetaTags from '../components/CreateMetaTags';

export default function wrapPageElement({ element, props }) {
  const { language: pageContextLanguage } = props.pageContext;
  const language = pageContextLanguage || detectLanguage();

  return (
    <>
      <PageContextProvider pageData={props}>
        <LanguageProvider language={language}>
          <CreateMetaTags />
          <Layout>
            {element}
          </Layout>
        </LanguageProvider>
      </PageContextProvider>
    </>
  )
}
