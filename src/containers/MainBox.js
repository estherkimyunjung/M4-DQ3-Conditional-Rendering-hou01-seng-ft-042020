import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: ''
    }
  }

  changeSelected = (newSelected) => {

    console.log("CHANGE", newSelected)
    this.setState({
      selected: newSelected
    })
  }

  render() {

    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */

    let displayMap = {
      '': 'please select',
      'profile': <Profile />,
      'photo': <Photos />,
      'cocktail': <Cocktails />,
      'pokemon':<Pokemon />

    }

    // let display;
    // switch(this.state.selected) {
    //   case 'profile':
    //     display = <Profile />
    //     break;
    //   case 'photo':
    //     display = <Photos />
    //     break;
    //   case 'cocktail':
    //     display = <Cocktails />
    //     break;
    //   case 'pokemon':
    //     display = <Pokemon />
    //     break;
    //   default:
    //     display = null                          
    // }

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar 
        changeSelected={this.changeSelected}/> 
        {/* selected={this.state.selected}/> */}
          {displayMap[this.state.selected]}
        </div>
    )
  }
}

export default MainBox
