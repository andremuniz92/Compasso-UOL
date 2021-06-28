import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    },[url])

    return data
}

export default useRequestData