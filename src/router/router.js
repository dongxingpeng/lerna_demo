const  Home =  ()=> import(/* webpackChunkName: "home" */ '../views/Home.vue');
const urlRouter = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
];
export default urlRouter;