(function () {
				function resizeBaseFontSize() {
					var rootHtml = document.documentElement,
						deviceWidth = rootHtml.clientWidth;
					if (deviceWidth > 720) {
						deviceWidth = 720;
					}
					rootHtml.style.fontSize = deviceWidth /7.2 + "px";
				}
				resizeBaseFontSize();
				window.addEventListener("resize", resizeBaseFontSize, false);
				window.addEventListener("orientationchange", resizeBaseFontSize, false);
			})();
			
			
				function openappnav() {
					document.getElementById("aside-overlay").style.display = "block";
					document.getElementById("app-nav-aside").style.display = "block";
				}
			
				function closeappnav() {
					document.getElementById("aside-overlay").style.display = "none";
					document.getElementById("app-nav-aside").style.display = "none";
				}
			