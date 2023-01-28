import { component$ } from "@builder.io/qwik";
import { switchClassNames } from "./Switch.utils";

export type SwitchButton = { checked: boolean };

export const SwitchButton = component$((props: SwitchButton) => {
  return (
    <div
      class={`
		${switchClassNames.button}
		${
      props.checked
        ? "left-full -translate-x-full bg-blue-500"
        : "left-0 bg-gray-500"
    }
		absolute top-0 h-8  w-8 rounded-full transition-all
	`}
    />
  );
});

export const SwitchBackground = component$(() => {
  return (
    <div
      class={`${switchClassNames.background} h-8 w-14 rounded-full bg-gray-300`}
    />
  );
});
