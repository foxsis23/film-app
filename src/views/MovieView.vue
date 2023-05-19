<template>
    <div class="d-flex flex-wrap justify-content-center align-items-center" v-if="!movieLoading">
        <CardVue v-for="movie in movieResult.findBySubCategory" :key="movie.id"
        :title="movie.title"
        :description="movie.description"
        :published_at="movie.published_at"
        :category="movie.category"
        :rating="movie.rating"
        :image="movie.image"
        :id="movie.id"
         />
    </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'
import {useQuery} from '@vue/apollo-composable'
import {gql} from '@apollo/client/core'

import CardVue from '@/components/Card.vue'

const variables = ref({
    subcategory:'movie'
})

const {
    loading:movieLoading,
    result:movieResult
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
