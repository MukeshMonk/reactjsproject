
  import React, { Component } from 'react';
  
  
  class NavigationMenu extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
  
      return (
  
        <div>
          
        </div>
      )
    }
  }
  
  export default NavigationMenu;