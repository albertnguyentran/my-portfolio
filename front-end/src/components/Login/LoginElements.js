import styled from 'styled-components'

export const LoginContainer = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: relative;
    width: 1920px;
    height: 1080px;

    background: #F8F4FA;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const LoginBoxContainer = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    gap: 12px;

    width: 1000px;
    height: 757px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const LoginTextbox = styled.div`
    box-sizing: border-box;

    width: 210px;
    height: 37px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const LoginInputWrapper = styled.div`
    box-sizing: border-box;

    width: 937px;
    height: 144px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`