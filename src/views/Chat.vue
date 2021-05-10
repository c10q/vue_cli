<template>
  <el-card>
    <div class="chat-box" v-for="(chat, i) in chats" :key="i" :style="[chat.uid === 1 ? {'text-align' : 'right'} : {}]">
      <div class="chat-box-inner">
        <p>{{ chat.message }}</p>
        <h5 :style="[chat.uid === 1 ? {'right' : '100%'} : {'left' : '100%'}]">{{ chat.time }}</h5>
      </div>
    </div>
      <div id="input-bar">
        <el-input type="text" v-model="msg" class="chat-input"/>
        <button class="input-btn"><i class="el-icon-position"></i></button>
      </div>
  </el-card>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      msg: "",
      chats: [
        {uid: 1, message: '안녕~ 안녕~ 핑크퐁', time: '12:00'},
        {uid: 1, message: '워우워우워우워어', time: '12:10'},
        {uid: 2, message: '아기 상어~', time: '12:20'},
        {uid: 2, message: '뚜루루뚜루', time: '12:30'},
        {uid: 1, message: '귀여운~', time: '12:40'},
        {uid: 2, message: '뚜루루뚜루~', time: '12:50'},
      ]
    }
  }
}
</script>

<style scoped>
.chat-box {
  margin: 4px;
}
.chat-box-inner{
  display: inline-block;
  position: relative;
  max-width: 70%;
}
h5{
  position: absolute;
  bottom: 2px;
  font-size: 0.7em;
}
p {
  margin: 2px;
  padding: 8px;
  border: 1px solid #e5e5e5;
  font-size: 0.8em;
  display: inline-block;
}
#input-bar {
  position: absolute;
  bottom: 0;
  overflow: hidden;
  width: calc( 100% - 50px) ;
}
.el-input {
  margin: 0;
  width: calc( 100% - 70px) ;
  display: inline-block;
}
.el-button {
  margin: 0;
  width: 25%;
  padding: 12px;
  display: inline-block;
  height: 50px;
}
.el-icon-position{
  padding: 0;
  margin: 0;
}
.input-btn{
    display: inline-block;
    position: relative;
    height: 40px;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
    width: 70px;
}
.el-card {
  position: relative;
  vertical-align: bottom;
  height: 80vh;
  margin: 0;
  padding: 0;
}
.el-card-body{
  padding: 10px;
}
</style>