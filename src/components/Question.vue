<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title text-center">
        What's {{ firstNumber }} {{ operator }} {{ secondNumber }} ?
      </h3>
    </div>
    <div class="panel-body">
      <div class="col-xs-12 col-sm-6 text-center">
        <button
          class="btn btn-primary btn-lg"
          style="margin: 10px"
          @click="getBoolean(buttons[0].isCorrect)"
        >
          {{ buttons[0].number }}
        </button>
      </div>
      <div class="col-xs-12 col-sm-6 text-center">
        <button
          class="btn btn-primary btn-lg"
          style="margin: 10px"
          @click="getBoolean(buttons[1].isCorrect)"
        >
          {{ buttons[1].number }}
        </button>
      </div>
      <div class="col-xs-12 col-sm-6 text-center">
        <button
          class="btn btn-primary btn-lg"
          style="margin: 10px"
          @click="getBoolean(buttons[2].isCorrect)"
        >
          {{ buttons[2].number }}
        </button>
      </div>
      <div class="col-xs-12 col-sm-6 text-center">
        <button
          class="btn btn-primary btn-lg"
          style="margin: 10px"
          @click="getBoolean(buttons[3].isCorrect)"
        >
          {{ buttons[3].number }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstNumber: _.random(100),
    secondNumber: _.random(100),
    buttons: [
      { number: _.random(200), isCorrect: false },
      { number: _.random(200), isCorrect: false },
      { number: _.random(200), isCorrect: false },
      { number: _.random(200), isCorrect: false },
    ],
    operator: '+',
  }),

  methods: {
    getBoolean(answer) {
      return answer
        ? this.$emit('change-component', 'answer')
        : alert('Try again, this is not wright answer!');
    },
  },
  created() {
    const randomNumber = _.random(3);
    this.buttons[randomNumber].number = this.firstNumber + this.secondNumber;
    this.buttons[randomNumber].isCorrect = true;
  },
};
</script>

<style></style>
