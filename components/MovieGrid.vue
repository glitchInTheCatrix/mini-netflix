<template lang="html">
    <h1>
        See What's Next
    </h1>
    
    <Slider :movies="movies.Search" />
</template>
<script setup lang="ts">
const {data:movies}=useMyFetch('',{
    params:{
        s:'action'
    }
})
console.log(movies);

</script>
<style lang="scss"></style>