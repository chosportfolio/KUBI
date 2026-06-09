export type Message = {
  type: "text" | "menu" | "link";
  text: string;

  description?: string;
  buttonText?: string;
  url?: string;

  isUser: boolean;
  time: string;

  isLoading?: boolean;
};

export type Menu = {
  title: string;
  icon: string;

  showInMenu: boolean;
  page?: number;

  keywords: string[];

  userText: string;
  botText: string;

  description?: string;
  buttonText?: string;
  url?: string;
};