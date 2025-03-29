import { ChangeEvent } from "react"
import { useAppSelector } from "../../../store/hooks"
import { setApiKey, setCity } from "../../../store/slices/weatherSlice"


export function Filter() {
    const apiKey = useAppSelector((store) => store.weather.city)
    const city = useAppSelector((store) => store.weather.city)

    function handleApiKey(event: ChangeEvent<HTMLInputElement>) {
        setApiKey(event.target.value)
    }

    function handleCity(event: ChangeEvent<HTMLSelectElement>) {
        setCity(event.target.value)
    }

    return <div>
        <input defaultValue={apiKey} onChange={handleApiKey} />
        <select defaultValue={city} onChange={(handleCity)}>
            <option>Moscow</option>
            <option>St. Petersburg</option>
            <option>Perm</option>
        </select>
    </div>

}
