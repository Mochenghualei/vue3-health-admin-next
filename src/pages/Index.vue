<script setup lang='ts'>
</script>

<template>
  <el-container bg="#faf4f0" min-h-screen min-w-screen>
    <el-aside width="60px" bg-white dark:bg-dark border-r="1px solid red-200">Aside</el-aside>
    <el-main bg-blue rounded-r-6 bg-white dark:bg-dark>main</el-main>
    <el-aside w200 bg="#faf4f0" p-2 box-border flex flex-col items-center justify-between gap-3>
      <!--顶部导航 -->
      <div wfull flex gap-10 justify-between>
        <BaseThemeSwitchBtn />

        <button class="ui-btn">
          <span>
            Button
          </span>
        </button>
      </div>

      <!-- 天气组件 -->
      <div class="wea-card" h40>
        <BaseWeatherCard />
      </div>

      <!-- 指标卡组件 -->
      <div>
        <BaseKPICard />
      </div>

      <div>
        <BaseSocialMedia />
      </div>

      <div wfull bg-gray:80 h10 rounded-2 flex items-center justify-center pr-2 box-border>
        <a decoration-none color-black href="https://beian.miit.gov.cn/" target="_blank">备案号：京ICP备2023013429号</a>
      </div>

    </el-aside>
  </el-container>
</template>


<style lang="scss" scoped>
.wea-card {
  @include base-card(#323232)
}


.ui-btn {
  --btn-default-bg: rgb(41, 41, 41);
  --btn-padding: 15px 20px;
  --btn-hover-bg: rgb(51, 51, 51);
  --btn-transition: .3s;
  --btn-letter-spacing: .1rem;
  --btn-animation-duration: 1.2s;
  --btn-shadow-color: rgba(0, 0, 0, 0.137);
  --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
  --hover-btn-color: #FAC921;
  --default-btn-color: #fff;
  --font-size: 16px;
  /* 👆 this field should not be empty */
  --font-weight: 600;
  --font-family: Menlo, Roboto Mono, monospace;
  /* 👆 this field should not be empty */
}

/* button settings 👆 */

.ui-btn {
  box-sizing: border-box;
  padding: var(--btn-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--default-btn-color);
  font: var(--font-weight) var(--font-size) var(--font-family);
  background: var(--btn-default-bg);
  border: none;
  cursor: pointer;
  transition: var(--btn-transition);
  overflow: hidden;
  box-shadow: var(--btn-shadow);
}

.ui-btn span {
  letter-spacing: var(--btn-letter-spacing);
  transition: var(--btn-transition);
  box-sizing: border-box;
  position: relative;
  background: inherit;
}

.ui-btn span::before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  background: inherit;
}

.ui-btn:hover,
.ui-btn:focus {
  background: var(--btn-hover-bg);
}

.ui-btn:hover span,
.ui-btn:focus span {
  color: var(--hover-btn-color);
}

.ui-btn span::before,
.ui-btn:focus span::before {
  animation: 2s chitchat linear both infinite;
}

@keyframes chitchat {
  0% {
    content: "#";
  }

  5% {
    content: ".";
  }

  10% {
    content: "^{";
  }

  15% {
    content: "-!";
  }

  20% {
    content: "#$_";
  }

  25% {
    content: "№:0";
  }

  35% {
    content: "@}-?";
  }

  40% {
    content: "?{4@%";
  }

  45% {
    content: "=.,^!";
  }

  50% {
    content: "?2@%";
  }

  55% {
    content: "\;1}]";
  }

  60% {
    content: "?{%:%";
    right: 0;
  }

  65% {
    content: "|{f[4";
    right: 0;
  }

  70% {
    content: "{4%0%";
    right: 0;
  }

  75% {
    content: "'1_0<";
    right: 0;
  }

  80% {
    content: "{0%";
    right: 0;
  }

  85% {
    content: "]>'";
    right: 0;
  }

  90% {
    content: "4";
    right: 0;
  }

  95% {
    content: "2";
    right: 0;
  }

  100% {
    content: "";
    right: 0;
  }
}
</style>