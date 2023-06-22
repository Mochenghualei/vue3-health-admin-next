<script setup lang='ts'>

</script>

<template>
  <div class="ui-btn">
    <span>
      shuai
    </span>
  </div>
</template>

<style lang='scss' scoped>
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
  animation: 3s chitchat linear both infinite;
}

@keyframes chitchat {
  80% {
    content: "shuai";
    color: #ffffff;
  }

  84% {
    content: "!#$_@";
    color: var(--hover-btn-color);
  }

  88% {
    content: "%=.,8";
    color: var(--hover-btn-color);
  }

  92% {
    content: "№:0@*";
    color: var(--hover-btn-color);
  }

  96% {
    content: "4%0%";
    color: var(--hover-btn-color);
  }

  100% {
    content: "";
    right: 0;
    color: #ffffff;
  }

  // // 81% {
  // //   content: ".";
  // // }

  // // 82% {
  // //   content: "^{";
  // // }

  // // 83% {
  // //   content: "-!";
  // // }

  // // 84% {
  // //   content: "#$_";
  // // }

  // 85% {
  //   content: "№:0@}-??{4@%=.,^!?2@%";
  // }

  // // 86% {
  // //   content: "@}-?";
  // // }

  // // 87% {
  // //   content: "?{4@%";
  // // }

  // // 88% {
  // //   content: "=.,^!";
  // // }

  // // 89% {
  // //   content: "?2@%";
  // // }

  // 90% {
  //   content: "\;1}]?{%:%|{f[4{4%0%'1_0<";
  // }

  // // 91% {
  // //   content: "?{%:%";
  // //   right: 0;
  // // }

  // // 92% {
  // //   content: "|{f[4";
  // //   right: 0;
  // // }

  // // 93% {
  // //   content: "{4%0%";
  // //   right: 0;
  // // }

  // // 94% {
  // //   content: "'1_0<";
  // //   right: 0;
  // // }

  // 95% {
  //   content: "{0%]>'42";
  //   right: 0;
  // }

  // // 96% {
  // //   content: "]>'";
  // //   right: 0;
  // // }

  // // 97% {
  // //   content: "4";
  // //   right: 0;
  // // }

  // // 98% {
  // //   content: "2";
  // //   right: 0;
  // // }

  // 100% {
  //   content: "";
  //   right: 0;
  // }
}
</style>