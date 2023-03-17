/* 

*/

export const disableBodyScroll = (val) => {
	if (typeof window !== undefined && val) {
		let bodyEle = document.getElementsByTagName('body')[0];
		bodyEle.style.overflowY = 'hidden';
	}
};
