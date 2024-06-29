export type BaseCardColor =
    | "primary"
    | "primary-x-light"
    | "primary-light"
    | "green-light"
    | "sunglow-light"
    | "red-orange-light"
    | "dodger-blue-light"
    | "purple-light";

export type BaseCardBorderRadius =
    | "x-small"
    | "small"
    | "medium"
    | "large"
    | "x-large";

export interface BaseCardProps {
    children: React.ReactNode;
    className?: string;
    color?: BaseCardColor;
    borderRadius?: BaseCardBorderRadius;
    hasBorder?: boolean;
    hasShadow?: boolean;
}
