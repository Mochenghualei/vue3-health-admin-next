<script setup lang='ts'>
</script>

<template>
  <el-container bg="#faf4f0" min-h-screen min-w-screen>
    <el-aside width="60px" bg-white dark:bg-dark border-r="1px solid red-200"></el-aside>
    <el-main bg-blue rounded-r-6 bg-white dark:bg-dark>健身管理平台</el-main>
    <el-aside w200 bg="#faf4f0" p-2 box-border flex flex-col items-center justify-between gap-3>
      <!--顶部导航 -->
      <div wfull flex gap-10 justify-between>
        <BaseThemeSwitchBtn />
        <BaseInfoBtn />
      </div>

      <!-- 天气组件 -->
      <div class="wea-card" h40 wfull>
        <BaseWeatherCard />
      </div>

      <!-- 指标卡组件 -->
      <div wfull>
        <BaseKPICard />
      </div>

      <div wfull>
        <BaseSocialMedia />
      </div>

      <BaseSideFooter />
    </el-aside>
  </el-container>
</template>


<style lang="scss" scoped>
.wea-card {
  @include base-card(#323232)
}
</style>