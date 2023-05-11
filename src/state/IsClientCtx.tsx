// import React, { createContext, useReducer } from "react";

// const initialState = {
//    isClient: false,
// };

// export type IsClientActionType = { type: "UPDATE_IS_CLIENT" };

// export const IsClientContext = createContext<{
//    state: typeof initialState;
//    dispatch: React.Dispatch<IsClientActionType>;
// }>({
//    state: initialState,
//    dispatch: () => {},
// });

// const reducer = (state: typeof initialState, action: IsClientActionType) => {
//    if (action.type === "UPDATE_IS_CLIENT") {
//       console.log(state);

//       return state;
//    }
// };

// interface IIsClientProviderProps {
//    children: React.ReactNode;
// }

// const IsClientProvider = ({ children }: IIsClientProviderProps) => {
//    const [state, dispatch] = useReducer(reducer, initialState);

//    return (
//       <IsClientContext.Provider value={{ state, dispatch }}>
//          {children}
//       </IsClientContext.Provider>
//    );
// };

// export default IsClientProvider;
