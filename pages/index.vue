<template>
  <div class="container mt-5">
    <div class="d-flex flex-row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="(todo, index) in todos"
                :key="index"
              >
                <a href="#" @click="removeTodo(todo, index)">{{ todo.todo }}</a>
              </li>
            </ul>

            <form @submit.prevent="sub" class="mt-5">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Add a Todo"
                  v-model="todo"
                />
                <button type="submit" class="btn btn-outline-primary mt-3">
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "firebase/firestore";

export default {
  // to Fix Warning
  data() {
    return {
      todo: ""
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  mounted() {
    // Firstly Triggered when we go to the page
    // alert(this.$store.state.todos);
    firebase
      .firestore()
      .collection("todos")
      .get()
      .then(res => {
        res.forEach(x => {
          this.$store.commit("setTodo", x.data());
        });
      });
  },
  methods: {
    sub() {
      if (this.todo) {
        firebase
          .firestore()
          .collection("todos")
          .add({})
          .then(res => {
            firebase
              .firestore()
              .collection("todos")
              .doc(res.id)
              .set({
                todo: this.todo,
                id: res.id
              })
              .then(() => {
                // this.todos.push(this.todo);
                // this.$store.commit("addTodo", this.todo);
                this.$store.commit("addTodo", { todo: this.todo, id: res.id });
                this.todo = "";
              });
          });
      }
    },
    removeTodo(todo, index) {
      // this.todos.splice(index, 1);
      // OR
      // this.$delete(this.todos, index)
      firebase
        .firestore()
        .collection("todos")
        .doc(todo.id)
        .delete()
        .then(() => {
          alert("Succesfully Deleted Document");
          this.$store.commit("removeTodo", index);
        });
    }
  }
};
</script>

<style>
a:hover {
  text-decoration: none;
}
</style>
