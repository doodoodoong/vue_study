<template>
  <div class="w-full h-full">
    <h1 class="text-3xl text-center">Gallery Page</h1>
    <div class="board flex gap-1 m-5">
      <div class="flex-none invisible"></div>
      <div class="board_item flex-1 border border-red-200 rounded">
        <img
          class="object-cover h-full w-0"
          src="../assets/allkpop_1645217742_untitled-1.jpg"
          alt=""
        />
      </div>
      <div class="board_item flex-1 border border-red-200 rounded">
        <img
          class="object-cover h-full w-0"
          src="../assets/f088b5ff791fb534c5f167817985d654.jpg"
          alt=""
        />
      </div>
      <div class="board_item flex-1 border border-red-200 rounded">
        <img
          class="object-cover h-full w-0"
          src="../assets/female-kpop-idols-spring-fashion_iu.jpg"
          alt=""
        />
      </div>
      <div class="board_item flex-1 border border-red-200 rounded">
        <img
          class="object-cover h-full w-0"
          src="../assets/how-to-dress-up-like-a-kpop-idol.jpg"
          alt=""
        />
      </div>
      <div class="board_item flex-1 border border-red-200 rounded">
        <img
          class="object-cover h-full w-0"
          src="../assets/images.jpeg"
          alt=""
        />
      </div>
      <div class="board_item flex-1 border border-red-200 rounded">
        <img
          class="object-cover h-full w-0"
          src="../assets/male-kpop-idol-best-fancam_wei-kim-yohan.jpeg"
          alt=""
        />
      </div>
      <div class="flex-none invisible"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GalleryPage',
}
</script>
<style scoped>
.board {
  height: 50vh;
}

div:hover > img {
  width: 100%;
  height: 100%;
  transition-duration: 1s;
}

.board_item {
  border-radius: 0.25rem;
}
</style>
