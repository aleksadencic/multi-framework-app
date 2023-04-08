<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import { selectedFilters } from '@store/state'

const $selectedColors = useStore(selectedFilters)
</script>

<template>
    <article>
        <hgroup>
            <h3>
                {{
                    $selectedColors.length === 0
                        ? 'No filters'
                        : $selectedColors.join(', ')
                }}
            </h3>
            <h2>applied to the table</h2>
        </hgroup>
    </article>
</template>
