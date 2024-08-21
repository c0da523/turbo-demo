import { Switch } from "@repo/ui";
import { useState } from "react";

const SwitchComponent = () => {
  const [active, setActive] = useState(false);
  return <Switch checked={active} onCheckedChange={setActive} />;
};

export default SwitchComponent;
