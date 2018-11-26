---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

从图片缩略图到详细说明的一个过场效果。

## en-US
The simplest usage.

````jsx
import {PicDetailsAnim} from 'mhc-admin';

const imgArray=[
{ image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png', content:'天门山，古称云梦山、嵩梁山，是张家界最早被记入史册的名山。', title:'照片111' },
{ image: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png', content:'千年玄狐，跨越人间仙界的爱情天堑 万年守望，感召天门绝境的生死恋歌', title:'照片222' },
{ image: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png', content:'红石林国家地质公园位于湘西自治州古丈县茄通和断龙乡境内，面积约三十平方公里，距古丈县城26公里', title:'照片333' },
{ image: 'https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png', content:'满家古苗寨位于吉首到凤凰的必经之地吉信镇，距离凤凰古城26公里，209国道穿村而过', title:'照片444' },
{ image: 'https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png', content:'叭咕老家寨是一个典型的苗家山寨，是州、县两级旅游部门开发乡村旅游，精心打造的样板古苗寨', title:'照片555' },
{ image: 'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png', content:'隐山，又名龙山、龙王山，历为湘潭四大名山之一，海拔437米， 巍然屹立在湘潭县西南', title:'照片666' },
{ image: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png', content:'湘潭县乌石峰，为南岳72峰之一，海拔377.5米，南接衡山，北接岳麓，高耸入云', title:'照片777' },
{ image: 'https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png', content:'橘洲，橘子之洲，位于湖南省长沙市岳麓区境内，是湘江的一个江心小岛，长约五公里', title:'照片888' },
{ image: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png', content:'汨水源旅游区位于湖南平江县一江西修水县交界的石牛寨西麓', title:'照片999' },
{ image: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png', content:'祁东县状元桥在祁东县归阳镇，有一座五孔石拱桥，全长80米，宽8米，高9米', title:'照片110' },
{ image: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png', content:'洣水风光带属省级风景名胜区，它座落在衡东县洣水河段的下游，发源于罗霄山肪西麓', title:'照片111' },
{ image: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png', content:'坐落在湖南省张家界市凤湾大桥的军声画院是由著名的土家族青年画家砂石画创始人李军声先生', title:'照片112' },
{ image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png', content:'三宝一绝：三宝是指张家界地区知名的三个人文民俗景区【土家风情园】', title:'照片113' },
{ image: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png', content:'到武陵源旅游，是不能不去杨家界的。杨家界景区位于张家界西北角，北邻天子山，横贯武陵', title:'照片114' },
{ image: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png', content:'永顺县的马拉河，坐落在美丽的湘西永顺县羊峰乡境内，是石灰岩地区流水运动塑造成的河谷', title:'照片115' },
{ image: 'https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png', content:'它地处新晃侗族自治县最西部，与贵州的三穗、玉屏、镇远三县接壤，距新晃县城75公里', title:'照片116' },
];

ReactDOM.render(
  <PicDetailsAnim imgArray={imgArray} height="375px"/>
, mountNode);
````
