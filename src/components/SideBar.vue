<template>
  <div class="nav">
    <input type="checkbox" class="nav__input" name="" id="nav__input" />
    <nav class="nav__pc">
      <div
        class="bg-blue-secondary-blue h-screen w-max flex flex-col justify-between items-center"
      >
        <menu-list></menu-list>
      </div>
    </nav>
    <label for="nav__input" class="nav__bar-btn pl-2 pt-3">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        class="svg-inline--fa fa-bars fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>
    </label>
    <label for="nav__input" class="nav__overlay"> </label>
    <nav class="nav__mobile">
      <div
        class="bg-blue-secondary-blue h-screen w-full flex flex-col justify-between items-center"
      >
        <menu-list></menu-list>
      </div>
      <label for="nav__input" class="nav__mobile-btn">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          class="svg-inline--fa fa-times fa-w-11"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
      </label>
    </nav>
  </div>
</template>

<script>
import MenuList from "./MenuList.vue";
export default {
  components: { MenuList },
};
</script>

<style>
.item {
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
}
.nav__input {
  display: none;
}
.nav__list {
  display: flex;
  justify-content: content;
  align-items: center;
}
.nav__link {
  padding: 2rem;
}
.nav__bar-btn {
  display: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.nav__overlay {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: none;
}

.nav__mobile {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  width: 30%;
  background-color: #fff;
  transform: translateX(-100%);
  transition: all 0.4s ease-in-out;
}
.nav__mobile-link {
  display: block;
  padding: 1rem;
}
.nav__mobile-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  padding: 10px;
  cursor: pointer;
}
.nav__input:checked ~ .nav__mobile {
  transform: translateX(0);
}
.nav__input:checked ~ .nav__overlay {
  display: block;
}

@media (max-width: 1023px) {
  .nav__bar-btn {
    display: block;
  }
  .nav__pc {
    display: none;
  }
}
</style>
