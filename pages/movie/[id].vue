<template lang="html">
    <div class="movie-info-container" >
        <div class="side-bar">
            <img :src="movie?.Poster" alt="" />
             

        </div>
        <div class="main-content">
            <h1>
                {{ movie?.Title }}
            </h1>
            <h3 v-if="movie">Plot</h3>
            <p>
                {{ movie?.Plot }}
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
const id = route.params.id
const { data: movie } = useApi('', {
    params: {
        i: id
    }
})
</script>
<style lang="scss" scoped>
.movie-info-container {
    min-height: 400px;
    display: grid;
    grid-template-columns: 33% 66%;
    @media (#{$phone}) {
        display: block;
    }
}
</style>