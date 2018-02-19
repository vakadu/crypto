import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Table, ButtonToolbar, Button } from 'react-bootstrap';

import { fetchCoin } from "../actions";

class CryptoShow extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchCoin(id);
        //console.log(id);
    }

    render(){
        const { coin } = this.props;
        if (!coin){
            return <div>Loading...</div>
        }
        return(
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} lg={12}>
                        <div className="market-head">
                            <h1>Cryptocurrency Market Capitalizations</h1>
                        </div>
                        <div>
                            <h3>{ coin.name }<span>{ coin.price_usd}</span> <span>USD</span> <span>({ coin.percent_change_24h } %)</span> </h3>
                            <Link to="/">Go Back</Link>
                        </div>
                        <div className="table-responsive">
                            <Table striped bordered condensed hover>
                                <thead>
                                <tr>
                                    <th>Market Cap</th>
                                    <th>Volume(24h)</th>
                                    <th>Circulating Supply</th>
                                    <th>Max Supply</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>${ coin.market_cap_usd }USD</td>
                                    <td>${ coin['24h_volume_usd'] }USD</td>
                                    <td> { coin.available_supply }BTC</td>
                                    <td> { coin.max_supply }BTC</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps({ coins }, ownProps) {
    return { coin: coins[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchCoin }) (CryptoShow);
