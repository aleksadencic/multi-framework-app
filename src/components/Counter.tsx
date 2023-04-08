
import { useStore } from '@nanostores/react'
import { selectedFilters } from '@store/state'

const Counter = () => {
    const filters = useStore(selectedFilters)
    return (
        <h5>Applied filters: {filters.length}</h5>
    )
}

export default Counter
