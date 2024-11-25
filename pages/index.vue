<template>
  <div
    class="flex items-center justify-center gap-40 bg-backgroundImage bg-center bg-cover h-svh"
  >
    <div class="h-fit flex w-full flex-col lg:flex-row">
      <div class="w-1/2 hidden lg:block">
        <div
          class="logo font-fontLOGO text-white flex justify-center text-9xl font-extrabold"
        >
          CAT
        </div>

        <div class="w-fit flex m-auto flex-col gap-2">
          <div class="w-fit px-2 bg-backTextColor text-white text-2xl">
            We don't have the standards of a society
          </div>

          <div class="w-fit px-2 bg-backTextColor text-white text-2xl">
            that curbs freedoms, silences mouths
          </div>

          <div class="w-fit px-2 bg-backTextColor text-white text-2xl">
            and practices racism against
          </div>

          <div class="w-fit px-2 bg-backTextColor text-white text-2xl">
            minorities and the weak
          </div>
        </div>
      </div>

      <div
        class="logo text-8xl font-fontLOGO flex lg:hidden text-white justify-center sm:text-9xl font-extrabold"
      >
        CAT
      </div>

      <div class="lg:w-1/2 text-white">
        <div
          class="w-full sm:w-fit flex gap-3 mx-auto flex-col p-5 sm:p-10 rounded-3xl bg-log bg-opacity-40 backdrop-blur-log border border-white"
        >
          <div class="border-b-2 h-12 mb-2 border-white  w-full  sm:w-80 relative">
            <span class="absolute top-0 left-0 font-bold ml-2">Email</span>
            <span class="absolute top-0 right-0">ICON</span>
            <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
              <input
                type="text"
                class="h-8 w-full bg-transparent"
                value="sss"
                name=""
                id=""
              />
            </div>
          </div>

          <div class="border-b-2 h-12 mb-2 border-white w-full  sm:w-80 relative">
            <span class="absolute top-0 left-0 font-bold ml-2">Password</span>
            <span class="absolute top-0 right-0">ICON</span>
            <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
              <input
                type="password"
                class="h-8 w-full bg-transparent"
                value="sss"
                name=""
                id=""
              />
            </div>
          </div>

          <div
            class="h-14 w-full  sm:w-80 relative bg-slate-800 bg-opacity-90 hover:bg-slate-600 text-white flex justify-center items-center rounded-2xl"
          >
            <button class="w-full h-full font-bold text-xl">
              <nuxt-link
                :to="{ name: 'allposts' }"
                class="w-full flex justify-center items-center h-full"
                >login</nuxt-link
              >
            </button>
          </div>

          <div class="w-fit mx-auto cursor-pointer text-center">
            Forgotten Password ?
          </div>

          <div class="w-full  sm:w-80" v-if="false">
            We are working on activating this feature Now relax and try to
            remember your password
          </div>

          <hr />

          <div
            class="h-14 w-full  sm:w-80 relative bg-slate-800 bg-opacity-90 hover:bg-slate-600 text-white flex justify-center items-center rounded-2xl"
          >
            <button class="w-full h-full font-bold text-xl">
              <nuxt-link :to="{ name: 'signup' }">Create new account</nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
