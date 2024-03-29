import Chart from '../../components/chart/Chart';
import FeaturedChart from '../../components/featuredChart/FeaturedChart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TableData from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <FeaturedChart />
          <Chart aspect={2 / 1} title='Last 6 months (Revenue)' />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <TableData />
        </div>
      </div>
    </div>
  );
};

export default Home;
