import React, { Component } from 'react';
import UserContext from './userContext'
import MovieRow from './MovieRow'

class MovieList extends Component {
    //1 way. 
    static contextType = UserContext;

    componentDidMount() {
        let value = this.context
        console.log(value)
    }

    render() {
        return (
            //use in render
            <UserContext.Consumer>
                {userContext =>
                    <div>
                        Movie List {userContext.name}
                        <MovieRow />
                    </div>}
            </UserContext.Consumer>
        );
    }
}

//2 way. use in methods like componentDidMount
//MovieList.contextType = UserContext;

export default MovieList;