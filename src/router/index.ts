import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Top from "@/components/pages/Top.vue";
import List from "@/components/pages/List.vue";
import Cart from "@/components/pages/Cart.vue";
import Modal from "@/components/pages/Modal.vue";
import Mouse from "@/components/pages/Mouse.vue";
import Chat from "@/components/pages/Chat.vue";
import Video from "@/components/pages/Video.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Top
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal
  },
  {
    path: "/mouse",
    name: "Mouse",
    component: Mouse
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat
  },
  {
    path: "/video",
    name: "Video",
    component: Video
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
