<template>
    <div>
        <div id="dishContainer">
            <p>{{dishName}}</p>
            <p>{{dishPrice}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'MenuSubComp',
        props : {
            dishName : String,
            dishPrice : String,
            category : String
        },
    }
</script>

<style scoped>
#container {
    margin: auto;
    width: 75%;
}

#dishContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 1vw;
}
</style>