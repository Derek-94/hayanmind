import styled from 'styled-components'

export const Container = styled('section')`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Article = styled('article')`
    width: 500px;
    background: #f8f9fa;
    border: 0.5px solid #ced4da;
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 14px;
    padding: 20px;
`;

export const Title = styled('span')`
    font-family: SFProDisplay;
    font-size: 18px;
    line-height: 21px;
    font-weight: 600;
    margin-bottom: 12px;
    display: inline-block;
`; 
