<template>
  <main>
    <table>
      <thead>
        <tr>
          <th>título</th>
          <th>autor</th>
          <th>ISBN</th>
          <th>género</th>
          <th>precio</th>
          <th>disponibilidad</th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="libro in libros" key="libro.id">
          <td>{{ libro.titulo }}</td>
          <td>{{ libro.autor }}</td>
          <td>{{ libro.ISBN }}</td>
          <td>{{ libro.genero }}</td>
          <td>{{ libro.precio }}</td>
          <td>{{ libro.disponibilidad }}</td>
          <div>
            <button @click="eliminarLibro(libro.id, libro.titulo)">
              Eliminar
            </button>
            <RouterLink :to="{ path: 'editbook/' + libro.id }">Editar</RouterLink>
          </div>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    // Definir un ref para libros
    const libros = ref([]);

    // Método para listar libros
    const listarLibros = async () => {
      try {
        const response = await axios.get("http://localhost:3000/libros");
        libros.value = response.data;
      } catch (error) {
        console.error("Error al listar los libros", error);
      }
    };

    // Método para eliminar un libro
    const eliminarLibro = async (id, titulo) => {
      const confirmDelete = window.confirm(
        `¿Estás seguro de eliminar el libro ${titulo}?`
      );
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:3000/libros/${id}`);
          listarLibros();
        } catch (error) {
          console.error("Error al eliminar el libro", error);
        }
      }
    };

    // Llamar a listarLibros en el montaje del componente
    onMounted(() => {
      listarLibros();
    });

    // Retornar las propiedades y métodos necesarios para el componente
    return {
      libros,
      listarLibros,
      eliminarLibro,
    };
  },
};
</script>
