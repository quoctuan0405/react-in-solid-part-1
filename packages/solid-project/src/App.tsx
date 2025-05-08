import { mount } from "react-component";
import { onMount } from "solid-js";

export const App = () => {
	let container!: HTMLDivElement;

	onMount(() => {
		mount(container);
	});

	return (
		<>
			<div ref={container} />
			<div>Hi from Solid</div>
		</>
	);
};
