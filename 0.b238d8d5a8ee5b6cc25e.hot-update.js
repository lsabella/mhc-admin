webpackHotUpdate(0,{

/***/ 1793:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "页面里的详细说明间的走马灯切换效果。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The simplest usage."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/DetailSwitch/demo/simple.md",
    "id": "components-DetailSwitch-demo-simple"
  },
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>DetailSwitch<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'mhc-admin'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> dataArray <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span><span class=\"token string\">'美规 阿尔法·罗密欧'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span><span class=\"token string\">'2008每千人拥有汽车比率汽车一般使用汽油、柴油等石化燃料作为动力来源，在车辆行动中会排放二氧化碳等废气，是造成空气污染、全球暖化及酸雨的原因之一。美国环保署统计车辆每消耗一加仑汽油，会产生8,887克的二氧化碳，柴油车每消耗一加仑柴油，会产生10,180克的二氧化碳[17]。因此，提升燃油效率以减少废气排放量，成为重要议题。许多国家使用像道路税或是能源税等财政政策大众减少车辆的购买[18]。'</span><span class=\"token punctuation\">,</span>\n    pic<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://img.maihaoche.com/tms/contracts/o_1ct9uhbq81s18i5a1v7vr6o14jt6a_1.png'</span><span class=\"token punctuation\">,</span>\n    map<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://img.maihaoche.com/FqZJpPNN37nAWG4N1NaLFUFbTnxz'</span><span class=\"token punctuation\">,</span>\n    color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#FFF43D'</span><span class=\"token punctuation\">,</span>\n    background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#F6B429'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span><span class=\"token string\">'中规/国产 阿斯顿·马丁'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span><span class=\"token string\">'此外，为了解决这些问题，发展电动车及混合动力车，也是热门的发展方向，已吸引许多汽车制造商的投入研发；因为可以将原本由车辆所产生之污染，转移至发电厂（或制氢厂等）集中处理，不仅大大降低后端污染处理成本、亦增进污染处理之效率及效能、甚至能提升燃油效率（以更少的油得到更大的能量；毕竟现在科技依然无法将汽油之化学能全部转换成我们能使用的能量，但发电厂却能转换得比小型内燃机好）。为此，许多发达国家都由政府推动各种奖励措施，试图解决大量使用汽车所造成的环境问题。'</span><span class=\"token punctuation\">,</span>\n    pic<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://img.maihaoche.com/tms/contracts/o_1ct9ui94img7s0g19m5iqk1ugh6k_2.png'</span><span class=\"token punctuation\">,</span>\n    map<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://img.maihaoche.com/tms/contracts/o_1ct9uiegaliv19glrdank610ff6p_22.png'</span><span class=\"token punctuation\">,</span>\n    color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#FF4058'</span><span class=\"token punctuation\">,</span>\n    background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#FC1E4F'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span><span class=\"token string\">'中规/国产 Jeep 指南者'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span><span class=\"token string\">'高燃料税可以有效的使消费者考虑购买较小、较轻、较省油的车，或是甚至不开车。平均而言，现在的汽车中有75%是可以回收的，而使用回收的钢铁可以减少能源的消耗及污染[19]。美国国会会定期的针对联邦政府订定的燃油效率提出讨论，客车的标准在1985年订定，燃油效率为27.5英里每美制加仑（8.6升每100千米；33.0英里每英制加仑），轻型卡车的标准在2007年修改，燃油效率为22.2英里每美制加仑（10.6升每100千米；26.7英里每英制加仑）'</span><span class=\"token punctuation\">,</span>\n    pic<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://img.maihaoche.com/tms/contracts/o_1ct9uilbg1hbu18lp1j091dlf15p36u_3.png'</span><span class=\"token punctuation\">,</span>\n    map<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://img.maihaoche.com/tms/contracts/o_1ct9uiqmj1p2a19es1r7l1ohk1ita73_11.png'</span><span class=\"token punctuation\">,</span>\n    color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#9FDA7F'</span><span class=\"token punctuation\">,</span>\n    background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#64D487'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DetailSwitch</span> <span class=\"token attr-name\">dataArray</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataArray<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _mhcAdmin = __webpack_require__(24);

  var dataArray = [{
    title: '美规 阿尔法·罗密欧',
    content: '2008每千人拥有汽车比率汽车一般使用汽油、柴油等石化燃料作为动力来源，在车辆行动中会排放二氧化碳等废气，是造成空气污染、全球暖化及酸雨的原因之一。美国环保署统计车辆每消耗一加仑汽油，会产生8,887克的二氧化碳，柴油车每消耗一加仑柴油，会产生10,180克的二氧化碳[17]。因此，提升燃油效率以减少废气排放量，成为重要议题。许多国家使用像道路税或是能源税等财政政策大众减少车辆的购买[18]。',
    pic: 'https://img.maihaoche.com/tms/contracts/o_1ct9uhbq81s18i5a1v7vr6o14jt6a_1.png',
    map: 'https://img.maihaoche.com/FqZJpPNN37nAWG4N1NaLFUFbTnxz',
    color: '#FFF43D',
    background: '#F6B429'
  }, {
    title: '中规/国产 阿斯顿·马丁',
    content: '此外，为了解决这些问题，发展电动车及混合动力车，也是热门的发展方向，已吸引许多汽车制造商的投入研发；因为可以将原本由车辆所产生之污染，转移至发电厂（或制氢厂等）集中处理，不仅大大降低后端污染处理成本、亦增进污染处理之效率及效能、甚至能提升燃油效率（以更少的油得到更大的能量；毕竟现在科技依然无法将汽油之化学能全部转换成我们能使用的能量，但发电厂却能转换得比小型内燃机好）。为此，许多发达国家都由政府推动各种奖励措施，试图解决大量使用汽车所造成的环境问题。',
    pic: 'http://img.maihaoche.com/tms/contracts/o_1ct9ui94img7s0g19m5iqk1ugh6k_2.png',
    map: 'http://img.maihaoche.com/tms/contracts/o_1ct9uiegaliv19glrdank610ff6p_22.png',
    color: '#FF4058',
    background: '#FC1E4F'
  }, {
    title: '中规/国产 Jeep 指南者',
    content: '高燃料税可以有效的使消费者考虑购买较小、较轻、较省油的车，或是甚至不开车。平均而言，现在的汽车中有75%是可以回收的，而使用回收的钢铁可以减少能源的消耗及污染[19]。美国国会会定期的针对联邦政府订定的燃油效率提出讨论，客车的标准在1985年订定，燃油效率为27.5英里每美制加仑（8.6升每100千米；33.0英里每英制加仑），轻型卡车的标准在2007年修改，燃油效率为22.2英里每美制加仑（10.6升每100千米；26.7英里每英制加仑）',
    pic: 'http://img.maihaoche.com/tms/contracts/o_1ct9uilbg1hbu18lp1j091dlf15p36u_3.png',
    map: 'http://img.maihaoche.com/tms/contracts/o_1ct9uiqmj1p2a19es1r7l1ohk1ita73_11.png',
    color: '#9FDA7F',
    background: '#64D487'
  }];
  return React.createElement(_mhcAdmin.DetailSwitch, {
    dataArray: dataArray
  });
}
};

/***/ })

})