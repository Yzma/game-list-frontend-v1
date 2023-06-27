import type { GameDataType } from '@/components/GamesListTable/types';

export type ListEditorType = {
  isGameAdded?: boolean;
  userGameLoading?: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  game: GameDataType;
  setSelectedGame: React.Dispatch<
    React.SetStateAction<GameDataType | undefined>
  >;
};
