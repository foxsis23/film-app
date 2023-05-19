<template>
    <div class="d-flex flex-wrap justify-content-center align-items-center" v-if="!seriesLoading">
        <CardVue v-for="series in seriesResult.findBySubCategory" :key="series.id"
        :title="series.title"
        :description="series.description"
        :published_at="series.published_at"
        :category="series.category"
        :rating="series.rating"
        :image="series.image"
        :id="series.id"
         />
    </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'
import {useQuery} from '@vue/apollo-composable'
import {gql} from '@apollo/client/core'

import CardVue from '@/components/Card.vue'

const variables = ref({
    subcategory:'series'
})

const {
    loading:seriesLoading,
    result:seriesResult
} = useQuery(gql`
    query($subcategory: String) {
        findBySubCategory(subcategory: $subcategory) {
            published_at
            image
            title
            id
            description
            published_at
            rating
            category
            subcategory
        }
    }
`,variables)
</script>
