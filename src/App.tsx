import React from 'react';

import {SearchBar} from './searchbar'
import {Container, Row} from "react-bootstrap";
import {SearchResults} from "./search-results";

function App() {
    return (
        <Container>
            <Row>
                <SearchBar/>
            </Row>
            <SearchResults/>
        </Container>
    );
}

export default App;
