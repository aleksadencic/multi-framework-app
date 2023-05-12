<script lang="ts">
    import { selectedFilters } from '@store/state'
    import type { User } from '../types'

    export let users: User[]
</script>

<table>
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Company</th>
            <th scope="col">Eye color</th>
        </tr>
    </thead>
    <tbody>
        {#each users.filter( (user) => $selectedFilters.includes(user.eyeColor.toLowerCase()) ) as user}
            <tr>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.company.name}</td>
                <td>{user.eyeColor}</td>
            </tr>
        {/each}
    </tbody>
</table>
