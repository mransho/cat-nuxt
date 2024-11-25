<template>
  <div
    class="flex items-center justify-center gap-40 bg-backgroundImage bg-center bg-cover h-svh"
  >
    <div class="h-fit flex w-full">
      <div class="w-1/2">
        <div
          class="logo font-fontLOGO text-white flex justify-center text-9xl font-extrabold"
        >
          CAT?
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

      <div class="w-1/2 text-white">
        <div
          class="w-fit flex gap-3 mx-auto flex-col p-10 rounded-3xl bg-log bg-opacity-40 backdrop-blur-log border border-white"
        >
          <div class="flex gap-4 w-80">
            <div class="border-b-2 h-12 mb-2 border-white w-1/2 relative group">
              <span
                class="-z-10 absolute top-1/2 left-0 -translate-y-1/2 font-bold ml-2 transition-all group-focus-within:top-3 group-oninput"
                :class="user.firstName ? 'top-3' : ''"
              >
                First Name
              </span>
              <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
                <input
                  type="text"
                  class="h-8 w-full bg-transparent"
                  name=""
                  id="First_Name"
                  v-model="user.firstName"
                />
              </div>
            </div>

            <div class="border-b-2 h-12 mb-2 border-white w-1/2 relative group">
              <span
                class="-z-10 absolute top-1/2 left-0 -translate-y-1/2 font-bold ml-2 transition-all group-focus-within:top-3 group-oninput"
                :class="user.Surname ? 'top-3' : ''"
                >Surname</span
              >
              <span class="absolute top-0 right-0">ICON</span>
              <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
                <input
                  type="text"
                  class="h-8 w-full bg-transparent"
                  name=""
                  v-model="user.Surname"
                />
              </div>
            </div>
          </div>

          <div class="border-b-2 h-12 mb-2 border-white w-80 relative group">
            <span
              class="-z-10 absolute top-1/2 left-0 -translate-y-1/2 font-bold ml-2 transition-all group-focus-within:top-3 group-oninput"
              :class="user.MobileNumber ? 'top-3' : ''"
              >Mobile Number</span
            >
            <span class="absolute top-0 right-0">ICON</span>
            <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
              <input
                type="number"
                class="h-8 w-full bg-transparent"
                name=""
                v-model="user.MobileNumber"
              />
            </div>
          </div>

          <div class="border-b-2 h-12 mb-2 border-white w-80 relative group">
            <span
              class="-z-10 absolute top-1/2 left-0 -translate-y-1/2 font-bold ml-2 transition-all group-focus-within:top-3 group-oninput"
              :class="user.Email ? 'top-3' : ''"
              >Email</span
            >
            <span class="absolute top-0 right-0">ICON</span>
            <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
              <input
                type="email"
                class="h-8 w-full bg-transparent"
                name=""
                v-model="user.Email"
              />
            </div>
          </div>

          <div class="border-b-2 h-12 mb-2 border-white w-80 relative group">
            <span
              class="-z-10 absolute top-1/2 left-0 -translate-y-1/2 font-bold ml-2 transition-all group-focus-within:top-3 group-oninput"
              :class="user.Password ? 'top-3' : ''"
              >Password</span
            >
            <span class="absolute top-0 right-0">ICON</span>
            <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
              <input
                type="Password"
                class="h-8 w-full bg-transparent"
                name=""
                v-model="user.Password"
              />
            </div>
          </div>

          <div class="flex gap-4 w-80">
            <div class="border-b-2 h-12 mb-2 border-white w-1/3 relative group">
              <span
                class="-z-10 absolute left-1/2 transform -translate-x-1/2 font-bold transition-all group-focus-within:top-0 group-oninput"
                :class="user.Day ? 'top-0' : 'top-3'"
                >Day</span
              >
              <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
                <input
                  type="number"
                  class="h-8 w-full bg-transparent text-center"
                  name=""
                  v-model="user.Day"
                />
              </div>
            </div>

            <div class="border-b-2 h-12 mb-2 border-white w-1/3 relative group">
              <span
                class="-z-10 absolute left-1/2 transform -translate-x-1/2 font-bold transition-all group-focus-within:top-0 group-oninput"
                :class="user.month ? 'top-0' : 'top-3'"
                >month</span
              >
              <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
                <input
                  type="text"
                  class="h-8 w-full bg-transparent text-center"
                  name=""
                  v-model="user.month"
                />
              </div>
            </div>

            <div class="border-b-2 h-12 mb-2 border-white w-1/3 relative group">
              <span
                class="-z-10 absolute left-1/2 transform -translate-x-1/2 font-bold transition-all group-focus-within:top-0 group-oninput"
                :class="user.year ? 'top-0' : 'top-3'"
                >year
              </span>
              <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
                <input
                  type="number"
                  class="h-8 w-full bg-transparent text-center"
                  name=""
                  v-model="user.year"
                />
              </div>
            </div>
          </div>

          <div class="border-b-2 h-12 mb-2 border-white w-80 relative group">
            <span
              class="-z-10 absolute top-1/2 left-0 -translate-y-1/2 font-bold ml-2 transition-all group-focus-within:top-3 group-oninput"
              :class="user.Gender ? 'top-2' : ''"
              >Gender</span
            >
            <span class="absolute top-0 right-0">ICON</span>
            <div class="w-full h-full p-2 pb-0 flex flex-col-reverse">
              <div class="h-8 w-full bg-transparent">Gender</div>
            </div>
          </div>

          <div
            class="h-14 w-80 relative bg-slate-700 bg-opacity-90 hover:bg-slate-600 text-white flex justify-center items-center rounded-2xl"
          >
            <button class="w-full h-full font-bold text-xl">
              <nuxt-link
                :to="{ name: 'allposts' }"
                class="w-full flex justify-center items-center h-full"
                >Sign Up</nuxt-link
              >
            </button>
          </div>

          <hr />

          <div
            class="w-80 relative bg-transparent text-white flex justify-center items-center rounded-2xl"
          >
            <button class="w-full h-full font-bold text-xl">
              <nuxt-link
                :to="{ name: 'index' }"
                class="w-full flex justify-center items-center h-full"
                >Login?</nuxt-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const user = reactive({
  firstName: "ahmed",
  Surname: "",
  year: "",
  Day: "",
  month: "",
  MobileNumber: "",
  Email: "",
  Password: "",
  Gender: "Gender",
});
</script>
