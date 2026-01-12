
export interface ColorInfo {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  twClass: string;
  combinations: string;
  wcag: string;
  isGradient?: boolean;
  gradientValue?: string;
}

export interface CombinationExample {
  title: string;
  description: string;
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  text: string;
  category: 'light' | 'dark';
  isBgGradient?: boolean;
  bgGradient?: string;
}
