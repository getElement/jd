/* created by yancey email:1352677433@qq.com*/

$(document).ready(function() {

	var $oHeader = $('#header');
	var $oHdorpdown = $('#h-dorpdown');
	var $oLayerList = $('.layer-list');
	

	//header下拉地址
	(function(){
		var arr = [
			{"id": "1", "address": "北京"},
			{"id": "2", "address": "上海"},
			{"id": "3", "address": "天津"},
			{"id": "4", "address": "重庆"},
			{"id": "5", "address": "河北"},
			{"id": "6", "address": "山西"},
			{"id": "7", "address": "河南"},
			{"id": "8", "address": "辽宁"},
			{"id": "9", "address": "吉林"},
			{"id": "10", "address": "黑龙江"},
			{"id": "11", "address": "内蒙古"},
			{"id": "12", "address": "江苏"},
			{"id": "13", "address": "山东"},
			{"id": "14", "address": "安徽"},
			{"id": "15", "address": "浙江"},
			{"id": "16", "address": "福建"},
			{"id": "17", "address": "湖北"},
			{"id": "18", "address": "湖南"},
			{"id": "19", "address": "广东"},
			{"id": "20", "address": "广西"},
			{"id": "21", "address": "江西"},
			{"id": "22", "address": "四川"},
			{"id": "23", "address": "海南"},
			{"id": "24", "address": "贵州"},
			{"id": "25", "address": "云南"},
			{"id": "26", "address": "西藏"},
			{"id": "27", "address": "陕西"},
			{"id": "28", "address": "甘肃"},
			{"id": "29", "address": "青海"},
			{"id": "30", "address": "宁夏"},
			{"id": "31", "address": "新疆"},
			{"id": "32", "address": "台湾"},
			{"id": "33", "address": "香港"},
			{"id": "32", "address": "澳门"},
			{"id": "32", "address": "钓鱼岛"},
			{"id": "32", "address": "海外"}
		];


		for (var i = 0; i < arr.length; i++) {
			var $oDiv = $('<div class="item"><a data-id="' + (arr[i].id) + '" href="javascript:;">' + (arr[i].address) + '</a></div>');
			$oLayerList.append($oDiv);
		};
		var $aDiv = $('.layer-list .item');
		$aDiv.eq(0).find('a').addClass('selected');
	})();

	//nav
	(function() {
		$('.categorys .title').mouseover(function(event) {
			$('.categorys .dd').css('display', 'block');
		});
		$('.categorys .dd').mouseleave(function(event) {
			$('.categorys .dd').css('display', 'none');
		});
		$('.dd-inner .item').each(function(index, element) {
			$(this).mouseover(function() {
				$(this).addClass('itemhover');
				$('.categorys .dorpdown-layer').eq(0).show();
				$('.categorys .dorpdown-layer .item-sub').eq(index).show();
			}).mouseout(function() {
				$(this).removeClass('itemhover');
				$('.categorys .dorpdown-layer').eq(0).hide();
				$('.categorys .dorpdown-layer .item-sub').hide();
			});
		});
		$('.categorys .dorpdown-layer .item-sub').each(function(index, element) {
			$(this).mouseover(function() {
				$('.categorys .dorpdown-layer').eq(0).show();
				$(this).show();
				$('.dd-inner .item').eq(index).addClass('itemhover');
			}).mouseout(function() {
				$('.categorys .dorpdown-layer').eq(0).hide();
				$(this).hide();
				$('.dd-inner .item').eq(index).removeClass('itemhover');
			});
		});
	})();


});