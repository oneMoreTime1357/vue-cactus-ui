<template>
  <div class="doc-container">
    <slot name="nav" />
    <div class="doc-main">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<style lang="scss">
.doc-container {
  display: flex;
  height: calc(100% - 60px);
  color: #282828;
  .doc-main {
    flex: 1;
    padding: 39px 60px 75px;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    a {
      color: #0182ff;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.5;
      font-weight: 400;
      color: #455a64;
      cursor: pointer;
    }

    h1 {
      margin-top: 8px;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 30px;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif;
      // line-height: 38px;
    }

    h2 {
      clear: both;
      font-size: 22px;
      margin: 1em 0 0.6em;
      font-weight: 500;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif;
    }

    h3 {
      clear: both;
      font-size: 18px;
      margin: 1em 0 0.6em;
      font-weight: 500;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif;
    }

    h4 {
      clear: both;
      font-size: 16px;
      margin: 1em 0 0.6em;
      font-weight: 500;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif;
    }

    h5 {
      clear: both;
      font-size: 14px;
      margin: 1em 0 0.6em;
      font-weight: 500;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif;
    }

    p {
      font-size: 14px;
      // line-height: 26px;
      // margin: 10px;
      margin-bottom: 10px;
      color: #34495e;
    }

    pre {
      padding: 18px 20px;
      background: #fafafa;
      font-size: 14px;
    }

    code {
      margin: 0;
      padding: 0;
      overflow: auto;
      // color: #314659;
      line-height: 20px;
      font-size: 14px;
      background: #fafafa;
      border: none;
    }

    table {
      width: 100%;
      border-spacing: 0px;
      thead {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #8e8e93;
        text-align: left;
        line-height: 20px;
        th {
          height: 20px;
          padding: 10px 0;
          background: #ffffff;
          border-bottom: 1px solid #f2f2f5;
        }
      }
      tbody {
        tr {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #575757;
          height: 46px;
          td {
            padding: 13px 0;
            border-bottom: 1px solid #f2f2f5;
          }
        }
        :hover {
          cursor: pointer;
          background: #f2faff;
        }
      }

      code {
        font-size: 13px;
        padding: 0 8px;
        font-family: inherit;
        word-break: keep-all;
      }
    }

    hr {
      border: 0 none;
      margin: 30px 0;
      border-top: 1px solid #eee;
    }

    p > code,
    li > code,
    table code {
      margin: 2px 3px;
      padding: 2px 5px;
      display: inline;
      box-shadow: none;
      background-color: #f0f2f5;
    }

    section {
      overflow: hidden;
    }

    blockquote {
      padding: 16px;
      margin: 20px 0 0;
      font-size: 14px;
      border-radius: 4px;
      background-color: #ecf9ff;
      color: rgba(52, 73, 94, 0.8);
      border-left: 5px solid #50bfff;
    }

    &--changelog {
      strong {
        display: block;
        margin: 12px 0;
        font-size: 15px;
        font-weight: 500;
      }

      h3 {
        font-size: 20px;

        + p code {
          margin: 0;
        }

        a {
          color: inherit;
        }
      }
    }
  }
}
</style>
