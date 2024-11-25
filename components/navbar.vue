<template>
  <div
    class="nav rounded-3xl flex justify-evenly items-center h-20 bg-white shadow-xl text-gray-500"
  >
    <div
      class="logo text-3xl w-20 text-center font-bold cursor-pointer"
      @click="useRouter().push({ name: 'allposts' })"
    >
      CAT
    </div>

    <div
      class="logo text-2xl w-20 text-center h-full items-center flex justify-center cursor-pointer"
    >
      <nuxt-link
        :to="{ name: 'allposts' }"
        class="w-full flex justify-center items-center h-full hover:bg-gray-100 rounded-lg"
      >
        <i class="bx bx-home w-full"></i>
      </nuxt-link>
    </div>

    <div
      class="logo text-2xl w-20 text-center h-full items-center flex justify-center cursor-pointer"
    >
      <nuxt-link
        :to="{ name: 'profile' }"
        class="w-full flex justify-center items-center h-full hover:bg-gray-100 rounded-lg"
      >
        <i class="bx bxs-user"></i>
      </nuxt-link>
    </div>

    <div
      class="logo text-2xl w-20 text-center h-full items-center flex justify-center cursor-pointer"
    >
      <nuxt-link
        :to="{ name: 'index' }"
        class="w-full flex justify-center items-center h-full hover:bg-gray-100 rounded-lg"
      >
        <i class="bx bx-power-off"></i>
      </nuxt-link>
    </div>
  </div>
</template>

<style>
.router-link-active {
  color: #2b5fc7;
  border-bottom: 4px solid #2b5fc7;
}
</style>
