import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {id: 1, title: 'Создать калькулятор', completed: true},
      {id: 2, title: 'Создать TodoList', completed: true},
      {id: 3, title: 'Закончить сайт с приложениями', completed: false},
      {id: 4, title: 'Изучить HTML/CSS', completed: true},
      {id: 5, title: 'Изучить JavaScript', completed: false}
    ],
    filterTasks: 'all',
    imagesData: [
      {id: 1, img: require('../assets/Images/img1.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 2, img: require('../assets/Images/img2.svg'), color: 'yellow', hands: 'not-hands', emotion: 'laughter'},
      {id: 3, img: require('../assets/Images/img3.svg'), color: 'yellow', hands: 'not-hands', emotion: 'surprise'},
      {id: 4, img: require('../assets/Images/img4.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 5, img: require('../assets/Images/img5.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 6, img: require('../assets/Images/img6.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 7, img: require('../assets/Images/img7.svg'), color: 'yellow', hands: 'not-hands', emotion: 'indifference'},
      {id: 8, img: require('../assets/Images/img8.svg'), color: 'yellow', hands: 'not-hands', emotion: 'indifference'},
      {id: 9, img: require('../assets/Images/img9.svg'), color: 'yellow', hands: 'hands', emotion: 'joy'},
      {id: 10, img: require('../assets/Images/img10.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sadness'},
      {id: 11, img: require('../assets/Images/img11.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 12, img: require('../assets/Images/img12.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 13, img: require('../assets/Images/img13.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 14, img: require('../assets/Images/img14.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 15, img: require('../assets/Images/img15.svg'), color: 'yellow', hands: 'not-hands', emotion: 'anger'},
      {id: 16, img: require('../assets/Images/img16.svg'), color: 'yellow', hands: 'hands', emotion: 'indifference'},
      {id: 17, img: require('../assets/Images/img17.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sleeping'},
      {id: 18, img: require('../assets/Images/img18.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 19, img: require('../assets/Images/img19.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 20, img: require('../assets/Images/img20.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 21, img: require('../assets/Images/img21.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sleeping'},
      {id: 22, img: require('../assets/Images/img22.svg'), color: 'white', hands: 'not-hands', emotion: 'others'},
      {id: 23, img: require('../assets/Images/img23.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 24, img: require('../assets/Images/img24.svg'), color: 'green', hands: 'not-hands', emotion: 'others'},
      {id: 25, img: require('../assets/Images/img25.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 26, img: require('../assets/Images/img26.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 27, img: require('../assets/Images/img27.svg'), color: 'yellow', hands: 'not-hands', emotion: 'surprise'},
      {id: 28, img: require('../assets/Images/img28.svg'), color: 'yellow', hands: 'hands', emotion: 'surprise'},
      {id: 29, img: require('../assets/Images/img29.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sadness'},
      {id: 30, img: require('../assets/Images/img30.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sadness'},
      {id: 31, img: require('../assets/Images/img31.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sadness'},
      {id: 32, img: require('../assets/Images/img32.svg'), color: 'yellow', hands: 'not-hands', emotion: 'laughter'},
      {id: 33, img: require('../assets/Images/img33.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 34, img: require('../assets/Images/img34.svg'), color: 'green', hands: 'not-hands', emotion: 'others'},
      {id: 35, img: require('../assets/Images/img35.svg'), color: 'yellow', hands: 'not-hands', emotion: 'anger'},
      {id: 36, img: require('../assets/Images/img36.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 37, img: require('../assets/Images/img37.svg'), color: 'yellow', hands: 'not-hands', emotion: 'surprise'},
      {id: 38, img: require('../assets/Images/img38.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 39, img: require('../assets/Images/img39.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 40, img: require('../assets/Images/img40.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 41, img: require('../assets/Images/img41.svg'), color: 'yellow', hands: 'not-hands', emotion: 'laughter'},
      {id: 42, img: require('../assets/Images/img42.svg'), color: 'yellow', hands: 'hands', emotion: 'laughter'},
      {id: 43, img: require('../assets/Images/img43.svg'), color: 'yellow', hands: 'not-hands', emotion: 'laughter'},
      {id: 44, img: require('../assets/Images/img44.svg'), color: 'yellow', hands: 'not-hands', emotion: 'laughter'},
      {id: 45, img: require('../assets/Images/img45.svg'), color: 'yellow', hands: 'not-hands', emotion: 'cry'},
      {id: 46, img: require('../assets/Images/img46.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 47, img: require('../assets/Images/img47.svg'), color: 'yellow', hands: 'not-hands', emotion: 'love'},
      {id: 48, img: require('../assets/Images/img48.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 49, img: require('../assets/Images/img49.svg'), color: 'yellow', hands: 'not-hands', emotion: 'indifference'},
      {id: 50, img: require('../assets/Images/img50.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 51, img: require('../assets/Images/img51.svg'), color: 'yellow', hands: 'not-hands', emotion: 'love'},
      {id: 52, img: require('../assets/Images/img52.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sadness'},
      {id: 53, img: require('../assets/Images/img53.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 54, img: require('../assets/Images/img54.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sadness'},
      {id: 55, img: require('../assets/Images/img55.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 56, img: require('../assets/Images/img56.svg'), color: 'white', hands: 'not-hands', emotion: 'joy'},
      {id: 57, img: require('../assets/Images/img57.svg'), color: 'yellow', hands: 'not-hands', emotion: 'anger'},
      {id: 58, img: require('../assets/Images/img58.svg'), color: 'yellow', hands: 'hands', emotion: 'others'},
      {id: 59, img: require('../assets/Images/img59.svg'), color: 'yellow', hands: 'not-hands', emotion: 'laughter'},
      {id: 60, img: require('../assets/Images/img60.svg'), color: 'yellow', hands: 'not-hands', emotion: 'laughter'},
      {id: 61, img: require('../assets/Images/img61.svg'), color: 'yellow', hands: 'not-hands', emotion: 'others'},
      {id: 62, img: require('../assets/Images/img62.svg'), color: 'yellow', hands: 'hands', emotion: 'indifference'},
      {id: 63, img: require('../assets/Images/img63.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sadness'},
      {id: 64, img: require('../assets/Images/img64.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sadness'},
      {id: 65, img: require('../assets/Images/img65.svg'), color: 'red', hands: 'not-hands', emotion: 'laughter'},
      {id: 66, img: require('../assets/Images/img66.svg'), color: 'yellow', hands: 'not-hands', emotion: 'sadness'},
      {id: 67, img: require('../assets/Images/img67.svg'), color: 'yellow', hands: 'not-hands', emotion: 'cry'},
      {id: 68, img: require('../assets/Images/img68.svg'), color: 'yellow', hands: 'not-hands', emotion: 'cry'},
      {id: 69, img: require('../assets/Images/img69.svg'), color: 'yellow', hands: 'not-hands', emotion: 'laughter'},
      {id: 70, img: require('../assets/Images/img70.svg'), color: 'yellow', hands: 'not-hands', emotion: 'joy'},
      {id: 71, img: require('../assets/Images/img71.svg'), color: 'yellow', hands: 'not-hands', emotion: 'indifference'},
      {id: 72, img: require('../assets/Images/img72.svg'), color: 'white', hands: 'not-hands', emotion: 'anger'},
      {id: 73, img: require('../assets/Images/img73.svg'), color: 'red', hands: 'not-hands', emotion: 'anger'},
      {id: 74, img: require('../assets/Images/img74.svg'), color: 'red', hands: 'not-hands', emotion: 'anger'},
      {id: 75, img: require('../assets/Images/img75.svg'), color: 'red', hands: 'not-hands', emotion: 'anger'},
      {id: 76, img: require('../assets/Images/img76.svg'), color: 'yellow', hands: 'not-hands', emotion: 'anger'},
      {id: 77, img: require('../assets/Images/img77.svg'), color: 'yellow', hands: 'not-hands', emotion: 'laughter'}
    ],
    filterByEmotion: 'all',
    filterByColor: 'all',
    filterByHands: 'all',
    currentPage: 0
  },
  mutations: {
    REMOVE_TASK: (state, index) => {
      state.tasks.splice(index, 1)
    },
    ADD_TASK: (state) => {
      if (state.tasks.title.trim().length > 0) {
        state.tasks.push({
          id: state.tasks.id,
          title: state.tasks.title,
          completed: false
        })
      }
      state.tasks.title = ''
    },
    REMOVE_TASKS: (state) => {
      state.tasks = [];
    },
    REMOVE_COMPLETED_TASKS: (state) => {
      state.tasks = state.tasks.filter(item => !item.completed);
    },
    NEXT_PAGE: (state) => {
      state.currentPage++
    },
    PREV_PAGE: (state) => {
      state.currentPage--
    },
    RESET_FILTER: (state) => {
      state.filterByEmotion = 'all',
      state.filterByColor = 'all',
      state.filterByHands = 'all'
    }
  },
  actions: {
    REMOVE_FROM_LIST({commit}, index) {
      commit('REMOVE_TASK', index)
    },
    ADD_TO_LIST({commit}) {
      commit('ADD_TASK')
    },
    REMOVE_TASKS({commit}) {
      commit('REMOVE_TASKS')
    },
    REMOVE_COMPLETED_TASKS({commit}) {
      commit('REMOVE_COMPLETED_TASKS')
    },
    NEXT_PAGE({commit}) {
      commit('NEXT_PAGE')
    },
    PREV_PAGE({commit}) {
      commit('PREV_PAGE')
    },
    RESET_FILTER({commit}) {
      commit('RESET_FILTER')
    }
  },
  getters: {
    filterImoticons(state) {
      const all = state.imagesData,
            emotion = state.filterByEmotion,
            color = state.filterByColor,
            hands = state.filterByHands

      if (emotion === 'all' && color === 'all' && hands === 'all') {
        return all
      }
      else if (emotion === 'all' && color === 'all') {
        return all.filter(item => item.hands === hands)
      }
      else if (color === 'all' && hands === 'all') {
        return all.filter(item => item.emotion === emotion)
      }
      else if (emotion === 'all' && hands === 'all') {
        return all.filter(item => item.color === color)
      }
      else if (emotion === 'all') {
        return all.filter(item => item.color === color)
                  .filter(item => item.hands === hands)
      }
      else if (color === 'all') {
        return all.filter(item => item.emotion === emotion) 
                  .filter(item => item.hands === hands)
      }
      else if (hands === 'all') {
        return all.filter(item => item.emotion === emotion)
                  .filter(item => item.color === color)
      }
      else {
        return all.filter(item => item.emotion === emotion)
                  .filter(item => item.color === color)
                  .filter(item => item.hands === hands)
      }
    }
  },
  modules: {
  }
})
