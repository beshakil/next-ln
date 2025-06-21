import { Fira_Code as FontMono, Inter as FontSans, Noto_Serif_Bengali as NotoSerif, Tiro_Bangla as TiroSerif} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontNoto = NotoSerif({
  subsets: ["latin"],
  variable: "--font-noto",
});
export const fontTiro = TiroSerif({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-tiro",
});
