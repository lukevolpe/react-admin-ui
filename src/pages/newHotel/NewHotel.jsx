import './newHotel.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { hotelInputs } from '../../formSource';
import useFetch from '../../../../client/src/hooks/useFetch';
import axios from 'axios';

const NewHotel = () => {
  const [files, setFiles] = useState('');
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch('/api/rooms');

  const handleChange = (ev) => {
    setInfo((prev) => ({ ...prev, [ev.target.id]: ev.target.value }));
  };

  const handleSelect = (ev) => {
    const value = Array.from(
      ev.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleClick = async (ev) => {
    ev.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append('file', file);
          data.append('upload_preset', 'upload');
          const uploadRes = await axios.post(
            'https://api.cloudinary.com/v1_1/lukevolpe/image/upload',
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );
      const newHotel = {
        ...info,
        rooms,
        photos: list,
      };
      await axios.post('/api/hotels', newHotel);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(info);

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add New Hotel</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt='image'
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input
                  type='file'
                  multiple
                  onChange={(ev) => setFiles(ev.target.files)}
                  id='file'
                  style={{ display: 'none' }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className='formInput'>
                <label>Featured</label>
                <select id='featured' onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className='selectRooms'>
                <label>Rooms</label>
                <select id='rooms' multiple onChange={handleSelect}>
                  {loading
                    ? 'Loading...'
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
