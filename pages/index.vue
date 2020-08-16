<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">

      <div class="col-md-12">

        <div class="card">
          <div class="card-body">

             <ul class="list-group">
               <li class="list-group-item" v-for="(todos,index) in todos" :key="todos"><a href="#" @click="removeTodo(index)">{{todos}}</a></li>
             </ul>

              <form @submit.prevent="sub" class="mt-5">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Add a Todo" v-model="todo">
                  <button type="submit" class="btn btn-outline-primary mt-3">Add Todo</button>
                </div>
              </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: ["Do a Workout", "Coding", "Watch a Tutorial", "Learning"],
      todo: "",
    };
  },
  mounted() {
    alert(this.$store.state.todos);
  },
  methods: {
    sub() {
      if (this.todo) {
        this.todos.push(this.todo);
        this.$store.commit("addTodo", this.todo);
        this.todo = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      // OR
      // this.$delete(this.todos, index)
    },
  },
};
</script>

<style>
a:hover {
  text-decoration: none;
}
</style>
