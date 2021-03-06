import React from 'react'
import {render} from 'react-dom'

import { Example } from './Example'

import { AlertDemo } from './AlertDemo'
import { BadgeDemo } from './BadgeDemo'
import { BlockquoteDemo } from './BlockquoteDemo'
import { BubbleDemo } from './BubbleDemo'
import { ButtonDemo } from './ButtonDemo'
import { CalendarDemo } from './CalendarDemo'
import { CardDemo } from './CardDemo'
import { ContainerDemo } from './ContainerDemo'
import { DrawerDemo } from './DrawerDemo'
import { DropdownButtonDemo } from './DropdownButtonDemo'
import { GridDemo } from './GridDemo'
import { HeadingDemo } from './HeadingDemo'
import { ImageDemo } from './ImageDemo'
import { ListDemo } from './ListDemo'
import { MenuDemo } from './MenuDemo'
import { ModalDemo } from './ModalDemo'
import { NavDemo } from './NavDemo'
import { PaginationDemo } from './PaginationDemo'
import { OverlayDemo } from './OverlayDemo'
import { TabDemo } from './TabDemo'
import { TableDemo } from './TableDemo'
import { TagDemo } from './TagDemo'
import { ToggleDemo } from './ToggleDemo'
import { TreeDemo } from './TreeDemo'

import {
  Container, Grid, Cell,
  H1, H2, H3, H4, H5, H6, 
  List, ListItem, 
  P, 
  Button, 
  Nav, NavContent, NavItem
} from '../../src'

import Waypoint from 'react-waypoint'

require('blaze/dist/blaze.min.css')
require('blaze/dist/blaze.animations.min.css')
require('./css/demo.css')

class GA extends React.Component {
  componentWillMount() {
    const { id } = this.props
    const script = document.createElement("script");

    script.innerText = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', '${id}', 'auto');
  ga('send', 'pageview');
    `;

    document.body.appendChild(script);
  }

  render(){
    return <div />
  }
}


class Section extends React.Component {
  constructor(props){
    super(props)

    this.handleEnter = (e) => {
      if (e.currentPosition === "inside" && e.previousPosition === "above"){
        const { id, onEnter } = this.props
        onEnter(id)
      }
    }
    this.handleLeave = (e) => {
      if (e.currentPosition === "above" && e.previousPosition === "inside"){
        const { id, onEnter } = this.props
        onEnter(id)
      }
    }
  }

  render(){
    const { id } = this.props
    return (
      <div id={id}>
        <Waypoint
          topOffset={50}
          onLeave={this.handleLeave} />
        {this.props.children}
        <Waypoint
          topOffset={50}
          onEnter={this.handleEnter} />
      </div>
    )
  }
}

class Demo extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      selected: ""
    }
    this.onEnter = (selected) => {
      // console.log("onEnter", selected)
      this.setState({selected})
    }
  }

  render() {
    return <div className="c-text">
      <Nav position="top" fixed inline shadow="higher">
        <Container size="xlarge">
          <NavContent>ReactBlazeCSS</NavContent>
          <NavItem right bStyle="primary" href="https://github.com/appcraft/react-blazecss">github</NavItem>
        </Container>
      </Nav>
      <Container size="xlarge">
        <Grid>
          <Cell componentClass="main" style={{paddingTop: 50}}>
            <H1 size="xlarge">Introduction</H1>
            <P>
              ReactBlazeCSS is a set of React components using <a className="c-link" href="http://blazecss.com/">BlazeCSS</a> styles
              and heavily inspired by <a className="c-link" href="https://react-bootstrap.github.io">ReactBoostrap</a>.<br />
              Support is pretty limited and expiramental for now, more components will be added soon.
            </P>
            <H2 size="large">Useless Example</H2>
            <Section id="example" onEnter={this.onEnter}>
              <Example />
            </Section>
            <H1 size="xlarge">Components</H1>
            <Section id="alerts" onEnter={this.onEnter}>
              <AlertDemo />
            </Section>
            <Section id="badges" onEnter={this.onEnter}>
              <BadgeDemo />
            </Section>
            <Section id="blockquotes" onEnter={this.onEnter}>
              <BlockquoteDemo />
            </Section>
            <Section id="bubbles" onEnter={this.onEnter}>
              <BubbleDemo />
            </Section>
            <Section id="buttons" onEnter={this.onEnter}>
              <ButtonDemo />
            </Section>
            <Section id="calendars" onEnter={this.onEnter}>
              <CalendarDemo />
            </Section>
            <Section id="cards" onEnter={this.onEnter}>
              <CardDemo />
            </Section>
            <Section id="containers" onEnter={this.onEnter}>
              <ContainerDemo />
            </Section>
            <Section id="drawers" onEnter={this.onEnter}>
              <DrawerDemo />
            </Section>
            <Section id="dropdownButtons" onEnter={this.onEnter}>
              <DropdownButtonDemo />
            </Section>
            <Section id="grids" onEnter={this.onEnter}>
              <GridDemo />
            </Section>
            <Section id="headings" onEnter={this.onEnter}>
              <HeadingDemo />
            </Section>
            <Section id="images" onEnter={this.onEnter}>
              <ImageDemo />
            </Section>
            <Section id="lists" onEnter={this.onEnter}>
              <ListDemo />
            </Section>
            <Section id="menus" onEnter={this.onEnter}>
              <MenuDemo />
            </Section>
            <Section id="modals" onEnter={this.onEnter}>
              <ModalDemo />
            </Section>
            <Section id="navs" onEnter={this.onEnter}>
              <NavDemo />
            </Section>
            <Section id="overlays" onEnter={this.onEnter}>
              <OverlayDemo />
            </Section>
            <Section id="pagination" onEnter={this.onEnter}>
              <PaginationDemo />
            </Section>
            <Section id="tables" onEnter={this.onEnter}>
              <TableDemo />
            </Section>
            <Section id="tabs" onEnter={this.onEnter}>
              <TabDemo />
            </Section>
            <Section id="tags" onEnter={this.onEnter}>
              <TagDemo />
            </Section>
            <Section id="toggles" onEnter={this.onEnter}>
              <ToggleDemo />
            </Section>
            <Section id="trees" onEnter={this.onEnter}>
              <TreeDemo />
            </Section>
            <br />
            <br />
          </Cell>
          <Cell componentClass="nav" fixedWidth={200} className="nav" style={{paddingTop: 70}}>
            <div className="fixed@large">
              <H3 size="small" style={{padding: ".5em 0"}}>Introduction</H3>
              <List unstyled className="nav-menu">
                {this.renderLink("example", "Example")}
              </List>
              <H3 size="small" style={{padding: ".5em 0"}}>Components</H3>
              <List unstyled className="nav-menu">
                {this.renderLink("alerts", "Alerts")}
                {this.renderLink("badges", "Badges")}
                {this.renderLink("blockquotes", "Blockquotes")}
                {this.renderLink("bubbles", "Bubbles")}
                {this.renderLink("buttons", "Buttons")}
                {this.renderLink("calendars", "Calendars")}
                {this.renderLink("cards", "Cards")}
                {this.renderLink("containers", "Containers")}
                {this.renderLink("drawers", "Drawers")}
                {this.renderLink("dropdownButtons", "DropdownButton")}
                {this.renderLink("grids", "Grids")}
                {this.renderLink("headings", "Headings")}
                {this.renderLink("images", "Images")}
                {this.renderLink("lists", "Lists")}
                {this.renderLink("menus", "Menus")}
                {this.renderLink("modals", "Modals")}
                {this.renderLink("navs", "Navs")}
                {this.renderLink("overlays", "Overlays")}
                {this.renderLink("pagination", "Pagination")}
                {this.renderLink("tables", "Tables")}
                {this.renderLink("tabs", "Tabs")}
                {this.renderLink("tags", "Tags")}
                {this.renderLink("toggles", "Toggles")}
                {this.renderLink("trees", "Trees")}
              </List>
            </div>
          </Cell>
        </Grid>
      </Container>
      <GA id="UA-81527708-1"/>
    </div>
  }

  renderLink(id, name){
    const active = id == this.state.selected
    // Force selection in 50ms, used because trusting waypoints leaving doesn't work well on scroll jumps
    return (
      <ListItem className={active ? "active" : undefined}>
        <a className="c-link" 
           href={"#" + id} 
           onClick={() => setTimeout(() => this.setState({selected: id}), 50)}>
          {name}
        </a>
      </ListItem>
    )
  }
}


render(<Demo/>, document.querySelector('#demo'))
