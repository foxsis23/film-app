<template>
    <div class="flex flex-row m-10" v-if="!filmLoading">
        <div class="mr-10">
            <img :src="filmResult.searchById.image" class="w-[500px]">
        </div>
        <div class="flex flex-col align-items-start">
            <h1 class="font-bold text-5xl">{{ filmResult.searchById.title }}</h1>
            <div class="flex flex-row justify-center">
                <h3 class="mr-2">{{ filmResult.searchById.published_at }},</h3>
                <h3 class="mr-2">{{ filmResult.searchById.category }},</h3>
                <h3 class="text-red-600">{{ filmResult.searchById.rating }}</h3>
            </div>
            <p class="text-xl">{{ filmResult.searchById.description }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'
import {useQuery} from '@vue/apollo-composable'
import {gql} from '@apollo/client/core'
import {ref,onMounted} from 'vue'


const route = useRoute()

const variables = ref({
    searchById:route.params.id
})



const {
    loading:filmLoading,
    result:filmResult
} = useQuery(gql`
    query ($searchById: String) {
        searchById(id: $searchById) {
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
</script>