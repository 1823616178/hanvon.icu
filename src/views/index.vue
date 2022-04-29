<template>
  <div class="container">
    <div class="container_box">
      <div class="container_svg">
        <svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 0 464 464" width="512px">
          <g>
            <path d="m24 144c-4.414062 0-8 3.585938-8 8v120h16v-120c0-4.414062-3.585938-8-8-8zm0 0"
                  data-original="#000000" data-old_color="#ffffff" fill="#ffffff" class="active-path"></path>
            <path
                d="m104 256h-32c-10.414062 0-19.214844 6.710938-22.527344 16h77.046875c-3.304687-9.289062-12.105469-16-22.519531-16zm0 0"
                data-original="#000000" data-old_color="#ffffff" fill="#ffffff" class="active-path"></path>
            <path
                d="m56 417.472656v-97.472656h-16v97.472656c-9.304688 3.304688-16 12.09375-16 22.527344 0 13.257812 10.742188 24 24 24s24-10.742188 24-24c0-10.433594-6.695312-19.222656-16-22.527344zm0 0"
                data-original="#000000" data-old_color="#ffffff" fill="#ffffff" class="active-path"></path>
            <path d="m0 288h464v16h-464zm0 0" data-original="#000000" data-old_color="#ffffff" fill="#ffffff"
                  class="active-path"></path>
            <path
                d="m48 248.207031c.089844-.070312.160156-.144531.246094-.207031-.085938-.0625-.15625-.136719-.246094-.207031zm0 0"
                data-original="#000000" data-old_color="#ffffff" fill="#ffffff" class="active-path"></path>
            <path
                d="m101.121094 192h-29.121094c-13.230469 0-24 10.769531-24 24s10.769531 24 24 24h29.121094c13.230468 0 24-10.769531 24-24s-10.769532-24-24-24zm0 0"
                data-original="#000000" data-old_color="#ffffff" fill="#ffffff" class="active-path"></path>
            <path
                d="m143.191406 272h304.335938c-3.992188-35.945312-34.527344-64-71.527344-64h-192c-11.128906 0-22.257812 2.625-32.191406 7.601562l-11.214844 5.605469c-1.363281 10.3125-6.609375 19.320313-14.289062 25.609375 8.542968 5.769532 14.757812 14.742188 16.886718 25.183594zm0 0"
                data-original="#000000" data-old_color="#ffffff" fill="#ffffff" class="active-path"></path>
            <path
                d="m413.273438 80-29.882813-69.734375-33.503906 92.140625-9.605469-14.40625h-52.28125v-72c0-8.824219-7.175781-16-16-16h-80c-8.824219 0-16 7.175781-16 16v40h-69.273438l-18.117187 42.265625-30.488281-83.859375-22.402344 33.59375h-35.71875v16h44.28125l9.597656-14.40625 33.503906 92.140625 29.890626-69.734375h58.726562v40c0 8.824219 7.175781 16 16 16h16v24h16v40h16v-40h16v-24h16c8.824219 0 16-7.175781 16-16v-8h43.71875l22.402344 33.59375 30.496094-83.859375 18.109374 42.265625h61.273438v-16zm-157.273438-16h-16v16h-16v-16h-16v-16h16v-16h16v16h16zm0 0"
                data-original="#000000" data-old_color="#ffffff" fill="#ffffff" class="active-path"></path>
            <path
                d="m424 417.472656v-97.472656h-16v97.472656c-9.304688 3.304688-16 12.09375-16 22.527344 0 13.257812 10.742188 24 24 24s24-10.742188 24-24c0-10.433594-6.695312-19.222656-16-22.527344zm0 0"
                data-original="#000000" data-old_color="#ffffff" fill="#ffffff" class="active-path"></path>
          </g>
        </svg>
        <img class="container_img" alt="汉王" src="@/assets/hanvon_logo.png"/>
      </div>
      <div class="container_box_content">
        <div class="container_box_content_title">相关法律法规</div>
        <div class="container_box_body_detail">
          <p>
            用人单位由于生产经营需要，经与工会和劳动者协商后可以延长工作时间，一般每日不得超过一小时；因特殊原因需要延长工作时间的，在保障劳动者身体健康的条件下延长工作时间每日不得超过三小时，但是每月不得超过三十六小时。</p>
          <p>有下列情形之一的，用人单位应当按照下列标准支付高于劳动者正常工作时间工资的工资报酬：<br>
            （一）安排劳动者延长工作时间的，支付不低于工资的百分之一百五十的工资报酬；<br>
            （二）休息日安排劳动者工作又不能安排补休的，支付不低于工资的百分之二百的工资报酬；<br>
            （三）法定休假日安排劳动者工作的，支付不低于工资的百分之三百的工资报酬。</p>
          <p>工资应当以货币形式按月支付给劳动者本人。不得克扣或者无故拖欠劳动者的工资。</p>
          <p>第三十八条 用人单位应当保证劳动者每周至少休息一日。</p>
        </div>
        <div class="container_body">
          <div class="container_body_title">工作日志</div>
          <div class="container_e">
            <div v-for="(item,index) in gridDataList" :key="index">
              <div class="box_body_title">{{ item.title }}</div>
              <div class="box_body_tk">
                {{ item.content }}
              </div>
              <div class="box_body_tk_cont">
                {{ item.digest }}
              </div>
            </div>
          </div>
        </div>
        <div class="container_foot_func">
          <div class="container_foot_func_title">相关事件报道</div>
          <div class="container_foot_body">
            <ul class="container_foot_ul">
              <li class="container_foot_li">2月23日下午，字节跳动在内网发声明确认了此前网传28岁员工猝死的消息。“13时43分，从医院获知，在抢救41个小时后，吴同学不幸离世。”</li>
              <li class="container_foot_li">2016 年 9 月初起，陆续有网友爆料称，58同城实行全员 996 工作制，且周末加班没有工资。公司方面回应称，为应对业务量高峰期，公司每年 9、10
                月份都会有动员，属常规性活动，而本次“996 动员”并非强制。（58同城实行全员996工作制 被指意图逼员工主动辞职. 央广网. 2016-09-01. ）
              </li>
              <li class="container_foot_li">
                B站称，该员工于2020年5月加入B站。对于网传他因加班猝死一事，经内部考勤核查，他按照工作计划正常上下班，工作时间为9:30~18:30，做五休二，在事发前一周内未存在加班等情况。
              </li>
              <li class="container_foot_li">最近，江西景德镇的几位网民报告说，在新天地的一家 "甜蜜蜜
                "奶茶店，一名员工在上班第一天就突然死亡。据奶茶店员工反应，该员工只工作了一个小时，就突然倒地，当时同事拨打了110和120急救电话，但最终没有抢救过来。
              </li>
            </ul>
          </div>
        </div>
        <div class="container_body_advice">
          <div class="container_body_advice_title">
            <p> 按照劳动法规定，996 工作制下只有拿到当前工资的 2.275 倍，才在经济账上不吃亏。</p>
            <p class="container_body_top">什么是 996.ICU？工作 996，生病 ICU。</p>
          </div>
          <div class="container_body_advice_title">
            <p>友情链接 <a style="color: #ffffff" target="_blank" href="http://996.icu">996.icu</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {grudgesList} from '@/api/grudges'
import {reactive, ref, toRefs, onMounted} from "vue";

const data = reactive({
  gridDataList: [
    {
      title: "2022年04月29日",
      content: '公司要求五一劳动节加班四天',
      digest: "五一劳动节加班并不按照双倍工资付加班费用。"
    },
    {
      title: "2022年02月08日",
      content: '公司要求过年加班',
      digest: "过年前三天与后三天加班并承诺双倍工资，后没有兑现双倍工资。"
    },
    {
      title: "2021年07月08日",
      content: '公司设定加班工资为25元/小时',
      digest: "加班工资应按照劳动法要求的1.5倍补偿劳动者，并不是固定的25元/小时"
    },
  ]
})

let {gridDataList} = toRefs(data)

/*async function getList() {
  await grudgesList().then(res => {
    if (res) {
      gridDataList.value = res.data
    }
  })
}*/


</script>

<style lang="scss" scoped>
@import "./style/index";
</style>
