export type TypographyVariant =
    | "displayLG"
    | "displaySM"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "paragraphLG"
    | "paragraphMD"
    | "paragraphSM"
    | "subtitleLG"
    | "subtitleMD"
    | "subtitleSM";

export type TypographyWeight = "normal" | "medium" | "semibold" | "bold";

export type TypographyAlign =
    | "center"
    | "left"
    | "right"
    | "justify"
    | "inherit";

export type TypographyProps = {
    variant: TypographyVariant;
    weight?: TypographyWeight;
    align?: TypographyAlign;
    className?: string;
    children: React.ReactNode;
};
