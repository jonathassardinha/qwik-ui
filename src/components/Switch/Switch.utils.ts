import { PropFunction, QwikChangeEvent } from "@builder.io/qwik";

export const switchClassNames = {
  background: "background",
  button: "button",
};

export type SwitchProps = {
  name: string;
  onChange$?: PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>;
};
