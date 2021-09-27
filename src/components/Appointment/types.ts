import { RectButtonProps } from "react-native-gesture-handler";

interface GuildProps {
  id: string;
  name: string;
  owner: boolean;
  icon: null | string;
}

export interface AppointmentProps {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

export interface Props extends RectButtonProps {
  data: AppointmentProps;
};