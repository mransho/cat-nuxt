<template>
  <div class="container mx-auto px-3">
    <navbar />

    <div
      class="flex mt-4 w-100 max-w-5xl mx-auto bg-white border border-gray-200 rounded-3xl"
    >
      <div class="img bg-red-300 w-full h-60 md:h-96 relative rounded-t-3xl">
        <img
          src="../public/cover.png"
          alt=""
          class="w-full h-full object-cover rounded-t-3xl"
        />

        <div
          class="bg-white h-40 md:h-28 flex items-end md:items-center md:justify-end font-bold text-2xl shadow-lg rounded-b-3xl"
        >
          <div class="w-full md:w-3/4 flex">
            <div
              class="mb-6 md:mb-0 text-black text-center md:text-start md:pl-5"
            >
              <div>Mahmoud Mostafa</div>
              <div class="font-semibold text-sm text-gray-400">
                278K followers • 0 following
              </div>
            </div>
            <div>sssssssss</div>
          </div>
        </div>

        <img
          src="../public/x.jpg"
          alt=""
          class="w-1/4 min-w-28 absolute -bottom-1/3 z-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-5 rounded-full border-4 border-white"
        />
      </div>
    </div>

    <div
      class="creat_post flex mt-4 w-100 max-w-5xl mx-auto p-4 bg-white rounded-3xl border border-gray-200 shadow-md"
    >
      <div class="img">
        <img src="../public/x.jpg" width="60" alt="" class="rounded-full" />
      </div>

      <div
        class="bg-gray-200 text-gray-600 ml-4 w-full rounded-full flex items-center px-8"
      >
        What's on your mind, Yousef?
      </div>
    </div>

    <div
      class="post flex flex-col justify-center items-start mt-4 w-100 max-w-5xl mx-auto p-4 bg-white rounded-3xl border border-gray-200 shadow-md"
    >
      <div class="flex items-center w-100 bg-white rounded-3xl">
        <div class="img">
          <img src="../public/x.jpg" width="40" alt="" class="rounded-full" />
        </div>
        <div class="ml-3">
          <div class="font-semibold text-lg">Mahmod Mostafa</div>
          <div class="text-sm text-gray-600">4 day ago</div>
        </div>
      </div>
      <div class="flex items-center w-100 p-4 bg-white rounded-3xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in
        repudiandae dolorem ut sint. A vitae consequuntur alias laborum?
        Quibusdam repellat totam voluptatem magnam fugit aliquid et fuga quaerat
        nihil!
      </div>
      <div
        class="flex items-start w-full flex-col w-100 px-0 md:px-4 bg-white rounded-3xl"
      >
        <div class="flex items-center gap-2">
          <span>2</span> <i class="bx bx-like"></i>
        </div>
        <hr class="w-full mt-2" />

        <div
          class="flex items-center justify-evenly w-full gap-2 text-gray-400"
        >
          <div
            class="w-1/4 cursor-pointer justify-center hover:bg-gray-300 p-2 transition-all rounded-md flex items-center gap-2 text-lg"
          >
            Share <i class="bx bx-share -scale-x-100"></i>
          </div>
          <div
            @click="toggleComments"
            class="w-1/4 cursor-pointer justify-center hover:bg-gray-300 p-2 transition-all rounded-md flex items-center gap-2 text-lg"
          >
            Comment <i class="bx bx-comment-detail"></i>
          </div>
          <div
            class="w-1/4 cursor-pointer justify-center hover:bg-gray-300 p-2 transition-all rounded-md flex items-center gap-2 text-lg"
          >
            Like <i class="bx bx-like"></i>
          </div>
        </div>
        <hr class="w-full mb-0" />
        <!-- sssssssssssssssssssssss -->
        <div
          class="flex flex-col items-start h-0 max-h-fit transition-all duration-500 ease-in-out Comments overflow-auto justify-evenly w-full gap-2 text-gray-400"
        >
          <div class="flex mt-2" v-for="i in 4" :key="i">
            <div class="img">
              <img
                src="../public/x.jpg"
                width="40"
                alt=""
                class="rounded-full min-w-9"
              />
            </div>
            <div>
              <div class="ml-1 bg-gray-100 pb-2 pt-1 px-3 rounded-2xl">
                <div class="font-semibold text-lg text-gray-800">
                  Mahmod Mostafa
                </div>
                <div class="text-md text-gray-700">
                  consectetur adipisicing elit. Harum in repudiandae dolorem ut
                  sint. A vitae consequuntur alias laborum? Quibusdam repellat
                  totam voluptatem magnam fugit aliquid et fuga quaerat nihil!
                </div>
              </div>
              <div class="ml-1 flex items-center gap-3">
                <span class="text-sm cursor-pointer">4 day</span>
                <span class="text-sm cursor-pointer">Like</span>
                <span class="text-sm cursor-pointer">Reply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const toggleComments = (event) => {
  let target = event.currentTarget.parentNode.parentNode
    .querySelector(".Comments")
    .classList.toggle("h-80");
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
  /* background: red; */
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
  cursor: pointer;
}
</style>
