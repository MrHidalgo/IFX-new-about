/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */

	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initWebFontLoader();
		initPreventBehavior();
		initSvg4everybody();
		// ==========================================

		// lib
		// ==========================================
		initSwiper();

		$('#fullpage').fullpage({
			sectionSelector: '.fullpage-section',
			scrollingSpeed: 700,
			navigation: true,
			fitToSection: true,
			verticalCentered: true,
			touchSensitivity: 10,
			responsiveWidth: 768,
			responsiveHeight: 750
		});

		// callback
		// ==========================================
	};
	initNative();
})();
