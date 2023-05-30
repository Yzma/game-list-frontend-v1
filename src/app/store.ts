import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from '@/features/userSlice';
import userGamesListReducer from '@/features/userUserGamesListSlice';
import userGameReducer from '@/features/userGameSlice';
import addedGamesReducer from '@/features/addedGamesSlice';
import homeSearchSlice from '@/features/homeSearchSlice';
import { createGameFiltersSlice } from '@/features/gameFiltersSlice';
import { BaseFilters, HomeGameFilters, UserGameFilters } from '@/types/global';
// import gameFiltersSlice from '@/features/gameFiltersSlice';

const defaultGameFilters: HomeGameFilters = {
  genres: [],
  platforms: [],
  tags: [],
  year: undefined,
  search: undefined,
  sortBy: 'name',
};

const defaultUserGameFilters: UserGameFilters = {
  ...defaultGameFilters,
  sortBy: undefined,
  selectedList: 0,
};

const gameFiltersSlice =
  createGameFiltersSlice<BaseFilters>(defaultGameFilters);
const userGameFiltersSlice = createGameFiltersSlice<UserGameFilters>(
  defaultUserGameFilters
);

const rootReducer = combineReducers({
  user: userReducer,
  userGames: userGamesListReducer,
  userGame: userGameReducer,
  homeSearch: homeSearchSlice,

  // gameFilters: gameFiltersSlice,
  gameFilters: gameFiltersSlice.reducer,
  userGameFilters: userGameFiltersSlice.reducer,

  addedGames: addedGamesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const {
  setFilters: setGameFilters,
  resetFilter: resetGameFilter,
  reset: resetGameFilters,
} = gameFiltersSlice.actions;
export const {
  setFilters: setUserGameFilters,
  resetFilter: resetUserGameFilter,
  reset: resetUserGameFilters,
} = userGameFiltersSlice.actions;

setupListeners(store.dispatch);
