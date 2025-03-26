import { createAction } from "@reduxjs/toolkit";

export const setOperationAction = createAction<string>('math/operation')
