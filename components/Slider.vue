<template lang="html">
    <div>
        <ul class="movie-grid">
            <!-- {{ props.movies }}   -->
            <li class="movie-list-item" v-for="movie in props.movies">
                <!-- {{  movie.Title }} -->
             <MovieGridItem :movie="movie"  />
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import MovieGridItem from './MovieGridItem.vue';

const props = defineProps({
    movies: Array
});
</script>
<style lang="scss" scoped>
.movie-grid {
    display: grid;
    list-style-type: none;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: 100%;
    padding: 0;

    .movie-list-item {
        color: white;
        font-family: 'Courier New', Courier, monospace;
        padding: 1rem;
        cursor: pointer
    }
    @media (#{$phone}) {
        display: block;
    }
}
</style>