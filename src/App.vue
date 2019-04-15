<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .el-input--mini .el-input__inner{
    height: 22px;
    border-radius: 28px;
  }
  .el-carousel__indicator{
    display: none;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active{
    background: #ae9666;
  }
  .el-carousel__item{
    opacity: 0.9;
  }
  .is-active{
    opacity: 1;
    box-shadow: 4px 0 85px 6px rgba(0,0,0,0.4);
  }
  .distpicker-address-wrapper select{
    font-size: 14px;
  }
  /*去掉input的数字按钮*/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"]{
    -moz-appearance: textfield;
  }
  .inputnum{
    width: 60px;
    display: inline-block;
  }
  .el-input-number{
    width: 160px;
  }
  .el-table .cell{
    text-align: center;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis
  }
   .userInfoAddr{
      display: flex;
   }
  .el-step__title{
    margin-left: -14px;
    font-size: 14px;
  }
  .is-process{
    font-weight: normal;
  }
</style>
