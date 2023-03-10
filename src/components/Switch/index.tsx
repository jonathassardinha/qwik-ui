import { $, component$, QwikChangeEvent, useSignal } from "@builder.io/qwik";
import { SwitchBackground, SwitchButton } from "./Switch.styled";
import { SwitchProps } from "./Switch.utils";

export const Switch = component$((props: SwitchProps) => {
  const autoGeneratedId = `${props.name}${Math.random() * 5}`;
  const checked = useSignal(false);

  const handleChange = $((event: QwikChangeEvent<HTMLInputElement>) => {
    checked.value = event.target.checked;
    props.onChange$?.(event);
  });

  return (
    <label for={autoGeneratedId} class="relative flex w-fit cursor-pointer">
      <SwitchBackground />
      <SwitchButton checked={checked.value} />
      <input
        id={autoGeneratedId}
        name={props.name}
        type="checkbox"
        class="hidden"
        checked={checked.value}
        onChange$={handleChange}
      />
    </label>
  );
});
