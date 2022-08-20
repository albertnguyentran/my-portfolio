import styled from 'styled-components'

export const stockContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '40px',

}

export const stockStyle = {
    color: "black",
    textAlign: "left",
    width: "400px",
    borderColor: "yellow",
}

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 75px;
    gap: 10px;

    width: 100%;
    height: fit-content;

    background: #E9F0EC;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`
export const StockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 10px;

    width: 1207px;
    height: fit-content;

    background: #D159FB;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`
export const StockWrapper = styled.div`
    width: 1128px;
    height: 56px;

    background: #FFFFFF;

    /* Inside auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    order: 0;
    flex-grow: 0;
`

export const HeaderWrapper = styled.div`
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

export const GraphContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 40px;
    gap: 10px;

    width: 1207px;
    height: 444px;

    background: #BED0F3;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`

export const GraphWrapper = styled.div`
    width: 560px;
    height: 364px;

    background: #FFFFFF;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`