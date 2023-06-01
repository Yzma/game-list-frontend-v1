import { Badge, List } from 'antd';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './AvailableListsStyle.module.scss';
import { setSelectedList } from '@/features/userUserGamesListSlice';
import { useAppSelector } from '@/app/hooks';
import useGamesByStatus from '@/services/userGames/useGamesByStatus';

function AvailableLists() {
  const dispatch = useDispatch();
  const selectedItem = useAppSelector((state) => state.userGames.selectedList);

  const { getGamesByStatusForAUser, gamesByStatusForAUser } =
    useGamesByStatus();

  useEffect(() => {
    if (getGamesByStatusForAUser) {
      getGamesByStatusForAUser();
    }
  }, [getGamesByStatusForAUser]);

  const data = [];
  if (gamesByStatusForAUser?.gamesByStatusForAUser?.totalCount) {
    data.push({
      name: 'All',
      count: gamesByStatusForAUser?.gamesByStatusForAUser?.totalCount,
    });
  }
  if (gamesByStatusForAUser?.gamesByStatusForAUser?.planningCount) {
    data.push({
      name: 'Planning',
      count: gamesByStatusForAUser?.gamesByStatusForAUser?.planningCount,
    });
  }
  if (gamesByStatusForAUser?.gamesByStatusForAUser?.playingCount) {
    data.push({
      name: 'Playing',
      count: gamesByStatusForAUser?.gamesByStatusForAUser?.playingCount,
    });
  }
  if (gamesByStatusForAUser?.gamesByStatusForAUser?.completedCount) {
    data.push({
      name: 'Completed',
      count: gamesByStatusForAUser?.gamesByStatusForAUser?.completedCount,
    });
  }
  if (gamesByStatusForAUser?.gamesByStatusForAUser?.pausedCount) {
    data.push({
      name: 'Paused',
      count: gamesByStatusForAUser?.gamesByStatusForAUser?.pausedCount,
    });
  }
  if (gamesByStatusForAUser?.gamesByStatusForAUser?.droppedCount) {
    data.push({
      name: 'Dropped',
      count: gamesByStatusForAUser?.gamesByStatusForAUser?.droppedCount,
    });
  }

  const handleItemClick = (item: string) => {
    dispatch(setSelectedList(item.toLowerCase()));
  };

  return (
    <List
      dataSource={data}
      className={styles.listStyle}
      renderItem={(item) => (
        <List.Item
          data-testid={`listitem-${item.name}`}
          onClick={() => handleItemClick(item.name)}
          style={
            selectedItem === item.name.toLowerCase()
              ? { backgroundColor: '#e0ddd3' }
              : {}
          }
        >
          <div className={styles.listName}>
            <p>{item.name}</p>
            <Badge count={item.count} showZero color="rgb(63, 114, 175)" />
          </div>
        </List.Item>
      )}
    />
  );
}

export default AvailableLists;
