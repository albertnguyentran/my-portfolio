import styled from 'styled-components'

export const portfolioStyle = {
    color: "black",
    textAlign: "left",
    width: "15rem",
    borderColor: "yellow",
    fontSize: "1.5rem"
}

export const container = {
      
}

export const button = {
    color: "red",
    height: "1.5rem"
}

export const portfolioContainer = {
    display: 'flex',
    flexDirection: 'row',
    height: "2rem",
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
    alignItems: "center"
}

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    gap: 68px;

    width: 20%;
    height: fit-content;

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

    width: 20rem;
    height: 142px;

    background: #FFFFFF;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const SidebarTitleTextWrapper = styled.div`
    box-sizing: border-box;

    width: 15rem;
    height: 73px;

    font-size: 1.5rem;
    background: #FFFFFF;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    font-weight: bold;

`

export const SidebarTitleLogoWrapper = styled.div`
    box-sizing: border-box;

    width: 5rem;
    height: 73px;

    background: #FFFFFF;

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
    align-items: flex-start;
    padding: 16px 30px;
    isolation: isolate;
    text-align: left;
    width: 20rem;
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

    width: 15rem;
    height: 73px;

    background: #FFFFFF;
    border: 1px solid #000000;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 2;

    color: rgba(72, 72, 82, 1);
    font-size: 1rem;

`

export const SidebarTextTextWrapper = styled.div`
    /* Frame 11 */

    box-sizing: border-box;

    width: 10rem;
    height: 64px;

    background: #FFFFFF;
    border: 1px solid #000000;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
    color: rgba(0, 0, 0, 0.85);
    font-size: 1rem;
`