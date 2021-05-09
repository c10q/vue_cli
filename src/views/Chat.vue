<template>
    <el-card>
        <div style="text-align:right"><p>메시지를 남겨 주세요</p></div>
        <div style="text-align:right"><p>메시지를 남겨 주세요</p></div>
        <div><p>메시지를 남겨 주세요</p></div>  
        <div><p>메시지를 남겨 주세요</p></div>
        <div id="input-bar">
            <el-input type="text" v-model="msg" class="chat-input"/>
            <el-button>send</el-button>
        </div>
    </el-card>
</template>

<script>
export default {
  name: "Chat",
  data() {
      return{
        msg: ""
      }
  }
}
</script>

<style scoped>
div{
    margin: 4px;
}
p{
    margin: 4px;
    padding: 8px;
    border: 1px solid #e5e5e5;
    font-size: 0.8em;
    display: inline-block;
}
#input-bar{  
  position: absolute;
  bottom: 0;
  width: 100%;
}
.el-input{
    margin: 0;
    width: 70%;
    display: inline-block;
}
.el-button{
    margin: 0;
    width: 25%;
    padding: 12px;
    display: inline-block;
}
.el-card{
    position: relative;
    vertical-align: bottom;
    height: 80vh;
    margin: 0;
    padding: 0;
}
</style>