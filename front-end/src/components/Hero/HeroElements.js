import styled from 'styled-components'

export const HeroContainer = styled.div`
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

export const HeroContainerLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 508px;
    height: 758px;

    background: #FFFFFF;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

`

export const HeroContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 733px;
    height: 757px;

    background: #B89898;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;

`


export const HeroLeftWrapper = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 367px;
    height: 395px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const HeroRightWrapper = styled.div`
   box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;

    width: 512px;
    height: 608px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const HeroLeftTitle = styled.div`
    box-sizing: border-box;

    width: 324px;
    height: 174px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const HeroLeftSecondary = styled.div`
    box-sizing: border-box;

    width: 315px;
    height: 49px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

export const HeroLeftButtonWrapper = styled.div`
    box-sizing: border-box;

    width: 315px;
    height: 118px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`

export const HeroRightTitle = styled.div`
    box-sizing: border-box;

    width: 381px;
    height: 112px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const HeroRightInput = styled.div`
    box-sizing: border-box;

    width: 484px;
    height: 120px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

export const HeroRightButtonWrapper = styled.div`
    box-sizing: border-box;

    width: 484px;
    height: 181px;

    border: 1px solid #000000;

    /* Inside auto layout */

    flex: none;
    order: 3;
    flex-grow: 0;
`