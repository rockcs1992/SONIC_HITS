<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><router-link to="/about">About</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/services">Services</router-link></el-menu-item>
    	<el-menu-item index="3"><router-link to="/contact">Contact</router-link></el-menu-item>
  </el-menu>

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
  background-color: rgba(0,0,0,0);
  height: 100%;
  right:2%;
  position:absolute;
}

.el-menu-item{
    height:100%;
    margin: 0 10pt 0 10pt;
    /*background-color:red;*/
}

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
    color: #ffe6e0;
}

.el-menu--horizontal>.el-menu-item:hover, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
    border-bottom: 4px solid whitesmoke;
}

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover {
    background-color: #ff6138;
}


a{
    position: relative;
    top: 13%;
	text-decoration: none;
    font-size: 13pt;
    letter-spacing: 2pt;
    font-weight: lighter;
    text-emphasis-color: red;
}

</style>
