export type CardColor =
    | "primary"
    | "primary-x-light"
    | "primary-light"
    | "green-light"
    | "sunglow-light"
    | "red-orange-light"
    | "dodger-blue-light"
    | "purple-light";

export type CardBorderRadius =
    | "x-small"
    | "small"
    | "medium"
    | "large"
    | "x-large";

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    color?: CardColor;
    borderRadius?: CardBorderRadius;
    hasBorder?: boolean;
    hasShadow?: boolean;
}
