import React from 'react';
import Layout from '../components/Layout';
import { detectLanguage } from '../i18n';
import { LanguageProvider } from '../i18n/languageContext';
import { PageContextProvider } from './pageContext';
import CreateLanguageMetaTags from '../components/CreateLanguageMetaTags';
import OnlySupportedBrowsers from '../components/OnlySupportedBrowsers';

export default function wrapPageElement({ element, props }) {
  const { language: pageContextLanguage } = props.pageContext;
  const language = pageContextLanguage || detectLanguage();

  return (
    <>
      <PageContextProvider pageData={props}>
        <LanguageProvider language={language}>
          <OnlySupportedBrowsers>
            <CreateLanguageMetaTags />
            <Layout>
              {element}
            </Layout>
          </OnlySupportedBrowsers>
        </LanguageProvider>
      </PageContextProvider>
    </>
  )
}
