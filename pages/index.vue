<template>
  <div>
    <div class="d-flex flex-row justify-center mb-4">
      <VLogo />
    </div>
    <UserDataTable />
  </div>
</template>

<script>
import VLogo from '@/components/vLogo'
import UserDataTable from '@/components/UserDataTable'

export default {
  name: 'Index',
  components: {
    VLogo,
    UserDataTable
  }
}
</script>
