import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import Grid from '../../src/Grid';
import Cell from '../../src/Cell';

const Wrapper = styled.div`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const BorderedCell = styled(Cell)`
    border: 4px solid black;
    margin: .5rem;
`;

const Title = styled.div`
    font-size: 3rem;
    text-align: center;
    margin: 1rem;
`;

const Text = styled.div`
    font-size: 1.5rem;
    text-align: center;
    vertical-align: center;
    margin: 1rem;
`;

const Block = styled.div`
    background-color: ${props => props.color};
    height: 100px;
`;

const App = () => (
    <Wrapper>
        <Grid
            xs={[1, 1]}
            sm={[4, 4]}
            lg={[5, 3]}
        >
            <BorderedCell
                xs={['*']}
                sm={[1, 3, 1, 2]}
                md={[1, 5, 4, 5]}
                lg={[1, 2, 1, 2]}
            >
                <Title>React Layout 📐</Title>
            </BorderedCell>
            <BorderedCell
                xs={['*']}
                sm={[3, 5, 1, 2]}
                md={[1, 3, 2, 3]}
                lg={[2, 3, 1, 2]}
            >
                <Text>React Layout is built with CSS Grid.</Text>
            </BorderedCell>
            <BorderedCell
                xs={['*']}
                sm={[2, 4, 2, 3]}
                md={[3, 5, 2, 4]}
                lg={[2, 3, 2, 3]}
            >
                <Text>
                    Inspired by <a href='https://material-ui.com/layout/grid/'>Material UI Grid</a>, this component is meant
                    to give you easy, responive control across standard breakpoints.
                </Text>
            </BorderedCell>
            <BorderedCell
                xs={['*']}
                sm={[1, 4, 3, 4]}
                md={[1, 3, 1, 2]}
                lg={[3, 4, 2, 3]}
            >
                <Text>
                    With this component, you can organize responsive page layouts in two dimensions.  Ideally used in conjunction with
                    CSS Flexbox, the Layout works best at a high level.  However, there are limitless possibilities, yours to discover.
                </Text>
            </BorderedCell>
        </Grid>
    </Wrapper>
);

render(<App />, document.getElementById("root"));