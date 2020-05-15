import React from 'react';

export default class GifList extends React.Component {


    renderGiphs = (gifs) => {
        if (gifs) {
            return (
                <div className='gif-list'>
                    <img src={gifs[0].images.original.url} alt="gif"></img>
                    <img src={gifs[1].images.original.url} alt="gif"></img>
                    <img src={gifs[2].images.original.url} alt="gif"></img>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='gif-list-wrapper'>
                    {this.renderGiphs(this.props.gif[0])}
            </div>
        )
    }
}