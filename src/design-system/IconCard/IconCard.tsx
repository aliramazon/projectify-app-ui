import { Icon, IconSize } from "design-system/Icon";
import { IconCardProps } from "./types";
import { colorClassNames, sizeClassNames, shapeClassNames } from "./classnames";

import "./IconCard.css";

const IconCardIconSize = {
    sm: 24,
    md: 36,
    lg: 48,
};

const IconCard: React.FC<IconCardProps> = ({
    color,
    size,
    iconName,
    shape,
}) => {
    const sizeClassName = sizeClassNames[size];
    const colorClassName = colorClassNames[color];
    const shapeClassName = shapeClassNames[shape];

    const classNames = `iconCard ${sizeClassName} ${colorClassName} ${shapeClassName}`;
    const iconSize = IconCardIconSize[size];

    return (
        <div className={classNames}>
            <Icon
                iconName={iconName}
                className="iconCard-icon"
                size={iconSize as IconSize}
            />
        </div>
    );
};

export { IconCard };
