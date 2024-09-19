<template lang="html">
    <nuxt-link :to="'/movie/' + movie.imdbID">

        <div class="image-holder box">

            <img :src="movie.Poster" alt="">

        </div>
    </nuxt-link>
</template>
<script setup lang="ts">
const props = defineProps({
    movie: Object
})
</script>
<style lang="scss">
.image-holder {
    height: 300px;
    width: 200px;
    overflow: hidden;
    position: relative;
    transition: cubic-bezier(0.39, 0.575, 0.565, 1);
    box-shadow: 0;
    @media (#{$phone}) {
    width: auto;
    height: auto;
}
    &:hover {
        box-shadow: 0px 0px 0px 5px white;
    }

    img {
        height: 100%;
        width: 100%;

        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

        position: relative;
        transform: scale(1);

        &:hover {
            transform: scale(1.2);
        }

    }

}

.box {
    border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.33);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 8px 12px rgba(255, 255, 255, 0.5);
    }
}
</style>