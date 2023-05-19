<template>
    <div class="d-flex justify-content-between bg-black p-2 align-items-center">
        <router-link to="/" class="text-light text-decoration-none
         text-2xl font-bold
        ">
            FilmGO
        </router-link>
        <div>
            <router-link :to="item.link"  v-for="item in navBarItems" :key="item.name" 
            class="m-2 text-lg text-decoration-none text-light link-danger" 
            >
                {{ item.name }}
            </router-link>
        </div>

        <div class="flex flex-col">
            <div class="flex flex-row">
                <input type="text" placeholder="search" class="p-1"
                v-model="title"
                >
                <button class="text-white btn" @click="search">search</button>
            </div>
            
            <div v-if="!filmsLoading" class="position-relative">
                <div class="position-absolute overflow-y-scroll max-h-[200px] z-20"
                v-if="check"
                @mouseleave="check = false,title = ''"
                >
                <div v-for="film in filmsResult.searchByTitle" :key="film.id" class="flex flex-col
                ">
                    <router-link :to="'/film/' + film.id" class="text-decoration-none">
                        <div class="bg-white flex flex-row p-2 w-[190px]"
                        >
                            <img :src="film.image" class="w-[70px] h-[100px]
                            mr-2
                            ">
                            <div class="flex flex-col">
                                <p class="font-bold text-sm text-black">{{ film.title }}</p>
                                <div class="flex flex-row">
                                    <p class="font-bold text-xs text-gray-500 mr-2">{{ film.published_at }}</p>
                                    <p class="font-bold text-xs text-gray-500">{{ film.category }}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                    
                    
                </div>
            </div>
            <div v-if="filmsError">
                {{filmsError.message}}
            </div>
        </div>
        </div>

       
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useQuery} from '@vue/apollo-composable'
import {gql} from '@apollo/client/core'


const check = ref(true)

const navBarItems = ref([
    {
        name:'movies',
        link:'/movies'
    },
    {
        name:'films',
        link:'/films'
    },
    {
        name:'series',
        link:'/series'
    }
])

const title = ref('')

const variables = ref({
    title:''
})

const {
    loading:filmsLoading,
    result:filmsResult,
    refetch:filmsRefetch,
    error:filmsError
} = useQuery(gql`
    query($title: String) {
        searchByTitle(title: $title) {
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

const search = () =>{
    variables.value.title = title.value
    check.value = true
}
</script>