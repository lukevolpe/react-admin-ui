import './newRoom.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useState } from 'react';
import { roomInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch('/api/hotels');

  const handleChange = (ev) => {
    setInfo((prev) => ({ ...prev, [ev.target.id]: ev.target.value }));
  };

  const handleClick = async (ev) => {
    ev.preventDefault();
    const roomNumbers = rooms.split(',').map((room) => ({ number: room }));
    try {
      await axios.post(`/api/rooms/${hotelId}`, { ...info, roomNumbers });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add New Room</h1>
        </div>
        <div className='bottom'>
          <div className='right'>
            <form>
              {roomInputs.map((input) => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className='formInput'>
                <label>Rooms</label>
                <textarea
                  onChange={(ev) => setRooms(ev.target.value)}
                  placeholder='Add comma separated room numbers here'
                />
              </div>
              <div className='formInput'>
                <label>Choose a hotel</label>
                <select
                  id='hotelId'
                  onChange={(ev) => setHotelId(ev.target.value)}
                >
                  {loading
                    ? 'Loading...'
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Create Room</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
