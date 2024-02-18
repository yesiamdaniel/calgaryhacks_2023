import { View, Text } from 'react-native'
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectCurrentPage } from '../../redux/slice/pageSlice';
import { PAGES } from '../../constants/actions';
import { setPage } from '../../redux/slice/pageSlice';

import Navbar from './Navbar';
import Home from '../../pages/Home/Home';
import Explore from '../../pages/Explore/Explore';
import Learn from '../../pages/Learn/Learn';
import Progress from '../pages/Progress/Progress';
import Profile from '../../pages/Profile/Profile';
import Error from '../../pages/Error/Error';

const PageContainer = () => {
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);


  console.log(currentPage);

  return (
    <View>
      {currentPage === PAGES.HOME ? (
        <>
          <Home />
          <Navbar />
        </>
      ) : currentPage === PAGES.EXPLORE ? (
        <>
          <Explore />
          <Navbar />
        </>
      ) : currentPage === PAGES.LEARN ? (
        <>
          <Learn />
          <Navbar />
        </>
      ) : currentPage === PAGES.PROGRESS ? (
        <>
          <Progress />
          <Navbar />
        </>
      ) : currentPage === PAGES.PROFILE ? (
        <>
          <Profile />
          <Navbar />
        </>
      ) : (
        <>
          <Error />
          <Navbar />
        </>
      )}
    </View>
  )
}

export default PageContainer