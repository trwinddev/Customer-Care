<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="flex justify-between border-b-2 p-5 items-center">
        <h2 class="text-blue-primary-login font-medium">Thông tin cá nhân</h2>
        <div
          class="close font-semibold cursor-pointer hover:text-gray-text-gray"
          @click="$emit('close-modal')"
        >
          ｘ
        </div>
      </div>
      <div class="avatar flex justify-center content-center items-center">
        <div class="w-40 h-40 bg-gray-text-gray mt-8 rounded-full relative">
          <img
            src="https://www.shareicon.net/data/128x128/2016/07/11/598417_image_64x64.png"
            alt=""
            class="img-demo"
          />
          <div
            class="bg-gray-text-gray p-[6px] inline-block rounded-full absolute bottom-4 right-1"
          >
            <img
              class="w-5"
              src="https://www.shareicon.net/data/32x32/2016/01/03/697349_camera_512x512.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <form class="p-5 grid grid-cols-2 gap-5" action="">
        <div>
          <div class="flex flex-col">
            <label for="">Username</label>
            <input type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Fullname</label>
            <input type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Email</label>
            <input type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Password</label>
            <input type="text" class="border my-3 p-1" />
          </div>
        </div>
        <div>
          <div class="flex flex-col">
            <label for="">Phone number</label>
            <input type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Address</label>
            <input type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">ID Card</label>
            <input type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Tags</label>
            <select class="border my-3 p-1" name="" id="">
              <option value="1">Vip</option>
              <option value="2">Active</option>
              <option value="3">Tpin</option>
            </select>
          </div>
        </div>
        <!-- <button
          class="bg-slate-700 py-3 text-white rounded-md text-base mt-2"
          @click.prevent="$emit('close-modal')"
        >
          Đóng
        </button> -->
        <button
          class="bg-blue-primary-login py-3 mt-2 text-white rounded-md text-base"
        >
          Tạo
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  background-color: white;
  height: 680px;
  width: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
.img-demo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
