// var goodsDetail=()=>{
// 	var data=[];
// 	for(var i=1; i<5;i++){
// 		data.push({
// 			title:"这个产品是采用uni-app技术编辑而成。可以编译成多端语言发布",
// 			image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product"+i+".jpg", 
// 		})
// 	}
// 	return {code:200,message:ok,data:data}
// }
var goodsDetail={
						id:'1',
						title:"南极鲜虾1",
						image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544204280691&di=655e46080cb185c45ab6f3d97b972b6a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fbf096b63f6246b60e3d2c94ee0f81a4c510fa228.jpg',
						stock:'30',
						price:'128',
						newprice:'99',
						tip:'自营',
						detail:'南极虾（学名Euphausia superba）又名大磷虾或南极大磷虾，是一种生活在南极洲水域的浮游甲壳动物。磷虾属，于南纬60℃以南的冰缘区域大量聚集。极磷虾是似虾的无脊椎动物，它们以微小的浮游植物作为食物，从中将初级生产而来的能量，转化来维持其远洋带的生命周期。它们是南极生态系统的关键物种，若以生物质能来说，它们可能是地球上最成功的动物物种 （大约共有5亿吨）。',
						attribute:[//属性
							{
								name:'重量',
								text:'59g',
							},
							{
								name:'口味',
								text:'清淡'
							},{
								name:'产地',
								text:'南极'
							}
						],
						version:[//规格-型号-版本
							{
								name:'大盘',
								price:'128'
							},{
								name:'小盘',
								price:'98'
							},{
								name:'最大最大的大盘',
								price:'198'
							}
						]
						 
				}

export default goodsDetail
