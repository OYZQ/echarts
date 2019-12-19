<template lang="html">
  <div class="c_content">
      <div v-for="info in infos" class="infos">
        <div class="from">
            <span class="id">{{info.id}}</span>
            <span class="name">{{info.name}}</span>
            <span :class="{sort:info.color==1,important:info.color==2, normal:info.color==3}">{{info.content}}</span>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      created:function(){
          var _this = this;
        _this.$axios.get('/user/userInfo')
            .then(function(res){
                _this.infos = res.data.data
            console.log(_this.infos);
            })
            .catch(function(err){
            console.log(err);
        });
    },
    data(){
        return{
            infos:[]
        }
    }
  }
</script>

<style lang="scss">

    .c_content{
        color: #ffffff;
        font-size: 14px;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: scroll;
        height: 76vh;
        .infos{
            padding: 10px;
            box-sizing: border-box;
            .from{
                display: flex;
                border-bottom: #393A3F solid 3px;
                .id{
                    padding-left: 10px;
                    color: rgb(243, 239, 239);
                    flex: 1;
                    // background:#383838;
                }
                .name{
                    padding-left: 10px;
                    color: rgb(129, 211, 243);
                    flex:2;
                    // background:#303136;
                }
                .sort{
                    padding-left: 10px;
                    color: #DBDDD5;
                    flex: 6;
                    // background:#3D481E;
                }
                .important{
                    padding-left: 10px;
                    color: #DBDDD5;
                    flex: 6;
                    // background:#F25D4E;
                }
                .normal{
                    padding-left: 10px;
                    color: #DBDDD5;
                    flex: 6;
                    // background:#828080;
                }
            }
        }
    }
    .c_content::-webkit-scrollbar {
        display: none;
    }
</style>
