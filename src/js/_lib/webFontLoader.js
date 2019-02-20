

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
const initWebFontLoader = () => {

	/**
   * @description
	 */
	WebFont.load({
    google: {
      families: [
        'Rajdhani:400,500,600,700',
        'Open+Sans:400,600,700,800'
      ]
    }
  });

	/**
   * @description
	 */
  const WebFontConfig = {
    custom: {
      families: [
        'SFUIText:n4'
      ]
    }
  };

};