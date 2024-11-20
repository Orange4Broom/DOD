import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

interface IProps {
  name: IconName;
  type: IconPrefix;
  color?: string;
}

library.add(fas);
library.add(fab);

export const Icon = ({ name, type, color }: IProps) => {
  return (
    <span className="icon">
      <FontAwesomeIcon icon={[type, name]} style={{ color: color }} />
    </span>
  );
};
