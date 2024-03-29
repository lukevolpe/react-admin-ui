import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import './single.scss';
import TableData from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src='https://images.pexels.com/photos/18515836/pexels-photo-18515836/free-photo-of-portrait-of-a-starling-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                className='itemImg'
              />
              <div className='details'>
                <h1 className='itemTitle'>Jane Doe</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email: </span>
                  <span className='itemValue'>jane.doe@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone: </span>
                  <span className='itemValue'>012345 6789</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address: </span>
                  <span className='itemValue'>Fake address here</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country: </span>
                  <span className='itemValue'>United Kingdom</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User Spending (Last 6 months)' />
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Recent Transactions</h1>
          <TableData />
        </div>
      </div>
    </div>
  );
};

export default Single;
