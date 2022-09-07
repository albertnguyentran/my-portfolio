import styled from 'styled-components'

export const increasedStyle = {
    color: "green",
    fontSize: "1.5rem"
}

export const decreasedStyle = {
    color: "red",
    fontSize: "1.5rem"

}
export const infoStyle = {
    display: "flex",
    flexDirection: "column"
}
export const chartStyle = {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "row",
    width: "69rem",
    height: "20rem"

}
export const titleContainer = {
    display: "grid",
    gridTemplateColumns: "8rem 8rem 8rem 8rem 6rem 6rem 10rem 10rem",
    backgroundColor: "#2196F3",
    padding: "10px",
    width: "70rem"
}
export const button = {
    color: "red",
    width: "2rem",
    height: "2rem",
    textAlign: "left"
}

export const buttonContainer = {
    display: "flex",
    flexDirection: "row"
}

export const stockContainer = {
    /*display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '40px',*/

    display: "grid",
    gridTemplateColumns: "8rem 8rem 8rem 8rem 6rem 6rem 8rem 8rem 0rem",
    backgroundColor: "#2196F3",
    padding: "10px",
    width: "70rem"
}

export const stockStyle = {
    color: "black",
    textAlign: "left",
    borderColor: "yellow",
    fontSize: "1.5rem",
    padding: "0rem 0rem 0rem 0rem"
}

export const DashboardContainer = styled.div`
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
export const StockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 10px;

    width: 69rem;
    height: fit-content;

    background: #D159FB;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`
export const StockWrapper = styled.div`
    width: 55rem;
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

    width: 55rem;
    height: 48px;

    background: #D25D5D;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

export const GraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 10px;

    width: 69rem;
    height: fit-content;

    background: #BED0F3;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`

export const GraphWrapper = styled.div`
    width: 27.5rem;
    height: 364px;

    background: #FFFFFF;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`