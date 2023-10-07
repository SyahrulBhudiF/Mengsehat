import { IconType } from 'react-icons';

export interface buttonInterface {
  text: string[];
}

export interface navInterface {
  navlist: string[];
}

export interface cardInterface {
  img: string;
  text?: string;
  Icon?: IconType;
  py: string;
  px: string;
  fontSize: string;
}

export interface cardsInterface {
  text: string;
  img: string;
  width: string;
  font: string;
  fontSize: string;
  marginTop: string;
  Icon?: IconType;
  popUpText?: string;
  IconPopUp?: IconType;
  py: string;
  px: string;
  fontSize2: string;
}

export interface programInterface {
  text: string;
}

export interface textInterface {
  text: string[];
}

export interface slideInterface {
  text: string;
  img: string;
  name: string;
  position: string;
}
