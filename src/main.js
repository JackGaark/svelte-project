// import App from './App.svelte';
import Slider from './Slider.svelte';

const app = new Slider({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;