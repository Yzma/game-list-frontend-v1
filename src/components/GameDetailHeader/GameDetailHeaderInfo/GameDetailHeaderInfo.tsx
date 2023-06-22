import { Button, Layout, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import { HeartOutlined, DownCircleOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import ListEditor from '@/components/ListEditor';
import styles from '@/components/GameDetailHeader/GameDetailHeaderInfo/GameDetailHeaderInfo.module.scss';
import type { GameDetailsType } from '@/components/GameDetailHeader/types';
import useUserGameById from '@/services/userGames/useUserGameById';
import { useAppSelector } from '@/app/hooks';
import type { Game as GameType } from '@/graphql/__generated__/graphql';
import useAddRemoveGameCustomHook from '@/hooks/useAddRemoveGameCustomHook';

function GameDetailHeaderInfo({ game }: GameDetailsType) {
  const [open, setOpen] = useState(false);

  const { userGameLoading, fetchUserGame } = useUserGameById();

  const { addedList } = useAppSelector((state) => state.addedGames);

  const {
    handleAddGameHook,
    contextHolder: handGameContextHolder,
    handleEditUserGameStatus,
  } = useAddRemoveGameCustomHook();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button
          type="text"
          onClick={async () => {
            await handleEditUserGameStatus('Planning', game as GameType);
          }}
        >
          {' '}
          Set as Planning
        </Button>
      ),
    },
    {
      key: '2',
      label: (
        <Button
          type="text"
          onClick={async () => {
            await handleEditUserGameStatus('Playing', game as GameType);
          }}
        >
          Set as Playing
        </Button>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: (
        <>
          <Button
            type="text"
            onClick={(e) => {
              e.preventDefault();
              fetchUserGame({ variables: { gameId: game.id } });
              setOpen(!open);
            }}
          >
            Open List Editor
          </Button>
          <ListEditor
            isGameAdded={addedList.includes(game.id as string)}
            userGameLoading={userGameLoading}
            open={open}
            setOpen={setOpen}
            game={game}
          />
        </>
      ),
    },
  ];

  return (
    <Layout className={styles.infoContainer}>
      <Content className={styles.infoContent}>
        <div className={styles.infoOverlap}>
          <div className={styles.overlapInner}>
            {game?.imageURL && (
              <img
                alt={game?.name}
                src={game?.imageURL}
                className={styles.infoImage}
              />
            )}
            <div className={styles.infoActions}>
              <Space.Compact className={styles.listActions}>
                <Button
                  type="primary"
                  className={styles.add}
                  onClick={async () => {
                    await handleAddGameHook(game as GameType);
                  }}
                >
                  Add to List
                </Button>

                <Dropdown
                  arrow
                  className="dropdown"
                  menu={{ items }}
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <Button type="primary" icon={<DownCircleOutlined />} />
                </Dropdown>
              </Space.Compact>
              <div>
                <Button
                  type="primary"
                  danger
                  icon={<HeartOutlined />}
                  onClick={async () => {
                    await handleAddGameHook(game as GameType);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoInfo}>
          <h1>{game.name}</h1>
          <p>{game.description}</p>
          <div className={styles.infoInfoTags}>
            <a href="/">Overview</a>
            <a href="/">Reviews</a>
            <a href="/">Related</a>
            <a href="/">Status</a>
            <a href="/">Social</a>
          </div>
        </div>
      </Content>
      {handGameContextHolder}
    </Layout>
  );
}

export default GameDetailHeaderInfo;
