<template>
    <div class="d-flex justify-content-center m-5">
        <button type="button" class="btn btn-dark m-2 fs-5"
        @click="searchByCategory(category.name)"
        v-for="category in categories" :key="category.name">
            {{ category.name }}
        </button>
    </div>

    <div class="d-flex flex-wrap justify-content-center align-items-center" v-if="!filmLoading">
        <CardVue v-for="film in filmResult.findByCategory" :key="film.id"
        :title="film.title"
        :description="film.description"
        :published_at="film.published_at"
        :category="film.category"
        :rating="film.rating"
        :image="film.image"
        :id="film.id"
         />
         <div v-if="filmError">
            {{ filmError.message }}
         </div>
    </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'
import {useQuery} from '@vue/apollo-composable'
import {gql} from '@apollo/client/core'

import CardVue from '@/components/Card.vue'

const categories = ref([
    {
        name:"drama"
    },
    {
        name:"sci-fi"
    },
    {
        name:"action"
    },
    {
        name:"horror"
    }
])

const variables = ref({
    category:''
})

const {
    loading:filmLoading,
    result:filmResult,
    error:filmError
} = useQuery(gql`
    query($category: String){
        findByCategory(category: $category) {
            category
            description
            id
            image
            published_at
            rating
            title
    
        }
    }
`,variables)

const searchByCategory = (category) =>{
    variables.value.category = category
}
</script>
