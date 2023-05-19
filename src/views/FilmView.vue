<template>
    <div class="d-flex flex-wrap justify-content-center align-items-center" v-if="!filmLoading">
        <CardVue v-for="film in filmResult.findBySubCategory" :key="film.id"
        :title="film.title"
        :description="film.description"
        :published_at="film.published_at"
        :category="film.category"
        :rating="film.rating"
        :image="film.image"
        :id="film.id"
         />
    </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'
import {useQuery} from '@vue/apollo-composable'
import {gql} from '@apollo/client/core'

import CardVue from '@/components/Card.vue'

const variables = ref({
    subcategory:'film'
})

const {
    loading:filmLoading,
    result:filmResult
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
