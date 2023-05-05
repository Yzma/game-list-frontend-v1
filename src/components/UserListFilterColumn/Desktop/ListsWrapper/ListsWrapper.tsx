import { DownOutlined, UpOutlined } from '@ant-design/icons';
import React from 'react';
import ReorderLists from '../ReorderLists';
import AvailableLists from '../AvailableLists';
import styles from './ListsWrapperStyle.module.scss';

function ListsWrapper() {
  const [listStyles, setListStyles] = React.useState<boolean>(false);
  return (
    <>
      <div className={styles.multiListStyle}>
        <p>Lists</p>
        {listStyles ? (
          <UpOutlined onClick={() => setListStyles((prev) => !prev)} />
        ) : (
          <DownOutlined onClick={() => setListStyles((prev) => !prev)} />
        )}
      </div>
      <div className={styles.multiLists}>
        {listStyles ? <ReorderLists /> : <AvailableLists />}
      </div>
    </>
  );
}

export default ListsWrapper;