import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './UserGameListStyle.module.scss';
import useGamesByStatus from '@/services/userGames/useGamesByStatus';
import FilterColumn from '@/components/UserListFilterColumn';
import UserGamesTable from '@/components/GamesListTable';
import { useAppSelector } from '@/app/hooks';
import { setListOrder } from '@/features/userUserGamesListSlice';

function UserGameList() {
  const dispatch = useDispatch();
  const listOrder = useAppSelector((state) => state.userGames.selectedLists);
  const { gamesByStatusForAUserLoading, gamesByStatusForAUser } =
    useGamesByStatus();

  // Initialize the listsOrder in redux toolkit
  useEffect(() => {
    if (gamesByStatusForAUser?.gamesByStatusForAUser?.listsOrder) {
      dispatch(
        setListOrder(
          gamesByStatusForAUser?.gamesByStatusForAUser?.listsOrder.split(',')
        )
      );
    }
  }, [dispatch, gamesByStatusForAUser?.gamesByStatusForAUser?.listsOrder]);

  if (gamesByStatusForAUserLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <FilterColumn />
      <div>
        {listOrder.map((list) => {
          return (
            <UserGamesTable
              key={list}
              gamesData={gamesByStatusForAUser?.gamesByStatusForAUser[list]}
              title={list[0].toUpperCase() + list.slice(1)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserGameList;

// import styles from "./UserGameListStyle.module.css";
// import { Layout } from "antd";
// import { Game } from "@/graphql/__generated__/graphql";
// import useUserGames from "@/services/userGames/useUserGames";
// import UserGameListDesktop from "@/components/UserGameList/Desktop";
// import UserGameListMobile from "@/components/UserGameList/Mobile";

// const UserGameList = () => {
//   // info("Cannot load the list of games");
//   const { gamesForAUserLoading, gamesForAUser } = useUserGames();

//   if (gamesForAUserLoading) {
//     return <div>Loading...</div>;
//   }

//   const data = gamesForAUser?.gamesForAUser.map((val: Game) => {
//     return {
//       key: val.id,
//       ...val,
//     };
//   });

//   console.log(gamesForAUser?.gamesForAUser);

//   return (
//     <Layout>
//       <div className={styles.TableContainer}>
//         <UserGameListDesktop data={data} />
//       </div>
//       <div className={styles.TableContainerSmall}>
//         <UserGameListMobile data={data} />
//         {/* <List
//           className={styles.List}
//           dataSource={data}
//           renderItem={(item: any, index) => (
//             <List.Item>
//               <List.Item.Meta
//                 avatar={
//                   <div className={styles.ImageHolderSmall}>
//                     <img
//                       className={styles.Image}
//                       src={item.imageURL}
//                       alt="game"
//                     />
//                   </div>
//                 }
//                 title={<p>{item.name}</p>}
//                 description={item.avgScore}
//               />
//               <Space className={styles.TagsContainerSmall} wrap>
//                 {item.platforms.map((platform: any) => (
//                   <Tag
//                     style={{
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       maxWidth: "100px",
//                     }}
//                   >
//                     {platform}
//                   </Tag>
//                 ))}
//               </Space>
//             </List.Item>
//           )}
//         /> */}
//       </div>
//       {/* {contextHolder} */}
//     </Layout>
//   );
// };

// export default UserGameList;
