/* 

*/

export const disableBodyScroll = (val) => {
	if (typeof window !== undefined && val) {
		let bodyEle = document.getElementsByTagName('body')[0];
		bodyEle.style.overflowY = 'hidden';
	}
};


export function handleScrollToSection(id) {
	const element = document.getElementById(id);
	element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
}
