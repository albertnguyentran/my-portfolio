import styled from 'styled-components'

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 75px;
    gap: 10px;

    width: 100%;
    height: 100%;

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
    height: 333px;

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

    flex: none;
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