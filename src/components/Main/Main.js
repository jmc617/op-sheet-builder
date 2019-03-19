import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Player/Search/Search';

class Main extends Component {
    render() {
        const { DefaultComponent } = this.props;
        return (
            <div>
                {
                    !DefaultComponent ? (
                        <div>
                            <Link to='/player'> Player </Link>
                            <Search />
                        </div>
                    )
                    : (
                        <DefaultComponent /> 
                    )
                }
                               
            </div>                                                    
        )
    };
};
 
export default Main;