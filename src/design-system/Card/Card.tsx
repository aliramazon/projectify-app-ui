import { trimWhiteSpaces } from "design-system/utils";
import { CardProps } from "./types";
import { colorMap, borderRadiusMap } from "./classnames";
import "./Card.css";

const Card: React.FC<CardProps> = ({
    color,
    borderRadius,
    hasBorder,
    hasShadow,
    children,
    className,
}) => {
    const colorClassName = color ? colorMap[color] : "";
    const borderRadiusClassName = borderRadius
        ? borderRadiusMap[borderRadius]
        : "";
    const borderClassName = hasBorder ? "card-hasBorder" : "";
    const shadowClassName = hasShadow ? "card-hasShadow" : "";
    const classNames = trimWhiteSpaces(
        `card ${colorClassName} ${borderRadiusClassName} ${borderClassName} ${shadowClassName} ${
            className ? className : ""
        }`
    );

    return <div className={classNames}>{children}</div>;
};

export { Card };
