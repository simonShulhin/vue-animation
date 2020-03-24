<template>
  <div class="alert alert-success text-center">
    <h1>That's Correct!</h1>
    <hr />
    <button class="btn btn-primary" @click="reloadPage">
      Next Question
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    reloadPage() {
      return this.$emit('confirmed', 'question');
    },
  },
  created() {
    this.$emit('change-score');
  },
};
</script>

<style></style>
