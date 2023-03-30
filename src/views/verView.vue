<template>
    <div>
        <!-- PASO 3. Crear la Interfaz para mostrar los datos -->
        <h1> Listado de Usuarios</h1>
        <!-- // crear la Tabla para organizar los Datos -->
        <table class="table table-primary table-bordered border-primary">
            <!-- crear encabezados para los Titulos -->
            <thead>
                <tr class="table-warning">
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>CIUDAD</td>
                    <td>ROL</td>
                    <td>ACCION</td>
                </tr>
            </thead>
            <!-- // crear el cuerpo de la tabla para ubicar los datos -->
            <tbody>
                <!-- // Recorrer los datos de la Variable Usuarios mediante V-for -->
                <tr v-for="usuario in usuarios" v-bind:key="usuario">
                    <!-- // interpolar los datos del arreglo en cada celda -->
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.name }}</td>
                    <td>{{ usuario.city }}</td>
                    <td>{{ usuario.rol }}</td>
                    <td>
                        <input type="button" value="Editar" class="btn btn-primary">
                        <input type="button" value="Elimiinar" class="btn btn-danger">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'verView',
    data(){
        return{
            // // PASO 1. Crear variable para guardar los datos de la API
            usuarios: []
        }
    },
    // PASO 2. crear el metodo para estraer los datos de la API
    async mounted(){
        // hacer la peticion GET a la ruta de la API 
        await this.axios.get('http://localhost:3000/api/usuarios')
        // devuelve la promesa con un resultado (response)
        .then(response => {
            // guardar en la variable usuarios la respuesta obtenida
            this.usuarios = response.data;
            // si se quiere ver el resultado en consola
            console.log(response.data)
        }) //Mostrar por consola el error
        .catch((e) => {
        console.log(e)      
    });
    }
}
</script>
<style scoped>

</style>