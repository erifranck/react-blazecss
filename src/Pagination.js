import React from 'react'
import { bem, makeClass }  from './utils'

export const Pagination = makeClass("div", "c-pagination")
export const PaginationEllipsis = makeClass("div", "c-pagination__ellipsis")
export const PaginationControl = makeClass("button", "c-pagination__control")

export class PaginationControls extends React.Component {
  render(){
    const { children, className, backward, forward, ...props } = this.props
    
    var classNames = bem("c-pagination__controls", {
      backward, forward
    }, className)
    
    return <div {...props} className={classNames}>{children}</div>
  }
}

export class PaginationPage extends React.Component {
  render(){
    const { children, className, current, ...props } = this.props
    
    var classNames = bem("c-pagination__page", {
     current
    }, className)
    
    return <button {...props} className={classNames}>{children}</button>
  }
}