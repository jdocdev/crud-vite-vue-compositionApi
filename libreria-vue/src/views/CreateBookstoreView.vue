<template>
    <main>
        <form @submit.prevent="crearLibro">
            <div>
                <input v-model="nuevoLibro.titulo" placeholder="título" type="text" required />
                <input v-model="nuevoLibro.autor" placeholder="autor" type="text" required />
                <input v-model="nuevoLibro.ISBN" placeholder="ISBN" type="text" required />
                <input v-model="nuevoLibro.genero" placeholder="género" type="text" required />
                <input v-model="nuevoLibro.disponibilidad" placeholder="disponibilidad" type="text" required />
            </div>
            <button type="submit">Crear libro</button>
        </form>
    </main>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        // Refs para almacenar el estado
        const libros = ref([]);
        const nuevoLibro = ref({
            titulo: '',
            autor: '',
            ISBN: '',
            genero: '',
            precio: '',
            disponibilidad: ''
        });

        // Método para crear un nuevo libro
        const crearLibro = async () => {
            try {
                const response = await axios.post('http://localhost:3000/libros', nuevoLibro.value);
                setTimeout(() => {
                    alert('libro creado con éxito'); 
                }, 200);

                // Limpiar el formulario después de crear el libro
                nuevoLibro.value.titulo = '';
                nuevoLibro.value.autor = '';
                nuevoLibro.value.ISBN = '';
                nuevoLibro.value.genero = '';
                nuevoLibro.value.precio = '';
                nuevoLibro.value.disponibilidad = '';

                console.log('libro creado con éxito', response.data);
            } catch (error) {
                console.error('Error al crear el libro', error);
            }
        };

        // Retornar las propiedades y métodos necesarios para el componente
        return {
            libros,
            nuevoLibro,
            crearLibro,
        };
    },
};
</script>
