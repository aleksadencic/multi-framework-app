<script lang="ts">
    import { selectedFilters } from '@store/state'
    import type { User } from '../types'

    export let users: User[]

    const eyeColors = users.map((user) => user.eyeColor.toLowerCase())

    const filters = [...new Set(eyeColors)]

    const updateSelection = (selection: string) => () => {
        const updatedSelection = [...new Set([...selectedFilters.get(), selection])]
        selectedFilters.set(updatedSelection)
        console.log('selected.get()', selectedFilters.get())
    }
</script>

<details role="list">
    <summary aria-haspopup="listbox">Eye color</summary>
    <ul role="listbox">
        {#each filters as filter}
            <li on:click={updateSelection(filter)} on:keypress>{filter}</li>
        {/each}
    </ul>
</details>
