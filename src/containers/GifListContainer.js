import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList'


export default class GifListContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }

    handleSubmit = (e, state) => {
        // key: EdsNI275EQSuEPPSTSXLFWjy3ralAeeH
        //fetch for gif urls
        //store them with setState
        //render GifList
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${state}&api_key=EdsNI275EQSuEPPSTSXLFWjy3ralAeeH`)
        .then(resp => {
            return resp.json()
        })
        .then(json => {
            this.setState({gifs: [json['data']]})
        })
    }

    renderGifs = (gifs) => {
        return < GifList gif={Object.values(gifs)} />
    }   

    render() {
        return (
            <div className='gif-container'>
                < GifSearch handleSubmit={this.handleSubmit} />
                <div className='gif-list-wrapper'>
                    {this.renderGifs(this.state.gifs)}
                </div>
            </div>

        )
    };

};