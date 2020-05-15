import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

export default class App extends React.Component {

  render() {
    return (
      <div className='main'>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer  />
      </div>
    )
  };


};
