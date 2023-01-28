import { Counter } from "./components/counter";
import { Logo } from "./components/logo/logo";
import { Switch } from "./components/Switch";

import "./global.css";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Logo />
        <Counter />
        <Switch name="name" />
      </body>
    </>
  );
};
