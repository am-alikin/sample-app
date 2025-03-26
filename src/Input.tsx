export function Input() {
    return <>
        <div>a:<input /></div>
        <div>b:<input /></div>
        <div>
            action:<select>
                <option>None</option>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
            </select>
        </div>
    </>
}