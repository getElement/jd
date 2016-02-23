/* created by yancey email:1352677433@qq.com*/

$(document).ready(function() {
	var $oHeader = $('#header');
	var $oHdorpdown = $('#h-dorpdown');
	var $oLayerList = $('.layer-list');

	var $oCategorysMini = $('#categorys-mini');

	var $oSlideWrap = $('#p-slider .slider-wrap');
	var $oItemImg = $('#item-img');

	var $oBigBrand = $('.big-brand');

	var $oBrandNew = $('#brand-new');

	var $oGoTop = $('#go-top');
	var $oElevator  = $('#elevator');
	var $oEleLi = $('#elevator li');

	change();

	$(window).on('scroll',change);
	$(window).on('scroll',showEle);
	
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

	//top全部分类
	(function() {
		$('#categorys-mini .cw-icon').mouseover(function() {
			$('#categorys-mini-main').css('display', 'block');
			$(this).css('border-bottom', '1px solid #fff');
		});

		$('#categorys-mini').mouseleave(function() {
			$('#categorys-mini-main').css('display', 'none');
			$('#categorys-mini .cw-icon').css('border-bottom', '1px solid #ccc');
		})
	})();

	//菜单栏移入
	(function() {
		var $oItems = $('.p-categroy .inner .item');
		var $oPopLayer = $('.p-categroy .content .pop-layer');
		var $oImgList = $('#item-img .img-list');

		//img-list居中
		$oImgList.each(function(index,elem){
			var $oImg = $(elem).find('img');
			var $w = -$oImg.width()/2;
			$oImg.css('margin-left', $w);
		})

		$oItems.each(function(index, elem) {
			$(elem).mouseover(function(event) {
				$oItems.each(function(index, elem) {
					$(elem).removeClass('hover');
				})
				$oPopLayer.each(function(index, elem) {
					$(elem).removeClass('curr');
				})

				$(this).addClass('hover');
				if (index == 0) {
					$oSlideWrap.css('display', 'block');
					$oItemImg.css('display','none');
				} 
				if (index > 0) {
					$oSlideWrap.css('display', 'none');
					$oItemImg.css('display','block');
					$oPopLayer.eq(index - 1).addClass('curr');
					listImgTab(index-1);
				}
			});
			$('.content').mouseleave(function(){
				$oPopLayer.each(function(index, elem) {
					$(elem).removeClass('curr');
				})
			})
		});

		function listImgTab(iNow) {
			$oImgList.each(function(index, elem) {
				$(elem).css('display','none');
			});
			$oImgList.eq(iNow).css('display', 'block');
			console.log($oImgList.eq(iNow));
		}
	})();

	//轮播图
	(function() {
		var $oPslider = $('#p-slider');
		var $oItem = $('#p-slider .item');
		var $iNow = 0;
		var $oTrigger = $('#p-slider .ui-slider-trigger');
		var $oTimer = null;
		var $onOff = false;
		var $oTime = null;


		//轮播图居中
		$oItem.each(function(index,elem){
			var $oImg = $(elem).find('img');
			var $w = -$oImg.width()/2;
			$oImg.css('margin-left', $w);
		})

		tab();

		$oTrigger.each(function(index, elem) {
			$(elem).mouseover(function() {
				clearInterval($oTimer);

				clearInterval($oTime);
				$oTime = setTimeout(function(){
					onOff = true;
					imgchange(index);
					$iNow = index;
				},300);

			});
			$(elem).mouseleave(function(event) {
				tab();
			});
		})

		function tab() {
			clearInterval($oTimer);
			$oTimer = setInterval(function(){
				imgchange($iNow);
				if($iNow >= 5) {
					$iNow = 0;
				}else{
					$iNow++;
				}
			},4000);
		}

		//图片切换
		function imgchange(iNow) {
			$oItem.each(function(index, elem) {
				if(iNow!=index) {
					$(elem).css('display','none');
				}
				$oItem.eq(iNow).prev().css('display','block')
			});
			$oTrigger.each(function(index, elem) {
				if(iNow!=index) {
					$(elem).removeClass('curr');
				}
			});
			$oItem.eq(iNow).fadeIn('slow');
			$oTrigger.eq(iNow).addClass('curr');
			onOff = false;
		}

	})();

	//$oBigBrand
	(function() {
		var $oPlistLi = $('.big-brand .mc .p-list li');
		$oPlistLi.each(function(index, elem) {
			$(elem).mouseenter(function() {
				var $oHover = $('.big-brand .mc .p-list .hover');
				$oPlistLi.each(function(index, elem){
					$(elem).removeClass('hover');
				});
				$(this).addClass('hover');
			})	
		});
	})();

	//$oSceneMatch
	(function() {
		var $oSceneMatch = $('#scene-match');
		var $oMtNavItems = $('#scene-match .mt-nav .ui-switchable-item');
		var $oPanels = $('#scene-match .panel');
		var $oContentInners = $('#scene-match .content-inner .ui-content-inner');
		var $oNow = 0;
		var $iNow = 0;

		$oMtNavItems.each(function(index, elem) {
			$(elem).mouseover(function() {
				$oMtNavItems.each(function(index, elem) {
					$(elem).removeClass('curr');
				});
				if(index != $oNow) {
					$oPanels.each(function(index, elem) {
						$(elem).removeClass('curr').addClass('hide');
					});
				}
				$(this).addClass('curr');
				$oPanels.eq(index).removeClass('hide').addClass('curr');
				$oPanels.eq(index)
				$oNow = index;
				change($oPanels.eq(index));
			})
		});


		function change(obj) {
			var $oMcNavItems = obj.find('.ui-mc-nav');
			var $oContentInners = obj.find('.ui-content-inner');
			$oMcNavItems.each(function(index, elem) {
				$(elem).mouseover(function() {
					$oMcNavItems.each(function(index, elem) {
						$(elem).removeClass('selected');
					});
					if(index != $iNow) {
						$oContentInners.each(function(index, elem) {
							$(elem).removeClass('curr').addClass('hide');
						});
					}
					$(this).addClass('selected');
					$oContentInners.eq(index).removeClass('hide').addClass('curr');
					$iNow = index;
				})
			});
		}
	})();

	//$oBrandNew
	(function() {
		var $oBoxLi = $('#brand-new .new-list li');

		$oBoxLi.each(function(index, elem) {
			$(elem).mouseover(function(event) {
				var $oBoxInner = $(elem).find('.box-inner');
				$oBoxLi.each(function(index, elem) {
					$(this).removeClass('hover');
				})
				$(elem).addClass('hover');
				$oBoxInner.stop().animate({
					top: '-36px'
				},200,'linear')
			});
			$(elem).mouseout(function(event) {
				var $oBoxInner = $(elem).find('.box-inner');
				$oBoxInner.stop().animate({
					top: '0px'
				},200,'linear')
			});

		});
	})();

	//$oHotSales
	(function() {
		var $oHotNavLi = $('#floor10 .mt-nav li');
		var $oHotList = $('#floor10 .mc .hot-list');
		$oHotNavLi.each(function(index, elem) {
			$(elem).mouseover(function(event) {
				$oHotNavLi.each(function(index, elem) {
					$(this).removeClass('curr');
				});
				$(this).addClass('curr');
				$oHotList.each(function(index, elem) {
					$(this).removeClass('curr').addClass('hide');
				});
				$oHotList.eq(index).removeClass('hide').addClass('curr');
			});
		});
	})();

	//goto-top
	(function() {
		$oGoTop.click(function() {
			$('body,html').stop().animate({ scrollTop: 0 }, 200);
		})
	})();

	//$oElevator
	(function() {
		$oEleLi.each(function(index, elem) {
			$(elem).click(function() {
				var $aTop = setTop($(elem).index()) + 'px';
				$('body,html').stop().animate({
					scrollTop: $aTop
				}, {
					duration: 1200,
					easing: 'swing',
				});
			})

		});

	})()

	//图片按需加载
	function change() {
		var viewHeight = $(window).height();
		var iScrollY = $(document).scrollTop();
		$('img').each(function(index, elem){
			if($(elem).offset().top < viewHeight + iScrollY){
				if($(elem).attr('data-src')){
					var src = $(elem).attr('data-src');
					$(elem).attr('src',src);
				}
			}
		});
	}

	//显示楼层
	function showEle() {
		var $oTop1 = setTop(0);
		var $oScrollY = $(document).scrollTop();
		if($oScrollY < $oTop1) {
			$oElevator.css('display','none');
			$oGoTop.css('display','none');
		} else {
			$oElevator.css('display','block');
			$oGoTop.css('display','block');
		}
		$oEleLi.each(function(index, elem) {
			if($oScrollY >= setTop($(elem).index())) {
				$oEleLi.each(function(index, elem) {
					$(elem).removeClass('current');
				});
				$(elem).addClass('current');
			}
		});
	}

	//获取楼层滚动高度
	function setTop(index) {
		var $oTop = $('.floor').eq(index).position().top;
		return $oTop;
	}

});