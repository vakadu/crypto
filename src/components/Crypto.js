import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCoins } from "../actions";

class Crypto extends Component{
    componentDidMount(){
        this.props.fetchCoins();
    }

    render(){
        return(
            <div>
                crypto
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { coins: state.coins }
}

export default connect(mapStateToProps, { fetchCoins: fetchCoins})(Crypto);
