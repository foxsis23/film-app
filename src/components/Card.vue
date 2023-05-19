<template>
<div class="m-4 flex flex-col justify-content-center">
    <router-link :to="'/film/' + props.id">
        <div class="relative">
            <img :src="props.image" class="h-[300px] w-[200px] hover:opacity-70 cursor-pointer"
            @mouseenter="check = true"
            @mouseleave="check = false"
            >
            <img src="https://www.gov.br/pt-br/midias-agorabrasil/play.png/@@images/image.png" class="
            absolute top-[50%] bottom-[40%] w-[50px] right-[50%] left-[40%]"
            @mouseenter="check = true"
            v-if="check"
            >
        </div>
    </router-link>
 
  
 
  <div class="card-body">
    <h1 class="font-bold text-sm max-w-[150px] mt-2 h-[40px]">{{ props.title }}</h1>
    <div class="flex flex-row">
        <p class="mr-2">{{ props.published_at }}</p>
        <p>{{ props.category }}</p>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

interface Card{
    title:string
    description:string
    rating:string
    published_at:string
    category:String
    image:string
    id:string
}

const props = defineProps<Card>()

const check = ref(false)
</script>
