import _ from 'lodash';
import React, { Component } from 'react';
import ReactTimeout from 'react-timeout'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Table, ButtonToolbar, Button } from 'react-bootstrap';

import { fetchCoins } from "../actions";

class Crypto extends Component{
    constructor(props){
        super(props);

        this.setRefresh = setInterval(() => {
            this.props.fetchCoins();
            console.log("hello");
        }, 300000);//10000
    }

    componentDidMount(){
        this.props.fetchCoins();
    }

    componentWillUnmount(){
        clearInterval(this.setRefresh);
    }

    formatValue (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    renderBody(){
        return _.map(this.props.coins, coin => {
            return (
                <tr key={ coin.id }>
                    <td>{ coin.rank }</td>
                    <td className="market-color-hover">
                        <Link to={`/currency/${coin.id}`}>{ coin.name }</Link>
                    </td>
                    <td>{ coin.symbol }</td>
                    <td>${ this.formatValue(parseInt(coin.market_cap_usd)) }</td>
                    <td>${ this.formatValue(coin.price_usd) }</td>
                    <td>{ this.formatValue(coin.available_supply) } BTC</td>
                    <td>${ this.formatValue(parseInt(coin['24h_volume_usd'])) }</td>
                    <td>{ coin.percent_change_1h }%</td>
                    <td>{ coin.percent_change_7d }%</td>
                    <td>{ coin.percent_change_24h }%</td>
                </tr>
            )
        })
    }

    render(){
        return(
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} lg={12}>
                        <div className="market-head">
                            <h1>Cryptocurrency Market Capitalizations</h1>
                        </div>
                        <div className="table-responsive">
                            <Table striped bordered condensed hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Symbol</th>
                                    <th>Market Cap</th>
                                    <th>Price</th>
                                    <th>Circulating Supply</th>
                                    <th>Volume</th>
                                    <th>%1h</th>
                                    <th>%24h</th>
                                    <th>%7d</th>
                                </tr>
                                </thead>
                                <tbody>
                                { this.renderBody() }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return { coins: state.coins }
}

export default connect(mapStateToProps, { fetchCoins: fetchCoins})(Crypto);
