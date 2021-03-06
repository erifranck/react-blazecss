import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class BlockquoteDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Blockquotes</H2>
        <H3 size="medium">Basic</H3>
        <ReactPlayground codeText={`\
export default (
  <Blockquote>
    The best way to predict the future is to create it.
  </Blockquote>
)\
`} />
        <H3 size="medium">Cite</H3>
        <ReactPlayground codeText={`\
export default (
  <Blockquote cite="Abraham Lincoln">
    The best way to predict the future is to create it.
  </Blockquote>
)\
`} />
        <H3 size="medium">Colors</H3>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Blockquote>Default quote</Blockquote>
    <Blockquote bStyle="primary">Primary quote</Blockquote>
    <Blockquote bStyle="secondary">Secondary quote</Blockquote>
    <Blockquote bStyle="success">Success quote</Blockquote>
    <Blockquote bStyle="error">Error quote</Blockquote>
  </div>
)\
`} />
      </div>
    )
  }
}