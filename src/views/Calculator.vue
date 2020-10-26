<template>
  <div class="container">
    <p class="title">Calculator</p>
    <div class="calculator">
      <input
        type="text"
        v-model="result"
        placeholder="0"
        readonly
      >
      <div class="wrapper">
        <div class="numbers">
          <button
            class="clear cell"
            @click="clean()"
          >
            C
          </button>
          <button
            class="delete-element clear cell"
            @click="deleteElement()"
          >
            <i class="fa fa-long-arrow-alt-left"></i>
          </button>
          <button
            v-for="num in numbers"
            :key="num"
            class="num cell"
            @click="input(num)"
          >
            {{ num }}
          </button>
          <button
            class="equally cell"
            @click="calc()"
          >
            =
          </button>
        </div>
        <div class="operations">
          <button
            v-for="operation in operations"
            :key="operation"
            class="operation cell"
            @click="input(operation)"
          >
            {{ operation }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: '',
      numbers: [7,8,9,4,5,6,1,2,3,0,'.'],
      operations: ['/','*','-','+']
    }
  },
  methods: {
    input(char) {
      if (this.result !== 0) {
        this.result = this.result.toString()
        this.result += char
      } else {
        this.result = char
      }
    },
    clean() {
      this.result = ''
    },
    deleteElement() {
      this.result = this.result.toString().slice(0, -1)
    },
    calc() {
      this.result = eval(this.result)
    }
  }
}
</script>

<style lang="scss" scoped>
.calculator {
  max-width: 250px;
  margin: 0 auto;
}
input {
  height: 50px;
  border: 1px solid #ccc;
  border-bottom: none;
  padding: 0 14px;
  text-align: end;
  width: 100%;
}
.wrapper {
  display: flex;
}
.cell {
  color: #fff;
  cursor: pointer;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  flex: 33%;
  font-size: 17px;
  height: 50px;
  transition: all .3s linear;
  @include _979 {
    font-size: 19px;
  }
  @include _768 {
    font-size: 21px;
  }
  @include _600 {
    font-size: 23px;
  }
  @include _480 {
    font-size: 25px;
  }
}
.numbers {
  display: flex;
  flex: 75%;
  flex-wrap: wrap;
}
.clear {
  background-color: $red;
  border: 1px solid #9e2e2a;
  border-right: none;
  &:hover {
    background-color: $darkred;
  }
}
.delete-element {
  flex: 66%;
}
.num {
  color: #000;
  background-color: #fff;
  &:hover {
    background-color: #e7e7e7;
  }
  &:nth-child(12),
  &:nth-child(13) {
    border-bottom: 1px solid #ccc;
  }
}
.equally {
  background-color: $blue;
  border: 1px solid #0a4e8a;
  &:hover {
    background-color: $darkblue;
  }
}
.operations {
  display: flex;
  flex: 25%;
  flex-wrap: wrap;
}
.operation {
  background-color: $orange;
  border: 1px solid #ad772a;
  border-bottom: none;
  flex: 100%;
  &:hover {
    background-color: $darkorange;
  }
  &:last-child {
    border-bottom: 1px solid $darkorange;
    height: 100px;
  }
}
.operation-procent {
  background-color: $orange;
  border: 1px solid #ad772a;
  border-right: none;
  &:hover {
    background-color: $darkorange;
  }
}
</style>