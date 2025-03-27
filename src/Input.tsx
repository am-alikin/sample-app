import { useDispatch, useSelector } from "react-redux"
import { mathSelector } from "./store/selectors/mathSelector"
import { AppDispatch } from "./store/store"
import { setOperationAction, setValue1Action, setValue2Action } from "./store/actions/math"

export function Input() {
    const { value1, value2, operation } = useSelector(mathSelector)
    const dispatch = useDispatch<AppDispatch>()
    return <>
        <div>
            <input defaultValue={value1} onChange={(event) => dispatch(setValue1Action(event.target.value))} />
            <select defaultValue={operation} onChange={(event) => dispatch(setOperationAction(event.target.value))}>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
            </select>
            <input defaultValue={value2} onChange={(event) => dispatch(setValue2Action(event.target.value))} />
        </div>
    </>
}
