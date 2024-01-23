<template>
    <main>
        <form @submit.prevent="actualizarLibro">
            <div>
                <input v-model="editarLibro.titulo" placeholder="título" type="text" required />
                <input v-model="editarLibro.autor" placeholder="autor" type="text" required />
                <input v-model="editarLibro.ISBN" placeholder="ISBN" type="text" required />
                <input v-model="editarLibro.genero" placeholder="género" type="text" required />
                <input v-model="editarLibro.disponibilidad" placeholder="disponibilidad" type="text" required />
            </div>
            <button type="submit">Guardar Cambios</button>
        </form>
    </main>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
    setup() {
        const router = useRouter();
        // Refs para almacenar el estado
        const libros = ref([]);
        const editarLibro = ref({
            id: null,
            titulo: '',
            autor: '',
            ISBN: '',
            genero: '',
            precio: '',
            disponibilidad: ''
        });
        // Método para cargar el libro que se va a editar
        const cargarLibro = async () => {
            const libroId = useRoute().params.id;
            try {
                const response = await axios.get(`http://localhost:3000/libros/${libroId}`);
                editarLibro.value = response.data;
            } catch (error) {
                console.error("Error al cargar el libro para editar:", error);
            }
        };
        // Método para actualizar el libro
        const actualizarLibro = async () => {
            try {
                await axios.put(`http://localhost:3000/libros/${editarLibro.value.id}`,editarLibro.value);
                setTimeout(() => {
                    alert("libro editado con éxito");
                }, 500);
                router.push("/");
                console.log("libro editado con éxito:", editarLibro.value);
            } catch (error) {
                console.error("Error al editar el libro:", error);
            }
        };
        // Llamar a cargarLibro en el montaje del componente
        onMounted(() => {
            cargarLibro();
        });
        // Retornar las propiedades y métodos necesarios para el componente
        return {
            libros,
            editarLibro,
            cargarLibro,
            actualizarLibro,
        };
    },
};
</script>
