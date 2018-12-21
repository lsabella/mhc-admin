---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

页面里的详细说明间的走马灯切换效果。

## en-US
The simplest usage.

````jsx
import {DetailSwitch} from 'mhc-admin';

const dataArray = [
  {
    title:'美规 阿尔法·罗密欧',
    content:'2008每千人拥有汽车比率汽车一般使用汽油、柴油等石化燃料作为动力来源，在车辆行动中会排放二氧化碳等废气，是造成空气污染、全球暖化及酸雨的原因之一。美国环保署统计车辆每消耗一加仑汽油，会产生8,887克的二氧化碳，柴油车每消耗一加仑柴油，会产生10,180克的二氧化碳[17]。因此，提升燃油效率以减少废气排放量，成为重要议题。许多国家使用像道路税或是能源税等财政政策大众减少车辆的购买[18]。',
    pic: 'https://img.maihaoche.com/tms/contracts/o_1ct9uhbq81s18i5a1v7vr6o14jt6a_1.png',
    map: 'https://img.maihaoche.com/FqZJpPNN37nAWG4N1NaLFUFbTnxz',
    color: '#FFF43D',
    background: '#F6B429',
  },
  {
    title:'中规/国产 阿斯顿·马丁',
    content:'此外，为了解决这些问题，发展电动车及混合动力车，也是热门的发展方向，已吸引许多汽车制造商的投入研发；因为可以将原本由车辆所产生之污染，转移至发电厂（或制氢厂等）集中处理，不仅大大降低后端污染处理成本、亦增进污染处理之效率及效能、甚至能提升燃油效率（以更少的油得到更大的能量；毕竟现在科技依然无法将汽油之化学能全部转换成我们能使用的能量，但发电厂却能转换得比小型内燃机好）。为此，许多发达国家都由政府推动各种奖励措施，试图解决大量使用汽车所造成的环境问题。',
    pic: 'http://img.maihaoche.com/tms/contracts/o_1ct9ui94img7s0g19m5iqk1ugh6k_2.png',
    map: 'http://img.maihaoche.com/tms/contracts/o_1ct9uiegaliv19glrdank610ff6p_22.png',
    color: '#FF4058',
    background: '#FC1E4F',
  },
  {
    title:'中规/国产 Jeep 指南者',
    content:'高燃料税可以有效的使消费者考虑购买较小、较轻、较省油的车，或是甚至不开车。平均而言，现在的汽车中有75%是可以回收的，而使用回收的钢铁可以减少能源的消耗及污染[19]。美国国会会定期的针对联邦政府订定的燃油效率提出讨论，客车的标准在1985年订定，燃油效率为27.5英里每美制加仑（8.6升每100千米；33.0英里每英制加仑），轻型卡车的标准在2007年修改，燃油效率为22.2英里每美制加仑（10.6升每100千米；26.7英里每英制加仑）',
    pic: 'http://img.maihaoche.com/tms/contracts/o_1ct9uilbg1hbu18lp1j091dlf15p36u_3.png',
    map: 'https://img.maihaoche.com/FhNg03yTYENPZ6qxIEDlsZHA7TLM',
    color: '#9FDA7F',
    background: '#64D487',
  },
];

ReactDOM.render(
  <DetailSwitch dataArray={dataArray}/>
, mountNode);
````
