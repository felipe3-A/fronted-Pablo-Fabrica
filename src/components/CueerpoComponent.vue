<template>
  <main>
    <header>
      <h2>Tabla Dasboard o algo asi</h2>
    </header>
    <section>
      <article class="lado1">
        <ul>
          <p><router-link to="/HomeView">Registrar usuario</router-link></p>
          <p><router-link to="/ver">Ver usuarios</router-link></p>
          <p><router-link to="/crud">Ver crud</router-link></p>
        </ul>
      </article>
      <article class="lado2">
        <div class="content">  
          <router-view />
        </div>
      </article>
    </section>
  </main>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  background-color: rgb(27, 172, 27);
  height: 5vh;
}
section {
  display: flex;
  height: 50vh;
}
.lado1 {
  background-color: rgb(6, 6, 45);
  width: 30%;
}
.lado2 {
  background-color: rgb(2, 66, 31);
  width: 70%;
}
.content {
  width: 70%;
  margin: auto;
  margin-top:40px ;
}
p{
  margin-top: 29px;
}
main{
  width: 90%;
  margin: auto;
}
</style>