import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`;

const Pane = styled.div`
    flex:1;
`;

export const SplitScreen = ({ children }) => {
    const [left, right] = children;
    return (
        <Container>
            <Pane>
                {left}
            </Pane>
            <Pane>
                {right}
            </Pane>
        </Container>
    )
}