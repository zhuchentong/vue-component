<template>
  <div class="container">
    <data-grid>
      <data-grid-item label="test1" :span="6">
        asd
      </data-grid-item>
       <data-grid-item label="test2" :span="6" :min-content-width="100">
        asdsadkljfkl;asjkfljaskl;dfkl;asjdklfkasdljfkl;jasd;kljasdkl;fkl;asdfkljaskdl;klasjdfkl;a;lkfj
      </data-grid-item>
    </data-grid>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {}
  }
};
</script>
<style lang="less">

</style>