import styled from 'styled-components'

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    gap: 68px;

    width: 441px;
    height: 100%;

    background: #FFFFFF;

    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    
`

export const SidebarTitleWrapper = styled.div`
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 35px 17px;
    gap: 10px;

    width: 434px;
    height: 142px;

    background: #FFFFFF;
    border: 1px solid #000000;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const SidebarTitleTextWrapper = styled.div`
    box-sizing: border-box;

    width: 307px;
    height: 73px;

    background: #FFFFFF;
    border: 1px solid #000000;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    font-weight: bold;

`

export const SidebarTitleLogoWrapper = styled.div`
    box-sizing: border-box;

    width: 99px;
    height: 73px;

    background: #FFFFFF;
    border: 1px solid #000000;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`

export const SidebarTextWrapper = styled.div`
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 16px 30px;
    isolation: isolate;

    width: 427px;
    height: 247px;

    background: #FFFFFF;
    border: 1px solid #000000;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`

export const SidebarTextTitleWrapper = styled.div`
    /* Frame 10 */

    box-sizing: border-box;

    width: 377px;
    height: 73px;

    background: #FFFFFF;
    border: 1px solid #000000;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 2;

    color: rgba(72, 72, 82, 1);
    font-size: 27px;

`

export const SidebarTextTextWrapper = styled.div`
    /* Frame 11 */

    box-sizing: border-box;

    width: 363px;
    height: 64px;

    background: #FFFFFF;
    border: 1px solid #000000;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
    color: rgba(0, 0, 0, 0.85);
    font-size: 22px;
`