<template>
  <div>
    <div
      class="alert alert-danger"
      role="alert"
      v-if="alert.empty === true"
      style="text-align: center;"
    >
      <i class="fa fa-exclamation-triangle"></i> DATA KOSONG
    </div>
    <div
      class="alert alert-danger"
      v-if="alert.error === true"
      style="text-align: center;"
    >
      <i class="fa fa-exclamation-triangle"></i> TERJADI KESALAHAN!
      SILAHKAN ULANGI KEMBALI!
    </div>
  </div>
</template>

<script>
export default {
  props: ['alert'],
}
</script>
