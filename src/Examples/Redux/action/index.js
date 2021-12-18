/* Actions > index.js: Combined multiple acation and export as single
                       unit
                       */
export const incNumber = ( number ) => {
    return {
        type: "INCREMENT",
        payload: number
    }
}
export const decNumber = ( number ) => {
    return {
        type: "DECREMENT",
        payload: number
    }
}