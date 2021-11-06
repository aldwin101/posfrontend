<template>
    <div id="container">
        <div class="tableContainer">
            <h1>Table 1</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 2</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 3</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 4</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 5</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 6</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 7</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 8</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 9</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 10</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 11</h1>
        </div>
        <div class="tableContainer">
            <h1>Table 12</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'TableComp',
    }
</script>

<style scoped>
#container {
    margin: 0 20vw 0 20vw;
    gap: 2vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 100vh;
    justify-items: center;
    align-items: center;
}
.tableContainer {
    background-color: rgb(57, 104, 145);
    border-radius: 5vw;
    width: 20vw;
    height: 15vh;
    text-align: center;
    display: table;
}
h1 {
    display: table-cell;
    vertical-align: middle;
    color: #f0f8ff;
    background-color: transparent;
}

</style>