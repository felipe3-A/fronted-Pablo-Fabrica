<template>
    <main>
        <h2>Registrar Nuevo Usuario</h2>
        <!-- PASO 3: Crear la Intefaz -->
        <form class="borde" @submit='postUser()'>
            <div class="mb-3">
                <label for="nomUser" class="form-label">Nombre</label>
                <input type="text" id="nomUser" class="form-control" v-model="usuarioNuevo.name">
            </div>
            <div class="mb-3">
                <label for="cityUser" class="form-label">Ciudad</label>
                <input type="text" id="cityUser" class="form-control" v-model="usuarioNuevo.city">
            </div>
            <div class="mb-3">
                <label for="rolUser" class="form-label">Rol</label>
                <input type="text" id="rolUser" class="form-control" v-model="usuarioNuevo.rol">
            </div>
            <br>
            <button class="btn btn-primary">Crear</button>
        </form>
    </main>
</template>

<script>
import axios from 'axios';
export default {
    name:'PostComponent',
    data() {
        return { // PASO 1
            // Crear variable para almacenar los datos que se enviaran a la API
            // los campos estaran vacios por que se insertan desde un formulario
            usuarioNuevo: {
                name:'',
                city: '',
                rol: ''
            }
        }
    },
    methods:{ // PASO 2:se crea el metodo con el nombre postUser
        postUser() {
            axios // con el metodo POST se enviaran los datos a la API
                  // los datos se envian a la API desde la variable UsuarioNuevo
                .post('http://localhost:3000/api/usuarios', this.usuarioNuevo)
                // se podran ver por consola una vez se envien
                .then((response) => console.log(response))
        }
    }
}
</script>
<style scoped>

</style>
