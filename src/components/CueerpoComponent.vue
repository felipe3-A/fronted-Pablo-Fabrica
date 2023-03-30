<template>
    <main>
        <header>
            Encabesado
        </header>
        <section>
            <article class="lado1">
               <ul>
             <router-link to="/HomeView">Ver crud</router-link>
                <li>Mostrar usuarios</li>
                <li>Agregar usuarios</li>
                
               </ul>
            </article>
            <article class="lado2">
              <router-view />
            </article>

        </section>
    </main>
</template>
<script>
export default {

}
</script>
<style scoped>
header{
    background-color: rgb(27, 172, 27);
    height: 5vh;
}
section{
    background-color: aqua;
    display: flex;
}
.lado1{
    background-color: rgb(39, 39, 211);
    width: 30%;
    height: 20vh;
}
.lado2{
    background-color: orangered;
    width: 70%;
}
</style>