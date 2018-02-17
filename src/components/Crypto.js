import _ from 'lodash';
import React, { Component } from 'react';
import ReactTimeout from 'react-timeout'
import { connect } from 'react-redux';
import { Grid, Row, Col, Table, ButtonToolbar, Button } from 'react-bootstrap';

import { fetchCoins } from "../actions";

class Crypto extends Component{
    componentDidMount(){
        this.props.fetchCoins();
    }

    renderBody(){
        return _.map(this.props.coins, coin => {
            return (
                <tr key={ coin.id }>
                    <td>{ coin.rank }</td>
                    <td>{ coin.name }</td>
                    <td>{ coin.symbol }</td>
                    <td>{ coin.market_cap_usd }</td>
                    <td>{ coin.price_usd }</td>
                    <td>{ coin.available_supply }</td>
                    <td>{ coin['24h_volume_usd'] }</td>
                    <td>{ coin.percent_change_1h }</td>
                    <td>{ coin.percent_change_7d }</td>
                    <td>{ coin.percent_change_24h }</td>
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
