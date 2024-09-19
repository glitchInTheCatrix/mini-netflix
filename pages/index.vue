<template lang="html">
    <div class="container">

        <hgroup>
            <h1>
                BIGFLIX
            </h1>
        </hgroup>
        <MovieGrid />
    </div>

</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.container{
    max-width: 100%;
    hgroup{
     h1{
         color: $theme-color;
         text-align: center;
         font-size: 4rem;
     }
    }
    div{
     padding: 2rem;
    }

}
</style>