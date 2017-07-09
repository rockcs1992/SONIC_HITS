<template>
  <nav>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/about">About</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/services">Services</router-link></el-menu-item>
      	<el-menu-item index="3"><router-link to="/contact">Contact</router-link></el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-menu {
  display: inline-block;
  background-color: #eefaf6;
  top:20%;
  right:5%;
  position:absolute;
}

a{
	text-decoration: none;
}

</style>
