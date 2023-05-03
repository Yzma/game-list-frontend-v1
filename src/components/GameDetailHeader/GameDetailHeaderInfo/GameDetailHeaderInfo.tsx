import { Button, Layout, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';

import { HeartOutlined, DownCircleOutlined } from '@ant-design/icons';

import { Content } from 'antd/es/layout/layout';
import { Game as GameType } from '@/graphql/__generated__/graphql';
import styles from '@/components/GameDetailHeader/GameDetailHeaderInfo/GameDetailHeaderInfo.module.scss';

function GameDetailHeaderInfo({ game }: { game: GameType }) {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Button type="text"> Set as Planning</Button>,
    },
    {
      key: '2',
      label: <Button type="text">Set as Playing</Button>,
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: <Button type="text">Open List Editor</Button>,
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
                <Button type="primary" className={styles.add}>
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
                <Button type="primary" danger icon={<HeartOutlined />} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoInfo}>
          <h1>{game?.name}</h1>
          <p>{game?.description}</p>
          <div className={styles.infoInfoTags}>
            <a href="/">Overview</a>
            <a href="/">Reviews</a>
            <a href="/">Related</a>
            <a href="/">Status</a>
            <a href="/">Social</a>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default GameDetailHeaderInfo;