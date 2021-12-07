import { createStore } from 'vuex'

export default createStore({
  actions: {
    async FETCH_USERS(ctx){
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await res.json()
      ctx.commit('UPDATE_USERS', users)
    },
    SET_MOBILE({commit}){
      commit('SWITCH_MOBILE')
    },
    SET_DESKTOP({commit}){
      commit('SWITCH_DESKTOP')
    }
  },
  mutations: {
    UPDATE_USERS(state, users){
      state.users = users;
    },
    SWITCH_MOBILE(state){
      state.isMobile = true;
      state.isDesktop = false;
    },
    SWITCH_DESKTOP(state){
      state.isMobile = false;
      state.isDesktop = true;
    }
  },
  state: {
    TeamCards : [
      {title: 'Kris Jeppesen', icon: 'Ellipse.svg', text: 'Web Project Manager', email: 'kris@dacode.se',id: 1},
      {title: 'Kevin Jeppesen', icon: 'Ellipse.svg', text: 'Python Developer', email: 'kevin@dacode.se', id: 2},
      {title: 'Shane Jeppesen', icon: 'Ellipse.svg', text: 'Fullstack Developer', email: 'shane@dacode.se', id: 3},
      {title: 'Kevin Jeppesen', icon: 'Ellipse.svg', text: 'Web Project Manager', email: 'kevin@dacode.se', id: 4},
      {title: 'Kevin Jeppesen', icon: 'Ellipse.svg', text: 'Front-End Web Developer', email: 'kevin@dacode.se', id: 5},
      {title: 'Kevin Jeppesen', icon: 'Ellipse.svg', text: 'Front-End Web Developer', email: 'kevin@dacode.se', id: 6},
      {title: 'Maryna Jeppesen', icon: 'Ellipse.svg', text: 'Front-End Web Developer', email: 'maryna@dacode.se', id: 7},
      {title: 'Kevin Jeppesen', icon: 'Ellipse.svg', text: 'Front-End Web Developer', email: 'kevin@dacode.se', id: 8},
      {title: 'Doruk Jeppesen', icon: 'Ellipse.svg', text: 'Web Designer', email: 'doruk@dacode.se', id: 9},
      {title: 'Kevin Jeppesen', icon: 'Ellipse.svg', text: 'User Interface (UI) Designer', email: 'kevin@dacode.se', id: 10},
      {title: 'Kevin Jeppesen', icon: 'Ellipse.svg', text: 'Web Designer', email: 'kevin@dacode.se', id: 11},
      {title: 'Kevin Jeppesen', icon: 'Ellipse.svg', text: 'User Interface (UI) Designer', email: 'kevin@dacode.se', id: 12}
    ],
    AboutCards: [
      {title: 'Do millennials care about saving?', icon: 'item1.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',id: 1},
      {title: 'Do millennials care about saving?', icon: 'item2.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.', id: 2},
      {title: 'Do millennials care about saving?', icon: 'item3.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.', id: 3},
      {title: 'Do millennials care about saving?', icon: 'item4.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.', id: 4},
      {title: 'Do millennials care about saving?', icon: 'item5.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',  id: 5},
      {title: 'Do millennials care about saving?', icon: 'item6.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',  id: 6},
      {title: 'Do millennials care about saving?', icon: 'item7.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',  id: 7},
      {title: 'Do millennials care about saving?', icon: 'item8.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',  id: 8},
      {title: 'Do millennials care about saving?', icon: 'item9.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',  id: 9},
      {title: 'Do millennials care about saving?', icon: 'item10.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.', id: 10},
      {title: 'Do millennials care about saving?', icon: 'item11.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.',  id: 11},
      {title: 'Do millennials care about saving?', icon: 'item12.png', text: 'Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.', id: 12}
    ],
    ServicesCards: [
      {title: 'WordPress Site', icon: 'icon-1.svg', text: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', id: 1},
      {title: 'WordPress Plugin', icon: 'icon-2.svg', text: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', id: 2},
      {title: 'Website Redesign', icon: 'icon-3.svg', text: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', id: 3},
      {title: 'WordPress Site Optimization', icon: 'icon-4.svg', text: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', id: 4},
      {title: 'Search Engine Optimization', icon: 'icon-5.svg', text: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', id: 5},
      {title: 'Cross Platform Mobile App', icon: 'icon-6.svg', text: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut', id: 6}
    ],
    users: [],
    items: [
      {img: "Image.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '},
      {img: "img2.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '},
      {img: "image3.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '},
      {img: "Image.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '},
      {img: "img2.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '},
      {img: "image3.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '},
      {img: "Image.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '},
      {img: "img2.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '},
      {img: "image3.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '},
      {img: "Image.png", textSlide: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum '}
    ],
    isMobile: false,
    isDesktop: true,
  },
  getters:{
    TEAM (state){
      return state.TeamCards
    },
    ABOUT (state){
      return state.AboutCards
    },
    SERVICES(state){
      return state.ServicesCards
    },
    USERS(state){
      return state.users
    },
    SLIDER(state){
      return state.items
    },
    IS_MOBILE(state){
      return state.isMobile
    },
    IS_DESKTOP(state){
      return state.isDesktop
    }
  },
})
