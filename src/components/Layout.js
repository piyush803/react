import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

const Layout = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Layout;
