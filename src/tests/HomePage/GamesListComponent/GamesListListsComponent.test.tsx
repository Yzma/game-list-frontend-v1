import { describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContextWrapper from '@/ContextWrapper';
import GamesList from '@/components/AllGames/GamesList/index';

vi.mock('../../../services/games/useAllGames', async () => {
  const actual: unknown = await vi.importActual(
    '../../../services/games/useAllGames'
  );
  if (typeof actual !== 'object')
    throw new Error('Import Actual did not return not an object');
  return {
    ...actual,
    default: () => ({
      loading: false,
      games: [
        {
          __typename: 'Game',
          id: '1',
          name: 'Game 1',
          description: 'Description 1',
          imageURL:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co4a7a.png',
          tags: ['3D', 'Fantasy'],
          genres: ['Action', 'Adventure'],
          platforms: ['PC', 'macOS'],
          releaseDate: '2021-01-01 00:00:00',
          avgScore: 5,
        },
        {
          __typename: 'Game',
          id: '2',
          name: 'Game 2',
          description: 'Description 2',
          imageURL:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co4a7a.png',
          tags: ['4D', 'Soullike'],
          genres: ['Role Playing', 'Straitagy'],
          platforms: ['Xbox 360', 'Playstation 3'],
          releaseDate: '2021-01-02 00:00:00',
          avgScore: 10,
        },
        {
          __typename: 'Game',
          id: '3',
          name: 'Game 3',
          description: 'Description 3',
          imageURL:
            'https://images.igdb.com/igdb/image/upload/t_cover_big/co4a7a.png',
          tags: ['2D', 'Action'],
          genres: ['JRPG', 'Simulation'],
          platforms: ['Xbox', 'Playstation 2'],
          releaseDate: '2021-01-03 00:00:00',
          avgScore: 8,
        },
      ],
    }),
  };
});

describe('Games List Component', () => {
  beforeEach(() => {
    // window.innerWidth = 800;
    global.innerWidth = 550;
    global.dispatchEvent(new Event('resize'));
  });

  // afterEach(() => {
  // window.innerWidth = window.outerWidth;
  // });

  it('should render the games list when isCardView false', async () => {
    const { queryByText, queryByLabelText, debug } = render(
      <ContextWrapper>
        <GamesList isCardView={false} />
      </ContextWrapper>
    );
    // vi.spyOn(window.screen, 'width', 'get').mockReturnValue(1600);
    // expect(window.screen.width).toBe(1600);

    expect(queryByText('Game 1')).toBeInTheDocument();
    expect(queryByText('Game 2')).toBeInTheDocument();
    expect(queryByText('Game 3')).toBeInTheDocument();

    debug();
    // window.innerWidth = 600;
    // expect(window.innerWidth).toBe(600);
    // global.dispatchEvent(new Event('resize'));

    // Object.defineProperty(window, 'innerWidth', {
    //   writable: true,
    //   configurable: true,
    //   value: 550,
    // });

    // window.dispatchEvent(new Event('resize'));

    // expect(window.innerWidth).toBe(550);

    const platforms = screen.queryAllByTestId('gamePlatforms') as HTMLElement[];
    const platformOne = platforms[0];
    expect(platformOne).toHaveTextContent('PC');
    debug(platformOne);
    const style = window.getComputedStyle(platformOne);
    // console.log('style of platformOne: ', style);
    // expect(style.display).toBe('none');

    // expect(platformOne).toHaveStyleRule('display: none');
  });
});