import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 75px;
    gap: 10px;

    width: 80%;
    height: fit-content;
    background: #E9F0EC;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

export const AboutHeader = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 10px;

width: 400px;
height: 178px;

background: #DE8888;

/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`

export const AboutSubheader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 40px;
    gap: 10px;

    width: 1207px;
    height: 48px;

    background: #D25D5D;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

export const AboutTextbox = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 40px 40px;
gap: 10px;

width: 1279px;
height: 335px;

background: #ECBEF3;

/* Inside auto layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
`
