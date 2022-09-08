
<template>
  <div>
    <h2>
      Shopify connect
    </h2>
    <div class="card">
      <button type="button" @click="handleShopInfo">Get shop info</button>
      <p>
        {{shopInfo}}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from "@vue/runtime-core";
import createApp from "@shopify/app-bridge";

import { Redirect } from "@shopify/app-bridge/actions";

import { info } from "./api/shop";
import { ref } from "vue";

const shopInfo = ref(null);

const url = new URL(window.location.href);
const urlParams = new URLSearchParams(url.search);
const host = urlParams.get("host") || "";
const embedded= urlParams.get("embedded") || "";
const apiKey = "52b6e1a791723dc08f94af58c8d93e92";
//get the host from backend
const permissionUrl = "https://backend.test/install?" + urlParams.toString();
console.log(permissionUrl);
onMounted(() => {
  const shopifyApp = createApp({
      apiKey: apiKey,
      host,
    });
  if (!urlParams.get("s")) {
    window.location.href = permissionUrl;
    //Redirect.create(shopifyApp).dispatch(Redirect.Action.REMOTE, permissionUrl);
  } else {
   
    window["app-bridge-app"] = shopifyApp;
    console.log(222222)
  }
});
const handleShopInfo = () => {
  info().then(res => {
    console.log('res====', res)
    shopInfo.value = res.data
  })
}
</script>
  
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
