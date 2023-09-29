<template>
    <div>
      <br>
      <h1>The Rings of Power</h1>
      <br>
      <div id="app">
        <p>Click Count: {{ clickCount }}</p><br>
        <div class="image-container"
             :style="{ top: imageTop + 'px', left: imageLeft + 'px' }"
             @click="handleImageClick"
             @mouseover="toggleImage"
             @mouseout="toggleImage"
        >
            <img :src="currentImage" alt="Toggle Image" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clickCount: 0,
        imageSrc1: './images/blank2.jpg', // First image source
        imageSrc2: './images/huntring2.jpg', // Second image source
        imageTop: 0,
        imageLeft: 0,
        isImageVisible: false,
        currentImageIndex: 0, // Initialize to 0 to start with the first image
      };
    },
    computed: {
      currentImage() {
        // Use currentImageIndex to determine which image to display
        return this.currentImageIndex === 0 ? this.imageSrc1 : this.imageSrc2;
      },
    },
    methods: {
      handleImageClick() {
        this.clickCount++;
        this.moveImageRandomly();
      },
      moveImageRandomly() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const imageWidth = 100; // Adjust this as needed
        const imageHeight = 100; // Adjust this as needed
  
        const maxTop = windowHeight - imageHeight;
        const maxLeft = windowWidth - imageWidth;
  
        this.imageTop = Math.floor(Math.random() * maxTop);
        this.imageLeft = Math.floor(Math.random() * maxLeft);
      },
      toggleImage() {
        // Toggle between the two images on mouseover and mouseout
        this.currentImageIndex = 1 - this.currentImageIndex;
      },
    },
    created() {
      this.moveImageRandomly();
    },
  };
  </script>  

<style>
  body {
    background-image: none;
    background-color: black;
  }
</style>