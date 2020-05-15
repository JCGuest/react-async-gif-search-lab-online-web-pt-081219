import React from 'react';

export default class GifSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    };

    handleChange = (e) => {
        this.setState({
            ...this.state, search: e.target.value
        })
    }

    render() {
        return (
            <div className='gir-search'>
                <form onSubmit={(e) => this.props.handleSubmit(e, this.state.search)}>
                    <label className='label label-success'>Search</label><span>  </span>
                    <input onChange={this.handleChange}></input>
                </form>
            </div>
        )
    };


};