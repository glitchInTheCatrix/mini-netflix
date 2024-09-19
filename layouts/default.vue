<template>
    <div class="container">
        <Header />
        <main>
            <slot />
        </main>
        <footer class="footer">
            <h3>
                Made with &#x1F9E0; By Anuj
            </h3>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 100%;
}
footer.footer{
    padding-top: 2rem;
    text-align: center;
}
</style>