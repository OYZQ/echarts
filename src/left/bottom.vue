<template lang="html">
  <div class="l_bottom">
    <p class="b_today">人员待办事项执行情况</p>
    <div class="lbcontent">
      <div class="peopletitle">
        <div class="title1">人员</div>
        <div class="descruption">待办事件执行情况</div>
      </div>
      <div class="scroll">
        <div class="detial" v-for="man in people">
          <div class="bname">{{man.name}}</div>
          <div class="start">
            <i v-for="(item,index) in itemClasses(man.num)" :key="index" class="iconfont" :class="item"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const START = "icon-dian"
  export default {
  created:function(){
    var _this = this;
      _this.$axios.get('/user/people')
          .then(function(res){
              _this.people = res.data.data
          })
          .catch(function(err){
          console.log(err);
      });
    },
    data(){
      return{
        people:[]
      }
    },
    methods: {
      itemClasses(num) {
        let result = [];
        for(let i=0;i<num;i++){
          result.push(START);
          console.log('这里啊啊啊'+this.people)
        }
        return result;
      }
    }
  }
</script>

<style lang="scss">
    .l_bottom{
        width: 100%;
        box-sizing: border-box;
        border-top: none;
        width: 100%;
        color: #ffffff;
        padding:10px 10px;
        padding-bottom: 40px;
        .b_today{
          color: #fff;
          font-size: 18px;
          text-align: center;
        }
        .b_event{
          color:#4A4540;
        }
        .lbcontent{
          .peopletitle{
            border-bottom:#919971 solid 2px;
            font-size: 14px;
            color: #ffffff;
            margin-top: 10px;
            display: flex;
            text-align: center;
            .title1{
              flex: 1;
            }
            .descruption{
              flex: 10;
              text-align: left;
            }
          }
          .scroll{
            overflow-x: hidden;
            overflow-y: scroll;
            height: 29vh;
            .detial{
              font-size: 14px;
              color: #ffffff;
              text-align: center;
              display: flex;
              border-bottom: #616161 1px solid;
              .bname{
                flex: 1;
              }
              .start{
                flex: 10;
                text-align: left;
                color: #1296DB;
                line-height: 160%
              }
            }
          }
          .scroll::-webkit-scrollbar {
            display: none;
          }
        }
    }
</style>
