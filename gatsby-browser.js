import customWrapRootElement from './src/gatsby-node/wrapRootElement';
import customWrapPageElement from './src/gatsby-node/wrapPageElement';
import React from 'react'

export const onClientEntry = () => {
  localStorage.setItem('startedAt', Date.now())
}

export const wrapRootElement = customWrapRootElement;

export const wrapPageElement = customWrapPageElement